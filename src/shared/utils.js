export const updateObject = (oldObject, updatedProperties) => {
  return {
    ...oldObject,
    ...updatedProperties
  };
};

export const sortByName = (obj, request) => {
  const newObj = obj.filter(elem => {
    return elem.value.toLowerCase().indexOf(request.toLowerCase()) === 0;
  });
  return newObj;
};

export const filterTanks = (arrTanks, objOptions) => {
  let displayTanks = [...arrTanks];

  if (objOptions.nations.length > 0) {
    displayTanks = displayTanks.filter(elem => {
      return objOptions.nations.indexOf(elem.nation) !== -1;
    });
  } else {
    displayTanks = [...arrTanks];
  }

  if (objOptions.tier > 0) {
    displayTanks = displayTanks.filter(elem => {
      return elem.tier >= objOptions.tier;
    });
  }

  if (objOptions.premium) {
    displayTanks = displayTanks.filter(elem => {
      return elem.premium;
    });
  }

  return displayTanks;
};

export const createSelectors = (
  arr,
  setOfNations,
  setOfTiers,
  arrNations,
  arrTiers
) => {
  arr.forEach(elem => {
    setOfNations.add(elem.nation);
    setOfTiers.add(elem.tier);
  });
  for (let nation of setOfNations) {
    arrNations.push({ value: nation, label: nation });
  }
  for (let tier of setOfTiers) {
    arrTiers.push({ value: tier, label: tier });
  }
  arrTiers.sort((a, b) => {
    return a.value > b.value ? 1 : -1;
  });
};
