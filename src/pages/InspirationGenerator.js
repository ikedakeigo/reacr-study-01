import React from "react";
// import inspirations from "./inspirations";
import FancyText from "./FancyText";
import Color from "./Color";
import inspirations from "./inspirations";

export default function InspirationGenerator({children}) {
  const [index, setIndex] = React.useState(0);
  const inspiration = inspirations[index];
  const next = () => setIndex((index + 1) % inspirations.length);

  return (
    <>
      <p>Your inspiration {inspiration.type} is:</p>
      {inspiration.type === "quote"
        ? <FancyText text={inspiration.value} />
        : <Color value={inspiration.value} />
        }

        <button onClick={next}>
          insipration me again
        </button>
        {children}
    </>
  )
}
