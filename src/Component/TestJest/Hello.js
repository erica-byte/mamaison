import React from "react";

export default function Hello(props) {
  if (props.name) {
    return <h1>Bonjour, {props.name} !</h1>;
  } else {
    return <span>Salut, étranger</span>;
  }
}