const ListeningSection = () => {
  return (
    <section
      className="bg-gray-800 rounded-lg p-6 flex flex-col items-center space-y-4"
      aria-labelledby="listening-heading"
    >
      <h2 id="listening-heading" className="text-xl font-semibold text-white">
        Listening...
      </h2>
      <div className="h-16 w-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse flex items-center justify-center">
        🎤
      </div>
      <p className="text-gray-400">Awaiting your command...</p>
    </section>
  );
};

export default ListeningSection;
