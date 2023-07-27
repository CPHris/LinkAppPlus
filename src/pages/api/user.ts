import type { NextApiRequest, NextApiResponse } from 'next';
import { UserController } from './UserController';

type Data = {
  message: string;
};

export default async function handler (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'DELETE') {
    const { username } = req.body;
    try {
      const deletedCount = await UserController.deleteUser(username);
      if (deletedCount > 0) {
        return res.status(201).send({ message: "User deleted succesfully" });
      }
      return res.status(500).send({ message: "User doesn't exist" });
    } catch (err) {
      return res.status(500).send({ message: "Something went wrong" });
    }
  }
}