import React from "react";
import SLIDES from "./SliceData";
import { Button } from "react-bootstrap";
import Style from "./Slice.module.css";

export default function Slice({
  index,
  RestartSlice,
  NextSlice,
  PreviousSlice,
}) {
  const slice = SLIDES[index];
  return (
    <div className="p-2">
      <div className="d-flex justify-content-center gap-4">
        <Button className="btn btn-primary py-2 px-4" onClick={RestartSlice}>
          Restart
        </Button>
        <Button
          className="btn btn-primary py-2 px-4"
          variant="primary"
          onClick={PreviousSlice}
        >
          Prev
        </Button>
        <Button
          className="btn btn-primary py-2 px-4"
          variant="primary"
          onClick={NextSlice}
        >
          Next
        </Button>
      </div>
      <div className={Style.Box}>
        <h1>{slice.title}</h1>
        <p>{slice.text}</p>
      </div>
    </div>
  );
}
