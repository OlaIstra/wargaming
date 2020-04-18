import React, { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../store/actions/index";
import { withErrorHandler } from "../../hoc/withErrorHandler";
import axios from "../../shared/axios";
import { updateObject, filterTanks, createSelectors } from "../../shared/utils";

import { Carusel } from "../../components/Carusel/Carusel";
import { Spinner } from "../../components/UI/Spinner/Spinner";
import { InfoBlock } from "../../components/InfoBlock/InfoBlock";
import { Filter } from "../../components/UI/Filter/Filter";

import { MainStyle, FilterWrapperStyle } from "./style";

let filters = {
  nations: [],
  tier: 0,
  premium: false
};

const Main = props => {
  const tanks = useSelector(state => {
    return state.tanks.tanks;
  });

  const loading = useSelector(state => {
    return state.tanks.loading;
  });

  const dispatch = useDispatch();
  const toGetTanks = useCallback(() => dispatch(actions.fetchTanks()), [
    dispatch
  ]);

  useEffect(() => {
    toGetTanks();
  }, [toGetTanks]);

  useEffect(() => {
    setTanksToList(tanks);
  }, [tanks]);

  const [tanksToList, setTanksToList] = useState(null);

  const nations = new Set();
  const optionNation = [];

  const tiers = new Set();
  let optionTier = [];

  const optionPremium = [
    { value: true, label: "Premium" },
    { value: false, label: "All" }
  ];

  if (!!tanksToList) {
    createSelectors(tanks, nations, tiers, optionNation, optionTier);
  }

  const nationFilter = selectedOption => {
    if (!!selectedOption) {
      filters = updateObject(filters, {
        nations: selectedOption.map(elem => elem.value),
      });
    } else {
      filters = updateObject(filters, {
        nations: []
      });
    }
    setTanksToList(filterTanks(tanks, filters));
  };

  const tierFilter = selectedOption => {
    if (!!selectedOption) {
      filters = updateObject(filters, {
        tier: selectedOption.value
      });
      setTanksToList(filterTanks(tanks, filters));
    }
  };

  const premiumFilter = selectedOption => {
    filters = selectedOption.value
      ? updateObject(filters, { premium: true })
      : updateObject(filters, { premium: false });
    setTanksToList(filterTanks(tanks, filters));
  };

  let display = <Spinner />;

  if (!loading) {
    display = (
      <>
        <Carusel tanks={tanksToList} />
        <FilterWrapperStyle>
          <Filter
            options={optionNation}
            changed={nationFilter}
            multi={true}
            name="nation"
          />
          <Filter
            options={optionTier}
            changed={tierFilter}
            multi={false}
            name="tier"
          />
          <Filter
            options={optionPremium}
            changed={premiumFilter}
            multi={false}
            name="premium"
          />
        </FilterWrapperStyle>
        <InfoBlock />
      </>
    );
  }
  return <MainStyle>{display}</MainStyle>;
};

export default withErrorHandler(Main, axios);
