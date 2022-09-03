import axios from 'axios';
import type { NextPage } from 'next';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Mockup1 } from '../Components/Mockup1';
import Settings from '../Components/Settings';
import Xml from '../Components/Xml';

export interface ImgData {
  url: string;
  title: string;
  category: string;
}

interface ImgDataProps {
  data: ImgData[];
}

const Home: NextPage<ImgDataProps> = () => {
  const [imagesList, setImagesList] = useState<ImgData[]>([]);
  const [currentImg, setCurrentImg] = useState('');
  const [currentNumber, setCurrentNumber] = useState(0);

  useEffect(() => {
    const getProducts = async () => {
      const products = await axios.get('/api/get-images');
      setImagesList(products.data)
    };
    getProducts()
  }, []);

  const delay = 3000;
  const startUploading = () => {
    for (let i = 0; i < imagesList.length; i++) {
      task(i);
    }
    function task(i: number) {
      setTimeout(function () {
        () => console.log(i);
        setCurrentImg(imagesList[i].url);
        setCurrentNumber(i);
      }, delay * i);
    }
  };

  const handleImagesListChange = (
    newImage: ImgData,
    value: string,
    changeType: string
  ) => {
    let imagesListCopy = [...imagesList];
    const filteredResult = imagesList.find((img) => img.url === newImage.url);
    const index = filteredResult && imagesList.indexOf(filteredResult);
    if (changeType === 'title') {
      imagesListCopy[Number(index)].title = value;
    }
    if (changeType === 'category') {
      imagesListCopy[Number(index)].category = value;
    }
    setImagesList(imagesListCopy);
  };

  const handleBulkChanges = (value: string, changeType: string) => {
    let imagesListCopy: any = imagesList.map((img) => {
      if (changeType === 'title') {
        return { ...img, title: value };
      }
      if (changeType === 'category') {
        return { ...img, category: value };
      }
    });
    setImagesList(imagesListCopy);
  };

  return (
    <>
      <div style={{ display: 'flex' }}>
        {<Mockup1 url={currentImg} />}
        {
          <Settings
            imagesList={imagesList}
            handleImagesListChange={handleImagesListChange}
            handleBulkChanges={handleBulkChanges}
          />
        }
      </div>
      <div
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          background: 'grey',
          padding: '10px',
          maxWidth: '200px',
        }}
      >
        <h4>Průvodce</h4>
        {currentNumber === 0 && (
          <>
            <p>Aktuálně v cloudu: {imagesList?.length}</p>
            <p>Nejdříve u všech položek vyplň vše potřebné</p>
            <button onClick={startUploading}>Začni makat</button>
          </>
        )}
        {currentNumber > 0 && currentNumber + 1 < imagesList?.length && (
          <p>
            Probíhá příprava mockupů...{currentNumber + 1}/{imagesList?.length}
          </p>
        )}

        <Xml imagesList={imagesList} />
      </div>
    </>
  );
};

export default Home;
