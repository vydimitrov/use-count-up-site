import { useState } from "react";
import { Waypoint } from "react-waypoint";

const DemosComponent = () => {
  const [isReactDemoVisible, setIsReactDemoVisible] = useState(false);
  const [isReactNativeDemoVisible, setIsReactNativeDemoVisible] = useState(
    false
  );

  return (
    <>
      <section>
        <h2>React Demo</h2>
        {!isReactDemoVisible && (
          <Waypoint onEnter={() => setIsReactDemoVisible(true)} />
        )}
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
        <div className="react-demo-wrapper">
          {isReactDemoVisible && (
            <iframe
              src="https://codesandbox.io/embed/aged-monad-0mrfu?fontsize=14&hidenavigation=1&theme=dark"
              style={{
                width: "100%",
                height: 780,
                border: 0,
                borderRadius: 4,
                overflow: "hidden",
              }}
              title="use-count-up react demo"
              frameborder="0"
            />
          )}
        </div>
      </section>

      <section>
        <h2>React Native Demo</h2>
        {!isReactNativeDemoVisible && (
          <Waypoint onEnter={() => setIsReactNativeDemoVisible(true)} />
        )}
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
        <div className="react-native-demo-wrapper">
          {isReactNativeDemoVisible && (
            <iframe
              src="https://snack.expo.io/embedded/@vydimitrov/use-count-up?preview=true&platform=ios&iframeId=9tg0db7wbr&theme=dark"
              frameborder="0"
              data-snack-iframe="true"
              style={{
                width: "100%",
                height: 640,
                border: 0,
                borderRadius: 4,
                overflow: "hidden",
              }}
              title="use-count-up react native demo"
            />
          )}
        </div>
      </section>
    </>
  );
};

export { DemosComponent };
