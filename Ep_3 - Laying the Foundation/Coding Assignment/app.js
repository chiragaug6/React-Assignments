import React from "react";
import ReactDOM from "react-dom/client";

//TASK_1 :: Create a Nested header Element using React.createElement(h1,h2,h3 inside a div with class “title”)

const MyHeader = React.createElement("div", { id: "title" }, [
  React.createElement("h1", {}, "this is a h1 tag"),
  React.createElement("h2", {}, "this is h2 tag"),
  React.createElement("h3", {}, "this is a h3 tag"),
]);

//TASK_2 :: Create the same element using JSX

const MyheaderJSX = (
  <div className="title">
    <h1>This is a h1 tag</h1>
    <h2>This is a h2 tag</h2>
    <h3>This is a h3 tag</h3>
  </div>
);

// TASK_3 :: Create a functional component of the same with JSX
// TASK_4 :: Pass attributes into the tag in JSX

const FontStyling = {
  fontFamily: "monospace",
  fontSize: "2rem",
  textAlign: "center",
};

const HeaderComponent1 = () => {
  return (
    <div className="title" style={FontStyling}>
      <h1 style={{ color: "yellow" }}>this is a h1 tag</h1>
      <h2 style={{ color: "red" }}>this is a h2 tag</h2>
      <h3 style={{ color: "blue" }}>this is a h3 tag</h3>
    </div>
  );
};

// TASK_5 :: Composition of Component(Add a component inside another)
// TASK_6 :: {TitleComponent} vs {<TitleComponent/>} vs {<TitleComponent></TitleComponent>} in JSX

const BrandLogo = () => {
  return (
    <img
      className="logo"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTue4wTkmCgZWOrocQX1YaEd952Pak3ymgNUg&usqp=CAU"
      alt=""
    />
  );
};

// Create a Header Component from scratch using Functional Components with JSX
// Add a Logo on left
// Add a search bar in middle
// Add User icon on right
// Add CSS to make it look nice

const HeaderComponent = () => {
  return (
    <div className="header">
      <BrandLogo />
      {/* {BrandLogo} */}
      {/* <BrandLogo></BrandLogo> */}
      <input className="search-bar" type="search" placeholder="search here" />
      <i class="fa-solid fa-user"></i>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeaderComponent />);
