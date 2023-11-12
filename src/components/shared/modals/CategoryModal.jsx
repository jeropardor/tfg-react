import { useState } from "react";
import classNames from "classnames";
import { useIntl } from "react-intl";
import { FiX } from "react-icons/fi";

import { useCategoriesDispatch } from "../../../context/CategoryContext";
import IconClickWrapper from "../icons/IconClickWrapper";

import "./modals.scss";

const CategoryModal = ({ isVisible, setIsVisible }) => {
  const intl = useIntl();
  const categoryDispatch = useCategoriesDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    categoryDispatch({
      type: "added",
      name: e.target.name.value,
      color: e.target.color.value,
    });
    e.target.reset();
    setIsVisible(false);
  };

  return (
    <div
      id="category-modal"
      className={classNames({
        "dis-hidden": !isVisible,
      })}
    >
      <div className="close">
        <IconClickWrapper icon={<FiX />} onClick={() => setIsVisible(false)} />
      </div>
      <form method="post" onSubmit={handleSubmit}>
        <div className="title">
          {intl.formatMessage({ id: "category.create.title" })}
        </div>
        <label htmlFor="name">
          {intl.formatMessage({ id: "category.create.name" })}
          <input type="text" name="name" required />
        </label>
        <label htmlFor="">
          {intl.formatMessage({ id: "category.create.color" })}
          <input type="color" name="color" />
        </label>
        <div className="buttons">
          <button type="reset">
            {intl.formatMessage({ id: "common.reset" })}
          </button>
          <button type="submit">
            {intl.formatMessage({ id: "common.create" })}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CategoryModal;
