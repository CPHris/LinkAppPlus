import type { NextApiRequest, NextApiResponse } from 'next';
import { LinkPageController } from './LinkPageController';

type Data = {
  message: string;
};

export default async function handler (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'POST') {
    const { username, linkpage } = req.body;

    if (!username || !linkpage || !linkpage.pageid || !linkpage.name) {
      return res.status(400).send({ message: "Missing fields" });
    }
    try {
      await LinkPageController.addLinkPage(username, linkpage);
      return res.status(201).send({ message: "Page added successfully" });
    } catch (err) {
      console.error(err);
      return res.status(500).send({ message: "Something went wrong" });
    }
  }
}