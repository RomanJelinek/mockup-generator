import { toPng, toJpeg } from 'html-to-image';
import * as React from 'react';
import { useCallback, useEffect, useState } from 'react';
import { ImgData, Mockup } from '../pages';

export interface Design1Props {
  image: ImgData;
  handleImagesListChange: Function;
  folderName: string;
}

export const MockupDesign1: React.FC<Design1Props> = ({
  image,
  handleImagesListChange,
  folderName,
}) => {
  const ref = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    image && setTimeout(() => onButtonClick(), 300);
  }, [image]);

  const onButtonClick = () => {
    if (ref.current === null) {
      return;
    }
    toJpeg(ref.current, { quality: 0.1 })
      .then((dataUrl) => {
        sendImg(dataUrl);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const sendImg = async (img: string) => {
    try {
      const formData = new FormData();
      formData.append('file', img);
      formData.append('upload_preset', 'mockups');
      formData.append('tags', `${Mockup.DESIGN1}---${image.url}`);
      formData.append('folder', folderName);

      const data = await fetch(
        'https://api.cloudinary.com/v1_1/dlwz2y4wk/image/upload',
        {
          method: 'POST',
          body: formData,
        }
      ).then((r) => r.json());
      const identifier = data.tags[0];
      const imgType = identifier.substr(0, identifier.indexOf('-'));
      const urlAdressOfOrigin = identifier.split('---').pop();
      const objToPush = { imgType: imgType, url: data.url };
      let copyObj = { ...image };
      copyObj.images.push(objToPush);
      handleImagesListChange(copyObj, 'images');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ display: 'flex', flex: '3' }}>
      <div ref={ref} style={{ height: '600px', width: '532px' }}>
        <img
          src="/img/mockups/Design1.png"
          style={{
            width: 'auto',
            height: '420px',
            position: 'absolute',
            zIndex: '1',
          }}
        ></img>
        <img
          style={{
            position: 'relative',
            width: '205px',
            height: '274px',
            top: '30px',
            left: '235px',
            zIndex: '-1',
          }}
          src={image?.url}
        ></img>
      </div>
    </div>
  );
};
