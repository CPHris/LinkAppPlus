import type { NextApiRequest, NextApiResponse } from 'next';
import { LinkPageController } from './server/controllers/LinkPageController';
import { LinkPage } from '@/types/User';

type Data = {
  payload: string | LinkPage[] | LinkPage;
};

export default async function handler (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "GET") {
    const { username } = req.query;
    if (!username) {
      return res.status(400).send({ payload: "Missing username" });
    }
    try {
      const linkPages = await LinkPageController.getAllLinkPages(username as string);
      return res.status(200).send({ payload: linkPages });
    } catch (err) {
      console.error(err);
      return res.status(400).send({ payload: (err as Error).message });
    }
  }
  if (req.method === 'POST') {
    const { username, linkpage } = req.body;

    if (!username || !linkpage || !linkpage.pageid || !linkpage.name) {
      return res.status(400).send({ payload: "Missing fields" });
    }
    try {
      await LinkPageController.addLinkPage(username, linkpage);
      return res.status(201).send({ payload: "Page added successfully" });
    } catch (err) {
      console.error(err);
      return res.status(400).send({ payload: (err as Error).message });
    }
  }

  if (req.method === 'PUT') {
    const { username, linkpage, linkpageid } = req.body;

    if (!username || !linkpage || !linkpageid || !linkpage.pageid || !linkpage.name) {
      return res.status(400).send({ payload: "Missing fields" });
    }
    try {
      await LinkPageController.replaceLinkPage(username, linkpage, linkpageid);
      return res.status(201).send({ payload: "Page edited successfully" });
    } catch (err) {
      console.error(err);
      return res.status(400).send({ payload: (err as Error).message });
    }
  }

  if (req.method === 'DELETE') {
    const { username, pageid } = req.body;
    if (!username || !pageid) {
      return res.status(400).send({ payload: "Missing fields" });
    }
    try {
      await LinkPageController.deleteLinkPage(username, pageid);
      return res.status(201).send({ payload: "Page removed successfully" });
    } catch (err) {
      console.error(err);
      return res.status(400).send({ payload: (err as Error).message });
    }
  }
}