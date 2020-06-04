import { useState, useEffect, useRef } from "react";
import { CountUp } from "use-count-up";
import fetch from "unfetch";
import { Waypoint } from "react-waypoint";
import { HeaderBackground } from "../components";

const toLocaleStringParams = {
  options: {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  },
};

const fetchStats = async (setStats) => {
  try {
    const data = await fetch("/api/stats");
    const apiStats = await data.json();
    setStats(apiStats);
  } catch (e) {}
};

const getIsConicGradientSupported = () => {
  // for SSR set it to true
  if (typeof window === "undefined") {
    return true;
  }

  // CUrrently Firefox and IE don't support conic gradient
  return (
    navigator.userAgent.indexOf("Firefox") === -1 &&
    navigator.userAgent.indexOf("MSIE") === -1 &&
    navigator.userAgent.indexOf("rv:") === -1
  );
};

const HeaderComponent = (props) => {
  const header = useRef(null);
  const [isCounting, setIsCounting] = useState(true);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [autoResetKey, setAutoResetKey] = useState(0);
  const [isConicGradientSupported, setIsConicGradientSupported] = useState(
    true
  );
  const [stats, setStats] = useState({ stars: 0, coverage: 0, size: 0 });
  const { stars, coverage, size } = stats;

  useEffect(() => {
    fetchStats(setStats);

    setIsConicGradientSupported(getIsConicGradientSupported());
  }, []);

  const countUpSharedProps = {
    isCounting,
    shouldUseToLocaleString: true,
    autoResetKey,
    onComplete: () => setIsCounting(false),
  };

  return (
    <>
      <header
        ref={header}
        className={`py-12 md:py-20 px-8 border-b border-gray-400 ${
          isConicGradientSupported ? "" : "no-conic-gradient"
        }`}
      >
        <div className="max-w-screen-lg mx-auto">
          <div className="text-center mb-8">
            <h1 className="font-heading text-center text-5xl md:text-6xl mb-2">
              use-count-up
            </h1>
            <Waypoint onEnter={() => setIsCounting(true)} />
            <p>
              React/React Native component and hook to animate counting up or
              down to a number
            </p>
          </div>
          <div className="md:flex">
            <div className="md:w-1/3 mb-8 md:mb-16 text-center">
              <div className="text-6xl leading-tight font-mono">
                <CountUp {...countUpSharedProps} end={stars} />
              </div>
              <div className="text-lg">Github Stars</div>
            </div>
            <div className="md:w-1/3 mb-8 md:mb-16 text-center">
              <div className="text-6xl leading-tight font-mono">
                <CountUp
                  {...countUpSharedProps}
                  end={coverage}
                  decimalPlaces={2}
                  suffix="%"
                  toLocaleStringParams={toLocaleStringParams}
                />
              </div>
              <div className="text-lg">Code Coverage</div>
            </div>
            <div className="md:w-1/3 mb-8 md:mb-16 text-center">
              <div className="text-6xl leading-tight font-mono">
                <CountUp
                  {...countUpSharedProps}
                  end={size}
                  decimalPlaces={2}
                  suffix="kB"
                  toLocaleStringParams={toLocaleStringParams}
                />
              </div>
              <div className="text-lg">Minified + Gzipped Size</div>
            </div>
          </div>
          <Waypoint
            onLeave={() => {
              setIsCounting(false);
              setAutoResetKey((prev) => prev + 1);
            }}
          />

          <div className="text-center">
            <a
              className="m-a inline-flex items-center py-2 px-4 rounded bg-black hover:bg-gray-800 transition-all duration-200 text-white text-xl"
              href="https://github.com/vydimitrov/use-count-up"
              aria-label="Star vydimitrov/use-count-up on GitHub"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#fff"
                  d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                />
              </svg>
              <span className="pl-2">Star on Github</span>
            </a>
          </div>
        </div>
        {isConicGradientSupported && (
          <HeaderBackground
            header={header}
            isCounting={isCounting}
            isHeaderVisible={isHeaderVisible}
          />
        )}
      </header>
      <Waypoint
        onEnter={() => setIsHeaderVisible(true)}
        onLeave={() => setIsHeaderVisible(false)}
      />
    </>
  );
};

export { HeaderComponent };
