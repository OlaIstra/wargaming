import React from "react";
import { useSelector } from "react-redux";
import { InfoBlockStyle } from "./style";

export const InfoBlock = props => {
  const tank = useSelector(state => {
    return state.tanks.selectedTank;
  });

  return tank ? (
    <InfoBlockStyle>
      <p>{tank.name}</p>
      <p>{tank.country}</p>
    </InfoBlockStyle>
  ) : (
    <InfoBlockStyle>
      <p>Please select tank</p>
    </InfoBlockStyle>
  );
};
