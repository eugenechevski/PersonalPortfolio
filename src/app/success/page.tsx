import Link from "next/link";

export default function Page() {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center opacity-[50%]">
      <div className="lg:w-1/2 h-1/2 flex flex-col items-center justify-center text-center gap-12 p-4">
        <h1 className="text-3xl font-bold text-white">
          Thank you for your message! I will be in touch soon.
        </h1>
        <Link href="/">
          <button className="w-64 p-4 bg-white rounded-3xl shadow-2xl drop-shadow-2xl text-[#6B21A5] text-xl mb-12">
            Return Home
          </button>
        </Link>
      </div>
    </div>
  );
}
