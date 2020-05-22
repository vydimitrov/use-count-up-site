import axios from "axios";
import { CountUp } from "use-count-up";

export default function Home(props) {
  const { stars, coverage, size } = props;

  return (
    <div className="max-w-screen-lg mx-auto">
      <div className="text-center my-8">
        <h1 className="font-heading text-center text-6xl mb-2">use-count-up</h1>
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
                options: { minimumFractionDigits: 2, maximumFractionDigits: 2 }
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
                options: { minimumFractionDigits: 2, maximumFractionDigits: 2 }
              }}
            />
          </div>
          <div className="text-lg">Minified Size</div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  let stars = 0;
  let coverage = 0;
  let size = 0;

  try {
    const github = axios.get(
      "https://api.github.com/repos/vydimitrov/use-count-up"
    );
    const codecov = axios.get(
      "https://codecov.io/api/gh/vydimitrov/use-count-up"
    );
    const bundlephobia = axios.get(
      "https://bundlephobia.com/api/size?package=use-count-up"
    );
    const [
      { data: githubData },
      { data: codecovData },
      { data: bundlephobiaData }
    ] = await axios.all([github, codecov, bundlephobia]);

    stars = githubData.watchers_count;
    coverage = parseFloat(codecovData.commit.totals.c);
    size = bundlephobiaData.size * 0.001;
  } catch (e) {
    console.log(e);
  } finally {
    return {
      props: { stars, coverage, size }
    };
  }
}
