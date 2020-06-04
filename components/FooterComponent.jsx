const FooterComponent = () => {
  return (
    <footer className="flex items-center justify-center text-xl text-white py-8 px-4 bg-black">
      Made with <span className="text-3xl px-1 text-red-700">❤</span> by&nbsp;
      <a
        href="https://twitter.com/vydimitrov"
        rel="nofollow"
        className="text-red-700 hover:text-red-600"
        target="_blank"
      >
        vydimitrov
      </a>
    </footer>
  );
};

export { FooterComponent };
