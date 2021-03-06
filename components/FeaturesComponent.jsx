const FeaturesComponent = () => {
  return (
    <section>
      <h2>Key Features</h2>
      <ul className="md:flex flex-wrap px-6">
        <li className="md:w-1/2 flex mb-2">
          <span className="pr-2">🏆</span>
          <span>
            Lighter implementation and smaller bundle size&nbsp;
            <a
              href="https://bundlephobia.com/scan-results?packages=use-count-up@latest,react-countup"
              rel="nofollow"
              className="link"
              target="_blank"
            >
              in comparison with similar feature solutions
            </a>
          </span>
        </li>
        <li className="md:w-1/2 flex mb-2">
          <span className="pr-2">🎏</span>
          <span>
            Declarative API -&nbsp;
            <em>
              no more imperative calls to <code>start()</code> and&nbsp;
              <code>update()</code>
            </em>
          </span>
        </li>
        <li className="md:w-1/2 flex mb-2">
          <span className="pr-2">📜</span>
          <span>
            Support <code>toLocaleString</code> with fallback options
          </span>
        </li>
        <li className="md:w-1/2 flex mb-2">
          <span className="pr-2">&nbsp;📱</span>
          <span>React Native support for iOS and Android</span>
        </li>
        <li className="md:w-1/2 flex mb-2">
          <span className="pr-2">🌳</span>
          <span>
            Tree-shakable (minified size further reduced by ~ 0.4kB when only
            the hook is used)
          </span>
        </li>
        <li className="md:w-1/2 flex mb-2">
          <span className="pr-2">&nbsp;🗄️</span>
          <span>Server-side rendering (SSR) compatibility</span>
        </li>
      </ul>
    </section>
  );
};

export { FeaturesComponent };
