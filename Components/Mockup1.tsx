import { toPng, toJpeg } from 'html-to-image';
import * as React from 'react';
import { useCallback, useEffect, useState } from 'react';

export interface IAppProps {}

export const Mockup1: React.FC<any> = ({ url }) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const [currentImage, setCurrentImage] = useState('');

  useEffect(() => {
    url && onButtonClick();
  }, [url]);

  const onButtonClick = () => {
    if (ref.current === null) {
      return;
    }

    toJpeg(ref.current, { cacheBust: true })
      .then((dataUrl) => {
        const link = document.createElement('a');
        link.download = 'my-image-name.jpg';
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div style={{ display: 'flex', flex: '3' }}>
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
      <button onClick={() => onButtonClick()}>hovmo</button>
    </div>
  );
};

export const sendImg = async (img: string) => {
  try {
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
    return data;
  } catch (error) {
    console.log(error);
  }
};
