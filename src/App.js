import React, { useState } from "react";
import SLIDES from "./components/SliceData";
import Slice from "./components/Slice";

export default function App() {
  const [index, setIndex] = useState(0);

  const RestartSlice = () => {
    setIndex(0);
  };

  const PreviousSlice = () => {
    setIndex((index - 1 + SLIDES.length) % SLIDES.length);
  };

  const NextSlice = () => {
    setIndex((index + 1) % SLIDES.length);
  };
  return (
    <div>
      <h2 className="px-4 py-2">SlideShow App</h2>
      <Slice
        RestartSlice={RestartSlice}
        PreviousSlice={PreviousSlice}
        NextSlice={NextSlice}
        index={index}
      />
    </div>
  );
}
