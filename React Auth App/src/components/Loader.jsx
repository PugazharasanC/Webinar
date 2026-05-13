const Loader = () => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div
        className="
          w-16
          h-16
          border-4
          border-purple-500
          border-t-transparent
          rounded-full
          animate-spin
        "
      />
    </div>
  );
};

export default Loader;
