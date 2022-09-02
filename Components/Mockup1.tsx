import { toPng, toJpeg } from 'html-to-image';
import * as React from 'react';
import { useEffect, useState } from 'react';

export interface IAppProps {}

export const Mockup1: React.FC<any> = ({ url }) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const [currentImage, setCurrentImage] = useState('');

  useEffect(() => {
   url && onButtonClick();
  }, [url]);

  const onButtonClick = React.useCallback(async () => {
    if (ref.current === null) {
      return;
    }
    const data = await toJpeg(ref.current, { cacheBust: true });
    const img = await sendImg(data)
  }, [ref]);

  return (
    <div style={{display: "flex", flex: "3"}}>
      <div ref={ref} style={{ height: '600px', width: '532px' }}>
        <img
          src="/img/mockups/mockup1black.png"
          style={{
            width: 'auto',
            height: '600px',
            position: 'absolute',
            zIndex: '1',
          }}
        ></img>
        <img
          style={{
            position: 'relative',
            width: '350px',
            top: '50px',
            left: '90px',
            zIndex: '-1',
          }}
          src={url}
        ></img>
      </div>
    </div>
  );
};

export const sendImg = async (img: string) => {
  const formData = new FormData();
  formData.append('file', img);
  formData.append('upload_preset', 'mockups');

  const data = await fetch(
    'https://api.cloudinary.com/v1_1/dbzyb6wog/image/upload',
    {
      method: 'POST',
      body: formData,
    }
  ).then((r) => r.json());
  return data.secure_url;
};
