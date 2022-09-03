export const fetchImages = async () => {
  const data = await fetch(
    'https://api.cloudinary.com/v1_1/dlwz2y4wk/resources/image/',
    {
      headers: {
        Authorization: 'Basic 461761331428572:8WOEb1mN7yaeQXgW0ydW8Jpw5kU',
      },
    }
  ).then((r) => r.json());
  return data.secure_url;
};
