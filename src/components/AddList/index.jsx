import React, { useState } from 'react';
import List from '../List';
import addSvg from '../../assets/img/add.svg';
import Badge from '../Badge';

import closeSvg from '../../assets/img/close.svg';

import './AddListButton.scss';

const AddList = ({ colors }) => {
  const [visiblePopup, setVisiblePopup] = useState(false);
  const [seletedColor, selectColor] = useState(colors[0].id);

  console.log(seletedColor);

  return (
    <div className="add-list">
      <List
        onClick={() => setVisiblePopup(true)}
        items={[
          {
            className: 'list__add-button',
            icon: <img src={addSvg} alt="add icon" />,
            name: 'Добавить список',
          },
        ]}
      />
      {visiblePopup && (
        <div className="add-list__popup">
          <img
            onClick={() => setVisiblePopup(false)}
            src={closeSvg}
            alt="close btn"
            className="add-list__popup-close-btn"
          />
          <input className="field" type="text" placeholder="Название списка" />
          <div className="add-list__popup-colors">
            {colors.map((color) => (
              <Badge
                onClick={() => selectColor(color.id)}
                key={color.id}
                color={color.name}
                className={seletedColor === color.id && 'active'}
              />
            ))}
          </div>
          <button className="button">Добавить </button>
        </div>
      )}
    </div>
  );
};

export default AddList;
