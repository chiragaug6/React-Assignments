import React from "react";

const List = ({ items }) => {
  return (
    <div>
      <ul>
        {items.map((item) => {
          return <li>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default List;
