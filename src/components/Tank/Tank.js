import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import * as actions from "../../store/actions/index";

import { Tier } from "../Tier/Tier";
import { Image } from "../Image/Image";

import { TankStyle } from "./style";

export const Tank = React.memo(props => {
  const country = require(`../../assets/images/nations/${props.country}.png`);
  const dispatch = useDispatch();
  const setTank = useCallback(
    selectedTank => dispatch(actions.setTank(selectedTank)),
    [dispatch]
  );
  return (
    <TankStyle country={country} onClick={() => setTank(props)}>
      <Tier tier={props.tier} />
      <Image country={props.country} name={props.name} />
      <p>{props.name}</p>
    </TankStyle>
  );
});
