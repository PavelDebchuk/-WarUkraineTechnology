import React from 'react';
import './MachineryStyled.css';
import data from '../../Data/Data.ts';
import Filter from 'components/Filter';

const Machinery = () => {
  // data.map(g => {
  //   if (g.type === 'літак') {
  //     console.log(g.model);
  //   }
  // });

  return (
    <>
      <div className="Main_wraper">
        <div className="Filter_block">
          <Filter />
        </div>
        <div className="Block_list">
          {data.map(dat => (
            <ul className="Filter_list">
              <li className="list_img">
                <img
                  src={dat.images}
                  alt={dat.model}
                  width="300"
                  height="200"
                />
              </li>
              <li className="list_item">
                тип: <span className="data_item">{dat.type}</span>
              </li>
              <li className="list_item">
                модель:
                <span className="data_item">{dat.model}</span>
              </li>
              <li className="list_item">
                рік випуску:
                <span className="data_item">{dat.yearOfIssue}</span>
              </li>
              <li className="list_item">
                країна:
                <span className="data_item">{dat.country}</span>
              </li>
              <li className="list_item">
                екіпаж:
                <span className="data_item">{dat.crev}</span>
              </li>
              <li className="list_item">
                <a className="item_link_wili" href={dat.wiki}>
                  почитайте про
                  <span className="data_item">{dat.model}</span> на wiki
                </a>
              </li>
            </ul>
          ))}
        </div>
      </div>
    </>
  );
};

export default Machinery;
