export default function Resume() {
  return (
    <div className="px-6 md:px-12 lg:px-24 text-center py-12">
      <div className="glass-panel p-10 rounded-3xl shadow-xl inline-block hover:shadow-2xl transition-shadow">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green to-teal font-sans tracking-tight">
          My Resume
        </h2>
        <a
          href="https://drive.google.com/file/d/1C42D_B0988Lzox4v6MIk6Qpk_wVfC2ne/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
          className="text-lg md:text-xl font-bold text-blue hover:text-sky underline decoration-2 underline-offset-4 transition-colors"
        >
          View/Download Resume
        </a>
      </div>
    </div>
  );
}
