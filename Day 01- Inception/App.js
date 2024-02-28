//Hello World Using React
//Create Root
const root = ReactDOM.createRoot(document.getElementById("root"));
//Create Heading
const heading = React.createElement(
  "h1",
  { id: "heading", xyz: "abc" },
  "Hello World from React"
);
//Putting Heading inside Root
root.render(heading);

const nestedElements = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "children" }, [
    React.createElement("h1", {}, "H1 Tag"),
    React.createElement("h2", {}, "H2 Tag"),
  ]),
  React.createElement("div", { id: "children" }, [
    React.createElement("h1", {}, "H1 Tag"),
    React.createElement("h2", {}, "H2 Tag"),
  ]),
]);
root.render(nestedElements);
