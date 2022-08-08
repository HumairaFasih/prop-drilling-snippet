import React, { useState } from "react";

export default function App() {
  const [buttonColor, setColor] = useState("#67AB9F");

  const changeColor = () => {
    setColor("grey");
  };
  // ProductCard component needs to accept extra props
  // to send it further down to the Button component
  return (
    <div>
      <ProductCard color={buttonColor} changeColor={changeColor} />
    </div>
  );
}

function ProductCard(props) {
  return (
    <div className="product-card">
      <Details item="Hanging Mirror" price="$50" />

      {/* // The props are passed further down 
      // to the Button component that needs it. */}
      <Button color={props.color} changeColor={props.changeColor} />
    </div>
  );
}

function Button(props) {
  return (
    <button
      className="button"
      onClick={props.changeColor}
      style={{ backgroundColor: props.color }}
    >
      Add to Cart
    </button>
  );
}

function Details(props) {
  return (
    <div className="details">
      <div className="product-title">
        <h2>{props.item}</h2>
        <span>{props.price}</span>
      </div>
      <p className="product-description">Lorem ipsum dolor sit amet. Ut natus mollitia qui odio dolorem a neque quos rem corrupti nisi. Aut neque iusto id dolore architecto et deleniti perferendis non unde!!</p>
    </div>
  );
}



