import React from 'react';
import data from './data';

function Item({ item }) {
  const renderChildren = (children) => {
    if (children && children.length > 0) {
      return (
        <ul>
          {children.map((child) => (
            <Item key={child.id} item={child} />
          ))}
        </ul>
      );
    }
    return null;
  };

  return (
    <li>
      {item.title}
      {renderChildren(item.children)}
    </li>
  );
}

function Nested() {
  return (
    <div>
      <ul>
        {data.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
}

export default Nested;