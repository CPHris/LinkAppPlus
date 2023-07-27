import type { NextApiRequest, NextApiResponse } from 'next';
import { UserController } from './UserController';

type Data = {
  message: string;
};

export default async function handler (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'POST') {
    const user = req.body;
    if (!user.email || !user.username) {
      return res.status(400).send({ message: "Missing email/username" });
    }
    try {
      await UserController.addUser(user);
      res.status(201).json({ message: 'User created' });
    } catch (err) {
      res.status(400).json({ message: (err as Error).message });
    }
  }
}