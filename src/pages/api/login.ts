import type { NextApiRequest, NextApiResponse } from 'next';
import { UserController } from './server/controllers/UserController';
import { User } from '@/types/User';

type Data = {
  message: string;
  user?: User;
};

export default async function handler (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'POST') {
    const { username } = req.body;
    const user = await UserController.getUser(username);
    if (user) {
      // TODO Auth
      return res.status(200).send({ message: "Logged in", user });
    }
    return res.status(404).send({ message: "Wrong credentials" });
  }
}