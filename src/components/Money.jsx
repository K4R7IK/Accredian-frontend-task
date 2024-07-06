import React from "react";
import MoneyPic from "../assets/money.png";

const Money = () => {
  return (
    <>
      <img
        src={MoneyPic}
        alt="Money"
        className="object-top h-52 absolute left-[13%] top-[26%] rotate-180 scale-x-[-1]"
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 70%, 0 70%)",
        }}
      />
      <img
        src={MoneyPic}
        alt="Money"
        className="object-top h-52 absolute right-[13%] top-[26%] rotate-180"
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 70%, 0 70%)",
        }}
      />
      <img
        src={MoneyPic}
        alt="Money"
        className="object-top h-52 absolute right-[37%] top-[31%] rotate-180"
      />
      <img
        src={MoneyPic}
        alt="Money"
        className="object-top h-52 absolute left-[42%] top-[90%] z-[3] scale-x-[-1] scale-90"
      />
      <img
        src={MoneyPic}
        alt="Money"
        className="object-top h-52 absolute right-[14%] top-[60%] rotate-180 scale-x-[-1] scale-90"
      />
    </>
  );
};

export default Money;
