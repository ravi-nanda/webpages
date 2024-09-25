import React, { useEffect, useState } from "react";
import FavoriteTwoToneIcon from "@mui/icons-material/FavoriteTwoTone";
import "./Newtodos.css";
const TodoList = () => {
  let initialValue = JSON.parse(localStorage.getItem("storageText")) || [];
  const [changeValue, setChangeValue] = useState("");
  const [updateValue, setUpdateValue] = useState(initialValue);
  const [newStorageItem, setNewStorageItem] = useState(initialValue);

  const handleChange = (event) => {
    setChangeValue(event.target.value);
  };
  const handleClick = () => {
    const arrValue = [...updateValue, changeValue];
    setUpdateValue(arrValue);

    setChangeValue("");
  };
  const handleEnter = (event) => {
    if (event.key === "Enter") {
      handleClick();
    }
  };

  const handleEdit = (index) => {
    const updateEdit = updateValue[index];
    setChangeValue(updateEdit);
    // Edit or Delete
    const StringDetect = updateValue.indexOf(updateEdit);
    setChangeValue(updateValue.splice(StringDetect, 1));
  };

  const handleDelete = (index) => {
    const updateDelete = [...updateValue];
    updateDelete.splice(index, 1);
    setUpdateValue(updateDelete);
  };

  const handleIconColorChange = (curElem, index) => {
    let storageItem = initialValue;

    if (!storageItem.includes(curElem)) {
      storageItem.push(curElem);
    } else {
      let storageUpdate = storageItem.indexOf(curElem);
      storageItem.splice(storageUpdate, 1);
    }

    localStorage.setItem("storageText", JSON.stringify(storageItem));
    setNewStorageItem(storageItem);
  };

  useEffect(() => {}, [updateValue, changeValue]);

  return (
    <>
      <div className="card">
        <div className="card-body">
          <h1>Todo list</h1>
          <input
            value={changeValue}
            type="text"
            placeholder="Search.."
            name="search"
            onChange={handleChange}
            onKeyPress={handleEnter}
            maxLength="60"
          />

          <button className="btn" onClick={handleClick}>
            +
          </button>

          {updateValue?.map((curElem, index) => {
            return (
              <div className="start" key={index}>
                <div className="detail d-flex justify-content-between">
                  <FavoriteTwoToneIcon
                    onClick={() => handleIconColorChange(curElem, index)}
                    sx={
                      newStorageItem.includes(curElem)
                        ? { color: "red" }
                        : { color: "green " }
                    }
                  />
                  {curElem}
                  <div className="d-flex justify-content-between">
                    <button className="edit-btn">
                      <i
                        className=" fa fa-edit"
                        onClick={() => handleEdit(index)}
                      />
                    </button>
                    <button className="delete-btn">
                      <i
                        className="fa fa-times"
                        aria-hidden="true"
                        onClick={() => handleDelete(index)}
                      ></i>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default TodoList;
