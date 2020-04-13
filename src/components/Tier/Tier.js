import React from "react";

import { TierStyle } from "./style";

export const Tier = props => {
  let number;

  switch (props.tier) {
    case 1:
      number = "I";
      break;
    case 2:
      number = "II";
      break;
    case 3:
      number = "III";
      break;
    case 4:
      number = "IV";
      break;
    case 5:
      number = "V";
      break;
    case 6:
      number = "VI";
      break;
    case 7:
      number = "VII";
      break;
    case 8:
      number = "VII";
      break;
    case 9:
      number = "IX";
      break;
    case 10:
      number = "X";
      break;
    default:
      break;
  }
  return <TierStyle>{number}</TierStyle>;
};
