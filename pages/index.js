import { HeaderComponent, DemosComponent } from "../components";

const Home = () => {
  return (
    <>
      <HeaderComponent />

      <section>
        <h2>Key Features</h2>
        <ul className="flex flex-wrap px-6">
          <li className="w-1/2 flex mb-2">
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
          <li className="w-1/2 flex mb-2">
            <span className="pr-2">📜</span>
            <span>
              Support <code>toLocaleString</code> with fallback options
            </span>
          </li>
          <li className="w-1/2 flex mb-2">
            <span className="pr-2">🎏</span>
            <span>
              Declarative API&nbsp;
              <em>
                (no more imperative calls to <code>start()</code> and&nbsp;
                <code>update()</code>)
              </em>
            </span>
          </li>
          <li className="w-1/2 flex mb-2">
            <span className="pr-2">📱</span>
            <span>React Native support for iOS and Android</span>
          </li>
          <li className="w-1/2 flex mb-2">
            <span className="pr-2">⚡</span>
            <span>Built with TypeScript</span>
          </li>
        </ul>
      </section>

      <DemosComponent />

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
};

export default Home;
