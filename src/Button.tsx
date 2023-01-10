import * as React from "react";

export const Button = (props: { children: any }) => {
  return <button className="btn btn-primary">{props.children}</button>;
};
