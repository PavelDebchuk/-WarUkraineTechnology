import React from "react";
import "./MainStyled.css";
import data from "../Data/Data.ts";
import Filter from "components/Filter";

const Main = () => {
  const addImg = React.createRef();
  const addType = React.createRef();
  const addModel = React.createRef();
  const addYears = React.createRef();
  const addCountry = React.createRef();
  const addCrev = React.createRef();
  const addWiki = React.createRef();

  const eVe = () => {
    data.push({
      images: addImg.current.value,
      type: addType.current.value,
      model: addModel.current.value,
      yearOfIssue: addYears.current.value,
      country: addCountry.current.value,
      crev: addCrev.current.value,
      wiki: addWiki.current.value,
    });
    del();
  };

  const del = () => {
    addImg.current.value = "";
    addType.current.value = "";
    addModel.current.value = "";
    addYears.current.value = "";
    addCountry.current.value = "";
    addCrev.current.value = "";
    addWiki.current.value = "";
  };

  return (
    <>
      <div className="Main_wraper">
        <div className="Filter_block">
          <Filter/>
        </div>
        <div>
          {data.map((dat) => (
          <ul>
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
