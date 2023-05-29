import React from 'react';
import './Filter.styled.css';

const Filter = () => {
  const typeTech = [
    'Танк',
    'РСЗО',
    'Бронеавто',
    'САУ',
    'Ракетні установки',
    'Зенітні самохідні установки',
    'МТМБ',
    'БМП',
    'Автомобілі',
    'Інженерна техніка',
    'РЛС',
    'Літак',
    'Дрон',
  ];

  const Chek = id => {
    const idData = id.target.name;
    console.log(idData);
  };

  return (
    <div>
      <ul className="Filter_list">
        {typeTech.map(typ => (
          <li className="Filter_item">
            <input type="checkbox" onClick={Chek} id={typ} name={typ} />
            {typ}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Filter;
