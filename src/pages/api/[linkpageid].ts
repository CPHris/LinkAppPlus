import type { NextApiRequest, NextApiResponse } from 'next';
import { LinkPageController } from './server/controllers/LinkPageController';
import { LinkPage } from '@/types/User';

type Data = {
  message: string;
  linkpage?: LinkPage;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  if (req.method === 'GET') {
    const { linkpageid } = req.query;

    if (!linkpageid) {
      return res.status(400).send({ message: 'Missing pageid' });
    }
    try {
      const linkpage = await LinkPageController.getLinkPage(
        linkpageid as string,
      );
      return res.status(200).send({ message: linkpage.name, linkpage });
    } catch (err) {
      console.error(err);
      return res.status(400).send({ message: (err as Error).message });
    }
  }
}
