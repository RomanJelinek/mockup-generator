const handler = async (req: any, res: any) => {
  const result = await fetch(
    `https://${process.env.API_KEY}:${process.env.SECRET_KEY}@api.cloudinary.com/v1_1/${process.env.NAME_URL}/resources/image?&max_results=500`
  ).then((r) => r.json());

  const filteredData = await result.resources.map((img) => {
    return { url: img.url, title: '', category: '' };
  });

  await res.status(200).json(filteredData);
};
export default handler;
