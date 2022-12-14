import nextBase64 from 'next-base64';
import NextCors from 'nextjs-cors';

const handler = async (req: any, res: any) => {
  const result = await fetch(
    `https://api.cloudinary.com/v1_1/${process.env.NAME_URL}/resources/image?&max_results=500`,
    {
      method: 'get',
      headers: {
        Authorization:
          'Basic ' +
          nextBase64.encode(process.env.API_KEY + ':' + process.env.SECRET_KEY),
        maxResults: '500',
      },
    }
  ).then((res) => res.json());

  const filteredData = await result.resources.map((img) => {
    return { url: img.url, title: '', category: '', images: [], description: "" };
  });

  await NextCors(req, res, {
    // Options
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: '*',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  });

  res.status(200).json(filteredData);
};

export default handler;
