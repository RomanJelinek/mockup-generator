import React, { ReactElement } from 'react';
import { ImgData } from '../pages';

interface SettingsProps {
  imagesList: ImgData[];
  handleImagesListChange: Function;
  handleBulkChanges: Function;
}

const Settings: React.FC<SettingsProps> = ({
  imagesList,
  handleImagesListChange,
  handleBulkChanges,
}) => {
  return (
    <div
      style={{
        display: 'flex',
        flex: '3',
        flexDirection: 'column',
        marginRight: '30px',
      }}
    >
      <h3>Nastavení exportu</h3>
      Hromadné vložení do nadpisů
      <input
        onChange={(e) => handleBulkChanges(e.target.value, 'title')}
        type="text"
        style={{
          height: '25px',
          width: '300px',
        }}
      ></input>
      <br />
      Hromadné vložení kategorií <br />
      <i style={{fontSize: "12px", margin: "4px 0"}}>(formát: Plakáty {'>'} Motivační obrazy a plakáty ) </i>
      <input
        onChange={(e) => {
          e.preventDefault();
          handleBulkChanges(e.target.value, 'category');
        }}
        type="text"
        style={{
          height: '25px',
          width: '300px',
          marginBottom: '40px',
        }}
      ></input>
      {imagesList?.map((img) => {
        return (
          <div
            key={img.url}
            style={{
              display: 'flex',
              margin: "10px",
          
            }}
          >
            <div style={{ marginTop: '20px', marginRight: '10px' }}>
              Titulek:
              <br />
              <input
                onChange={(e) => {
                  e.preventDefault();
                  handleImagesListChange(img, e.target.value, 'title');
                }}
                value={img.title}
                type="text"
                style={{
                  height: '25px',
                  width: '300px',
                }}
              ></input>
              <br /> <br />
              Kategorie:
              <br />
              <input
                onChange={(e) =>
                  handleImagesListChange(img, e.target.value, 'category')
                }
                value={img.category}
                type="text"
                style={{
                  height: '25px',
                  width: '300px',
                }}
              ></input>
            </div>
            <img
              src={img.url}
              style={{ width: '100px', height: 'auto', marginTop: '10px' }}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Settings;
