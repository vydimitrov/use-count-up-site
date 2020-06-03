import fetch from "node-fetch";

const stats = async (req, res) => {
  let stars = 0;
  let coverage = 0;
  let size = 0;

  try {
    const github = fetch(
      "https://api.github.com/repos/vydimitrov/use-count-up"
    ).then((data) => data.json());
    const codecov = fetch(
      "https://codecov.io/api/gh/vydimitrov/use-count-up"
    ).then((data) => data.json());
    const bundlephobia = fetch(
      "https://bundlephobia.com/api/size?package=use-count-up"
    ).then((data) => data.json());

    const [githubData, codecovData, bundlephobiaData] = await Promise.all([
      github,
      codecov,
      bundlephobia,
    ]);

    stars = githubData?.watchers_count ?? 0;
    coverage = parseFloat(codecovData?.commit?.totals?.c ?? 0);
    size = (bundlephobiaData?.gzip ?? 0) * 0.001;
  } catch (e) {
    console.log(e);
  } finally {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    // cache stats for one day
    res.setHeader("Cache-Control", "public, s-maxage=86400, max-age=86400");
    res.end(JSON.stringify({ stars, coverage, size }));
  }
};

export default stats;
