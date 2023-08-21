import { getStorageItemById } from '../../../../lib/prisma/storageItems';

const handler = async (req, res) => {
  if (req.method === 'GET') {
    try {
      const { id } = req.query;
      const { item, error } = await getStorageItemById(id);
      if (error) throw new Error(error);
      return res.status(200).json({ item });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  res.setHeader('Allow', ['GET']);
  res.status(425).end(`Method ${req.method} is not allowed.`);
};

export default handler;
