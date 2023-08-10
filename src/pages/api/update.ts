import type { NextApiRequest, NextApiResponse } from 'next';
import { UserController } from './server/controllers/UserController';

type Data = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  if (req.method === 'PUT') {
    const user = req.body;

    if (!user.email || !user.username) {
      return res.status(400).send({ message: 'Missing email/username' });
    }

    try {
      await UserController.updateUser(user);
      res.status(200).json({ message: 'User updated' });
    } catch (err) {
      res.status(400).json({ message: (err as Error).message });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' }); 
  }
}
