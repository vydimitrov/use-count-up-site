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
    <>
      <header className="py-16 px-8 border-b border-gray-400">
        <div className="max-w-screen-lg mx-auto">
          <div className="text-center mb-8">
            <h1 className="font-heading text-center text-6xl mb-2">
              use-count-up
            </h1>
            <p>
              React/React Native component and hook to animate counting up or
              down to a number
            </p>
          </div>
          <div className="flex mb-16">
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

          <div className="text-center">
            <a
              className="m-a inline-flex items-center py-1 px-4 rounded bg-black hover:bg-gray-800 transition-all duration-200 text-white text-2xl"
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
              <span className="pl-2">Star</span>
            </a>
          </div>
        </div>
      </header>

      <section>
        <h2>Key Features</h2>
        <div className="flex">
          <ul className="w-1/2 px-6">
            <li className="flex mb-2">
              <span className="pr-2">🏆</span>
              <span>
                Lighter implementation and smaller bundle size&nbsp;
                <a
                  href="https://bundlephobia.com/scan-results?packages=use-count-up@latest,react-countup"
                  rel="nofollow"
                  className="link"
                >
                  in comparison with similar feature solutions
                </a>
              </span>
            </li>
            <li className="flex mb-2">
              <span className="pr-2">📜</span>
              <span>
                Support <code>toLocaleString</code> with fallback options
              </span>
            </li>
            <li className="flex mb-2">
              <span className="pr-2">🎏</span>
              <span>
                Declarative API&nbsp;
                <em>
                  (no more imperative calls to <code>start()</code> and&nbsp;
                  <code>update()</code>)
                </em>
              </span>
            </li>
          </ul>
          <ul className="w-1/2 px-6">
            <li className="flex mb-2">
              <span className="pr-2">📱</span>
              <span>React Native support for iOS and Android</span>
            </li>
            <li className="flex mb-2">
              <span className="pr-2">⚡</span>
              <span>Built with TypeScript</span>
            </li>
          </ul>
        </div>
      </section>

      <section>
        <h2>React Demo</h2>
        <iframe
          src="https://codesandbox.io/embed/aged-monad-0mrfu?fontsize=14&hidenavigation=1&theme=dark"
          style={{
            width: "100%",
            height: "730px",
            border: 0,
            borderRadius: 4,
            overflow: "hidden",
          }}
          title="aged-monad-0mrfu"
        ></iframe>
      </section>

      <section>
        <h2>React Native Demo</h2>
        <div
          data-snack-id="@vydimitrov/use-count-up"
          data-snack-platform="ios"
          data-snack-preview="true"
          data-snack-theme="dark"
          style={{
            overflow: "hidden",
            background: "#212733",
            border: "1px solid rgba(0,0,0,.08)",
            borderRadius: 4,
            height: 640,
            width: "100%",
          }}
        />
        <script async src="https://snack.expo.io/embed.js"></script>
      </section>

      <section>
        <p>
          Didn't you find what you were looking for? Check out the full{" "}
          <code>use-count-up</code> documentation on the{" "}
          <a
            rel="noopener noreferrer"
            target="_blank"
            className="link"
            href="https://github.com/vydimitrov/use-count-up#use-count-up"
          >
            Github page
          </a>
        </p>
      </section>
    </>
  );
}
