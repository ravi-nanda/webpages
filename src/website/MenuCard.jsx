import React from "react";

const MenuCard = ({ ApiData }) => {
  return (
    <div>
      {ApiData.map((elem) => {
        return (
          <>
            <div> {elem.id} </div>
            <div> {elem.firstName}</div>
            <div> {elem.lastName}</div>
            <div> {elem.maidenName}</div>
            <div> {elem.age}</div>
            <div> {elem.gender}</div>
            <div> {elem.email}</div>
            <div> {elem.phone}</div>
            <div> {elem.username}</div>
            <div> {elem.password}</div>
          </>
        );
      })}
    </div>
  );
};

export default MenuCard;
