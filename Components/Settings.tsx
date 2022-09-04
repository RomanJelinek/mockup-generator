import React, { ReactElement } from 'react';
import { ImgData } from '../pages';

interface SettingsProps {
  imagesList: ImgData[];
  handleImagesListChange: Function;
  handleBulkChanges: Function;
  finishedMockups
}

const Settings: React.FC<SettingsProps> = ({
  imagesList,
  handleImagesListChange,
  handleBulkChanges,
  finishedMockups,
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
        onChange={(e) => {
          e.preventDefault();
          handleBulkChanges(e.target.value, 'title');
        }}
        type="text"
        style={{
          height: '25px',
          width: '300px',
        }}
      ></input>
      <br />
      Hromadné vložení kategorií <br />
      <i style={{ fontSize: '12px', margin: '4px 0' }}>
        (formát: Plakáty {'>'} Motivační obrazy a plakáty ){' '}
      </i>
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
      <br />
      Krátký popisek
      <br />
      <i style={{ fontSize: '12px', margin: '4px 0' }}>
        Vždy je nadpis produktu a následuje text níže:
      </i>
      <textarea
        rows={4}
        cols={50}
        onChange={(e) => {
          e.preventDefault();
          handleBulkChanges(e.target.value, 'description');
        }}
        style={{
          width: '300px',
          marginBottom: '40px',
        }}
      ></textarea>
      {imagesList?.map((img) => {
        return (
          <div
            key={img?.url}
            style={{
              display: 'flex',
              margin: '10px',
            }}
          >
            <div style={{ marginTop: '20px', marginRight: '10px' }}>
              Titulek:
              <br />
              <input
                onChange={(e) => {
                  e.preventDefault();
                  handleImagesListChange(img, 'title', e.target.value);
                }}
                value={img?.title}
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
                  handleImagesListChange(img, 'category', e.target.value)
                }
                value={img?.category}
                type="text"
                style={{
                  height: '25px',
                  width: '300px',
                }}
              ></input>
            </div>
            <img
              src={img?.url}
              style={{ width: '100px', height: 'auto', marginTop: '10px' }}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Settings;
