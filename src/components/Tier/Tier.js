import React from "react";

import { TierStyle } from "./style";

export const Tier = props => {
  const tiersList = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"];
  return <TierStyle>{tiersList[props.tier - 1]}</TierStyle>;
};
