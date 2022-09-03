import nextBase64 from 'next-base64';

const handler = async (req: any, res: any) => {
  const result = await fetch(
    `https://api.cloudinary.com/v1_1/${process.env.NAME_URL}/resources/image`,
    {
      method: 'get',
      headers: {
        Authorization:
          'Basic ' +
          nextBase64.encode(process.env.API_KEY + ':' + process.env.SECRET_KEY),
      },
    }
  ).then((res) => res.json());

  const filteredData = await result.resources.map((img) => {
    return { url: img.url, title: '', category: '' };
  });

  await res.status(200).json(filteredData);
};
export default handler;
