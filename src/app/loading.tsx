export default function Loading() {
  return (
    // Loading spinner
    <div className="h-screen w-screen flex flex-col items-center justify-center gap-12 opacity-[50%]">
      {/** Loading message */}
      <h1 className="text-3xl text-center sm:text-6xl font-bold text-white">
        Loading...
      </h1>
      <div className="animate-spin rounded-full h-32 w-32 border-white border-t-8 border-b-8 border-l-0"></div>
    </div>
  );
}
