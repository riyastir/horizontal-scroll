import React, { useState } from "react";
import ScrollMenu from "react-horizontal-scrolling-menu";
import "./App.css";

let list = [
  { name: "item1" },
  { name: "item2" },
  { name: "item3" },
  { name: "item4" },
  { name: "item5" },
  { name: "item6" },
  { name: "item7" },
  { name: "item8" },
  { name: "item9" },
  { name: "item10" },
  { name: "item11" },
  { name: "item12" },
  { name: "item13" },
  { name: "item14" },
  { name: "item15" },
  { name: "item16" },
  { name: "item17" },
  { name: "item18" },
  { name: "item19" },
  { name: "item20" },
  { name: "item21" },
  { name: "item22" },
  { name: "item23" },
  { name: "item24" },
  { name: "item25" },
];

const MenuItem = ({ text, selected }) => {
  return <div className={`menu-item ${selected ? "active" : ""}`}>{text}</div>;
};

const Menu = (list, selected) => {
  list.map((el) => {
    const { name } = el;

    return <MenuItem text={name} key={name} selected={selected} />;
  });
};

const Arrow = ({ text, className }) => {
  return <div className={className}>{text}</div>;
};

const ArrowLeft = () => {
  return <Arrow text="<" className="arrow-prev" />;
};

const ArrowRight = () => {
  return <Arrow text=">" className="arrow-next" />;
};
const onFirstItemVisible = () => {
  console.log("first item is visible");
};

const onLastItemVisible = () => {
  console.log("last item is visible");
};

const App = () => {
  const [selected, setSelected] = useState("item1");
  const [translate, setTranslate] = useState(0);
  let menuItems = Menu(list.slice(0, list.length), selected);

  const onUpdate = ({ translate }) => {
    setTranslate(translate);
  };

  const onSelect = (key) => {
    setSelected(key);
  };
  return (
    <div className="App">
      <ScrollMenu
        alignCenter={true}
        arrowLeft={ArrowLeft}
        arrowRight={ArrowRight}
        clickWhenDrag={false}
        data={menuItems}
        dragging={true}
        hideArrows={true}
        hideSingleArrow={true}
        onFirstItemVisible={onFirstItemVisible}
        onLastItemVisible={onLastItemVisible}
        onSelect={onSelect}
        onUpdate={onUpdate}
        scrollToSelected={false}
        selected={selected}
        translate={translate}
        wheel={true}
      ></ScrollMenu>
    </div>
  );
};

export default App;
