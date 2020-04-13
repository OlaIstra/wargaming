import React from "react";

import Select from "react-select";

export const Filter = props => {
  return (
    <Select
      defaultValue={null}
      isMulti={props.multi}
      name={props.name}
      options={props.options}
      className={props.multi ? "basic-multi-select" : "basic-single"}
      classNamePrefix="select"
      onChange={props.changed}
    />
  );
};
