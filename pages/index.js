import { HeaderComponent } from "../components";

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

      <section>
        <h2>React Demo</h2>
        <p className="mb-4">
          All available props and methods for the component and hook can be
          found on{" "}
          <a
            rel="noopener noreferrer"
            target="_blank"
            className="link"
            href="https://github.com/vydimitrov/use-count-up#use-count-up#props"
          >
            the use-count-up Github page
          </a>
          . Wonder why you should use <code>toLocaleString</code>? Read more
          about all benefits it offers{" "}
          <a
            rel="noopener noreferrer"
            target="_blank"
            className="link"
            href="https://github.com/vydimitrov/use-count-up#use-count-up#why-use-tolocalestring"
          >
            here
          </a>
          .
        </p>
        <iframe
          src="https://codesandbox.io/embed/aged-monad-0mrfu?fontsize=14&hidenavigation=1&theme=dark"
          style={{
            width: "100%",
            height: "780px",
            border: 0,
            borderRadius: 4,
            overflow: "hidden",
          }}
          title="use-count-up demo"
        ></iframe>
      </section>

      <section>
        <h2>React Native Demo</h2>
        <p className="mb-4">
          Web and Mobile are sharing the same props and methods. The full list
          can be found on{" "}
          <a
            rel="noopener noreferrer"
            target="_blank"
            className="link"
            href="https://github.com/vydimitrov/use-count-up#use-count-up#props"
          >
            the use-count-up Github page
          </a>
          . <code>toLocaleString</code> works as expected on iOS. On Android it
          works with React Native after 0.59 version according to{" "}
          <a
            rel="noopener noreferrer"
            target="_blank"
            className="link"
            href="https://github.com/facebook/react-native/issues/19410#issuecomment-434232762"
          >
            this post
          </a>
          . Anyhow you are covered with{" "}
          <a
            rel="noopener noreferrer"
            target="_blank"
            className="link"
            href="https://github.com/vydimitrov/use-count-up#why-use-tolocalestring"
          >
            fallback options
          </a>
          .
        </p>
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
};

export default Home;
