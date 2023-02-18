import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

export default function list({ items }) {
  return (
    <div className="grocery-list">
      {items.map((item) => {
        const { id, title } = item;
        return (
          <article key={id} className="grocery-item">
            <p className="title">{title}</p>
            <div className="btn-container">
              <button tpye="button" className="edit-btn">
                <FaEdit />
              </button>
              <button tpye="button" className="delete-btn">
                <FaTrash />
              </button>
            </div>
          </article>
        );
      })}
    </div>
  );
}
