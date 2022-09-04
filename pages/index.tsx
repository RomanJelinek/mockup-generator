import axios from 'axios';
import type { NextPage } from 'next';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { MockupDesign1 } from '../Components/MockupDesign1';
import { MockupDesign2 } from '../Components/MockupDesign2';
import { MockupPlaBlack } from '../Components/MockupPlaBlack';
import { MockupPlaWhite } from '../Components/MockupPlaWhite';
import Settings from '../Components/Settings';
import Xml from '../Components/Xml';

export interface ImgData {
  url: string;
  title: string;
  category: string;
  images: ImagesUrls[];
  description: string;
}

interface ImagesUrls {
  imgType: string;
  url: string;
}

interface ImgDataProps {
  data: ImgData[];
}

export enum Mockup {
  PLA_BLACK = 'plaBlack',
  PLA_WHITE = 'plaWhite',
  DESIGN1 = 'design1',
  DESIGN2 = 'design2',
}

const Home: NextPage<ImgDataProps> = () => {
  const [imagesList, setImagesList] = useState<ImgData[]>([]);
  const [currentImg, setCurrentImg] = useState(null);
  const [currentNumber, setCurrentNumber] = useState(0);
  const [currentMockup, setCurrentMockup] = useState(Mockup.PLA_BLACK);
  const [folderName, setFolderName] = useState(null);
  const [finishedMockups, setFinishedMockups] = useState<{
    [Mockup.PLA_BLACK]: boolean;
    [Mockup.PLA_WHITE]: boolean;
    [Mockup.DESIGN1]: boolean;
    [Mockup.DESIGN2]: boolean;
  }>({
    [Mockup.PLA_BLACK]: false,
    [Mockup.PLA_WHITE]: false,
    [Mockup.DESIGN1]: false,
    [Mockup.DESIGN2]: false,
  });

  useEffect(() => {
    const date = new Date();
    const id = `${date.getFullYear()}/${
      date.getMonth() + 1
    }/${date.getDate()}/${date.getHours()}:${date.getMinutes()}`;
    setFolderName(id);
    const getProducts = async () => {
      const products = await axios.get('/api/get-images');
      setImagesList(products.data);
    };
    getProducts();
  }, []);

  const delay = 3000;
  const upload = async (mockup) => {
    setCurrentMockup(mockup);
    for (let i = 0; i < imagesList.length; i++) {
      setTimeout(function () {
        setCurrentImg(imagesList[i]);
        setCurrentNumber(i);
      }, delay * i);
    }
    setCurrentImg('');
    setFinishedMockups({ ...finishedMockups, [mockup]: true });
  };
  console.log(finishedMockups);

  const handleImagesListChange = (
    newImage: ImgData,
    changeType: string,
    value: string
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
    if (changeType === 'images') {
      imagesListCopy[Number(index)] = newImage;
    }
    setImagesList(imagesListCopy);
  };

  const handleBulkChanges = (value: string, changeType: string) => {
    let imagesListCopy: ImgData[] = imagesList.map((img) => {
      if (changeType === 'title') {
        return { ...img, title: value };
      }
      if (changeType === 'category') {
        return { ...img, category: value };
      }
      if (changeType === 'description') {
        return { ...img, description: value };
      }
    });
    setImagesList(imagesListCopy);
  };

  const getMockup = () => {
    switch (currentMockup) {
      case Mockup.PLA_BLACK:
        return (
          <MockupPlaBlack
            image={currentImg}
            handleImagesListChange={handleImagesListChange}
            folderName={folderName}
          />
        );
      case Mockup.PLA_WHITE:
        return (
          <MockupPlaWhite
            image={currentImg}
            handleImagesListChange={handleImagesListChange}
            folderName={folderName}
          />
        );
      case Mockup.DESIGN1:
        return (
          <MockupDesign1
            image={currentImg}
            handleImagesListChange={handleImagesListChange}
            folderName={folderName}
          />
        );
      case Mockup.DESIGN2:
        return (
          <MockupDesign2
            image={currentImg}
            handleImagesListChange={handleImagesListChange}
            folderName={folderName}
          />
        );
    }
  };

  return (
    <>
      <div style={{ display: 'flex' }}>
        {getMockup()}
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
        <>
          <p>Aktuálně v cloudu: {imagesList?.length}</p>
          <p>
            Nejdříve u všech položek vyplň vše potřebné. Poté začni generovat
            mockupy kliknutím na tlačítka níže.
          </p>
          <button
            disabled={finishedMockups.plaBlack}
            onClick={() => upload(Mockup.PLA_BLACK)}
          >
            PLA černý rám
          </button>
          {finishedMockups.plaBlack && <>✅</>}
          <button
            disabled={finishedMockups.plaWhite}
            onClick={() => upload(Mockup.PLA_WHITE)}
          >
            PLA bílý rám
          </button>
          {finishedMockups.plaWhite && <>✅</>}
          <br />
          {/* <button
            disabled={finishedMockups.design1}
            onClick={() => upload(Mockup.DESIGN1)}
          >
            Design 1
          </button>
          {finishedMockups.design1 && <>✅</>} */}
          <br />
          <button
            disabled={finishedMockups.design2}
            onClick={() => upload(Mockup.DESIGN2)}
          >
            Design 2
          </button>
          {finishedMockups.design2 && <>✅</>}
        </>

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
