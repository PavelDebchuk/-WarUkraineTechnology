import React from 'react';
import './MainStyled.css';
import data from '../Data/Data.ts';
import Filter from 'components/Filter';

const Main = () => {
  return (
    <>
      <div className="Main_wraper">
        <div className="Filter_block">
          <Filter />
        </div>
        <div className="Block_list">
          {data.map(dat => (
            <ul className="Filter_list">
              <li>
                <img src={dat.images} alt={dat.model} width="300" />
              </li>
              <li>тип:{dat.type}</li>
              <li>модель:{dat.model}</li>
              <li>рік випуску:{dat.yearOfIssue}</li>
              <li>країна:{dat.country}</li>
              <li>екіпаж{dat.crev}</li>
              <li>
                <a href={dat.wiki}>почитайте про {dat.model} на wiki</a>
              </li>
            </ul>
          ))}
        </div>
      </div>
    </>
  );
};

export default Main;
