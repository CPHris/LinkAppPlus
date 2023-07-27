import type { NextApiRequest, NextApiResponse } from 'next';
import { UserController } from './UserController';
import { User } from '@/types/User';

type Data = {
  message: string;
  user?: User;
};

export default async function handler (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "GET") {
    const { username } = req.query;
    try {
      const user = await UserController.getUser(username as string);
      if (!user) return res.status(400).send({ message: "User doesn't exist" });
      return res.status(200).send({ message: "User Found", user });
    } catch (err) {
      console.error(err);
      return res.status(400).send({ message: "Something went wrong" });
    }
  }

  if (req.method === 'DELETE') {
    const { username } = req.body;
    try {
      const deletedCount = await UserController.deleteUser(username);
      if (deletedCount > 0) {
        return res.status(201).send({ message: "User deleted succesfully" });
      }
      return res.status(500).send({ message: "User doesn't exist" });
    } catch (err) {
      console.error(err);
      return res.status(500).send({ message: "Something went wrong" });
    }
  }
}