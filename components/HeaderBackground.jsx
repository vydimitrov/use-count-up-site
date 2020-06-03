import { useRef, useEffect } from "react";
import { useElapsedTime } from "use-elapsed-time";

const initialValues = {
  from: 53,
  x: 62,
  y: 58,
  angel: 121,
};

const dimensions = {
  from: "deg",
  x: "%",
  y: "%",
  angel: "deg",
};

const intervals = {
  from: [20, 90],
  x: [20, 90],
  y: [20, 90],
  angel: [80, 140],
};

const linear = (t, b, c, d) => (c * t) / d + b;

const getRandom = ([min, max]) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const getNewEndValues = () => ({
  from: getRandom(intervals.from),
  x: getRandom(intervals.x),
  y: getRandom(intervals.y),
  angel: getRandom(intervals.angel),
});

// create a new component just for the background animation
// because use-elapsed-time will cause the component to rerender on every frame
const HeaderBackground = ({ header, isCounting, isHeaderVisible }) => {
  const duration = 6;
  const isPlaying = isHeaderVisible && !isCounting;
  const startValues = useRef(initialValues);
  const endValues = useRef(getNewEndValues());

  const onComplete = () => {
    startValues.current = endValues.current;
    endValues.current = getNewEndValues();
    return { shouldRepeat: true };
  };

  const { elapsedTime } = useElapsedTime(isPlaying, { duration, onComplete });

  if (header.current !== null) {
    for (let [key, value] of Object.entries(startValues.current)) {
      const diff = endValues.current[key] - value;
      const nextValue = linear(elapsedTime, value, diff, duration);
      header.current.style.setProperty(
        `--${key}`,
        `${nextValue}${dimensions[key]}`
      );
    }
  }

  return null;
};

export { HeaderBackground };
