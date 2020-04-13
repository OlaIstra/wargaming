import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import * as actions from "../../store/actions/index";

import { Tier } from "../Tier/Tier";
import { Image } from "../Image/Image";

import { TankStyle } from "./style";

import china from "../../assets/images/nations/china.png";
import czech from "../../assets/images/nations/czech.png";
import france from "../../assets/images/nations/france.png";
import germany from "../../assets/images/nations/germany.png";
import italy from "../../assets/images/nations/italy.png";
import japan from "../../assets/images/nations/japan.png";
import poland from "../../assets/images/nations/poland.png";
import sweden from "../../assets/images/nations/sweden.png";
import uk from "../../assets/images/nations/uk.png";
import usa from "../../assets/images/nations/usa.png";
import ussr from "../../assets/images/nations/ussr.png";

export const Tank = React.memo(props => {
  let country;

  switch (props.country) {
    case "china":
      country = china;
      break;
    case "czech":
      country = czech;
      break;
    case "france":
      country = france;
      break;
    case "germany":
      country = germany;
      break;
    case "italy":
      country = italy;
      break;
    case "japan":
      country = japan;
      break;
    case "poland":
      country = poland;
      break;
    case "sweden":
      country = sweden;
      break;
    case "uk":
      country = uk;
      break;
    case "usa":
      country = usa;
      break;
    case "ussr":
      country = ussr;
      break;
    default:
      break;
  }

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
