import { useState, useEffect } from "react";
import { CountUp } from "use-count-up";
import fetch from "unfetch";

export default function Home(props) {
  const [stats, setStats] = useState({ stars: 0, coverage: 0, size: 0 });
  const { stars, coverage, size } = stats;

  useEffect(() => {
    (async () => {
      try {
        const data = await fetch("/api/stats");
        const apiStats = await data.json();
        setStats(apiStats);
      } catch (e) {}
    })();
  }, []);

  return (
    <header className="py-24 px-8">
      <div className="max-w-screen-lg mx-auto">
        <div className="text-center">
          <h1 className="font-heading text-center text-6xl mb-2">
            use-count-up
          </h1>
          <p>
            React/React Native component and hook to animate counting up or down
            to a number
          </p>
        </div>
        <div className="flex">
          <div className="w-1/3 text-center">
            <div className="text-6xl leading-tight font-mono">
              <CountUp isCounting end={stars} />
            </div>
            <div className="text-lg">Github Stars</div>
          </div>
          <div className="w-1/3 text-center">
            <div className="text-6xl leading-tight font-mono">
              <CountUp
                isCounting
                end={coverage}
                decimalPlaces={2}
                suffix="%"
                shouldUseToLocaleString
                toLocaleStringParams={{
                  options: {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  },
                }}
              />
            </div>
            <div className="text-lg">Code Coverage</div>
          </div>
          <div className="w-1/3 text-center">
            <div className="text-6xl leading-tight font-mono">
              <CountUp
                isCounting
                end={size}
                decimalPlaces={2}
                suffix="kB"
                shouldUseToLocaleString
                toLocaleStringParams={{
                  options: {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  },
                }}
              />
            </div>
            <div className="text-lg">Minified Size</div>
          </div>
        </div>

        {/* <iframe
        src="https://codesandbox.io/embed/aged-monad-0mrfu?fontsize=14&hidenavigation=1&theme=dark"
        style={{
          width: "100%",
          height: "500px",
          border: 0,
          borderRadius: 4,
          overflow: "hidden"
        }}
        title="aged-monad-0mrfu"
        allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
        sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
      ></iframe> */}
      </div>
    </header>
  );
}
