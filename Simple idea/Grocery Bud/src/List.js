import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

export default function list({ items , removeItem , editingItem}) {
  return (
    <div className="grocery-list">
      {items.map((item) => {
        const { id, title } = item;
        return (
          <article key={id} className="grocery-item">
            <p className="title">{title}</p>
            <div className="btn-container">
              <button tpye="button" className="edit-btn" onClick={()=> editingItem(id)}>
                <FaEdit />
              </button>
              <button tpye="button" className="delete-btn" onClick={()=> removeItem(id)}>
                <FaTrash />
              </button>
            </div>
          </article>
        );
      })}
    </div>
  );
}
