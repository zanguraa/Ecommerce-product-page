import React from "react";
import Header from "./components/Header";
import ImageBox from "./components/ImageBox";
import Description from "./components/Description";

function App() {
  return (
    <div className="App flex flex-col gap-6 max-w-[1110px] mx-auto pt-7">
      <Header />

      <div className="flex flex-col lg:flex-row items-center md:gap-3  lg:gap-16 max-w-[1010px] lg:pl-10">
        <ImageBox />
        <Description />
      </div>
    </div>
  );
}

export default App;
