import React from "react";

export const Image = props => {
  let name, source;

  if (props.name && props.country) {
    name = props.name
      .split(" ")
      .join("_")
      .replace("/", "");

    source = require(`../../assets/images/tanks/${props.country}-${name}.png`);
  }

  return <img alt="logo" src={source} loading="lazy" />;
};
