export default function Resume() {
  return (
    <div className="px-6 md:px-12 lg:px-24 text-center">
      <div className="bg-ink_black/30 p-8 rounded-2xl border border-burnt_caramel/30 backdrop-blur-sm inline-block">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-rusty_spice to-vanilla_custard">
          My Resume
        </h2>
        <p className="text-lg text-gray-300">
          You can view my full resume{' '}
          <a
            className="text-burnt_caramel hover:text-rusty_spice font-bold underline decoration-dotted underline-offset-4 transition-colors"
            href="https://rxresu.me/iamdagod-kira/my-resume"
            target="_blank"
            rel="noreferrer"
          >
            here
          </a>
          .
        </p>
      </div>
    </div>
  );
}
