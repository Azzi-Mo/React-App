import React from "react";

const Categories = ({ allCategories, filterItems }) => {
  return (
    <>
      <div className="btn-container">
        {allCategories.map((categorie, indx) => {
          return (
            <button
              key={indx}
              className="filter-btn"
              type="button"
              onClick={() => filterItems(categorie)}
            >
             
              {categorie}
           
            </button>
          );
        })}
      </div>
    </>
  );
};
export default Categories;
