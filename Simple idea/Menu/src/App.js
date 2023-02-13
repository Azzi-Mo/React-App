import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

function App() {
  const [menuItem , setMenuItems] = useState(items);
  const [categories , setCategories] = useState([]);

  const filterItems = (categorie) =>{
    const newItems = items.filter((item) => item.category === categorie)
    setCategories(newItems)
  }
  
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories filterItems={filterItems}/>
        <Menu items={menuItem} />
      </section>
    </main>
  );
}

export default App;
