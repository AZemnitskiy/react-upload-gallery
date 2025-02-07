import React from "react";

import List from "./List";
import Card from "./Card";

const Item = (type, image) => {
  switch (type) {
    case "card":
      return <Card image={image} />;

    case "list":
      return <List image={image} />;

    default:
  }
};

export default ({ type, sorting }, images) => {
  const className = `rug-items __${type} ${sorting ? "__sorting" : ""}`;

  const options = typeof sorting === "object" ? sorting : {};

  return sorting ? (
    <div {...options} className={className}>
      {image => <div className="rug-item">{Item(type, image)}</div>}
    </div>
  ) : (
    <div className={className}>
      {images.map((image, key) => (
        <div className="rug-item" key={key}>
          {Item(type, image)}
        </div>
      ))}
    </div>
  );
};

export { List, Card };
