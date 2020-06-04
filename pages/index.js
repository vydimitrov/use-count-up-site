import {
  HeaderComponent,
  DemosComponent,
  FeaturesComponent,
  FooterComponent,
} from "../components";

const Home = () => {
  return (
    <>
      <HeaderComponent />
      <FeaturesComponent />
      <DemosComponent />

      <section>
        <p>
          Didn't you find what you were looking for? Check out the full{" "}
          <code>use-count-up</code> documentation on the{" "}
          <a
            rel="nofollow"
            target="_blank"
            className="link"
            href="https://github.com/vydimitrov/use-count-up#use-count-up"
          >
            Github page
          </a>
          .
        </p>
      </section>

      <FooterComponent />
    </>
  );
};

export default Home;
