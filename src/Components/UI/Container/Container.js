import React from "react";

import classes from "./Container.module.css";

export default function Container(props) {
  return <div className={classes["main-container"]}>{props.children}</div>;
}
