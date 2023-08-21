import { getStorageItems } from '../../../lib/prisma/storageItems';

const handler = async (req, res) => {
  if (req.method === 'GET') {
    try {
      const { data, error } = await getStorageItems();
      if (error) throw new Error(error);
      return res.status(200).json({ data });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
  /*
    if (req.method === 'POST') {
        try {
            const data = req.body
            const { user, error } = await createUser(data)
            if (error) throw new Error(error)
            return res.status(200).json({ user })
        } catch (error) {
            return res.status(500).json({ error: error.message })
        }
    }
*/
  res.setHeader('Allow', ['GET', 'POST']);
  res.status(425).end(`Method ${req.method} is not allowed.`);
};

export default handler;
