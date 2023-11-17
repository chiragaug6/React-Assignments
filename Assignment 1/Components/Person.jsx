import React from "react";

const Person = ({ name, age }) => {
  return (
    <div>
      <p>
        Hello {name}. Your age is {age}
      </p>
    </div>
  );
};

export default Person;
