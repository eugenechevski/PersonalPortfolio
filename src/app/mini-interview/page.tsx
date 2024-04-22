'use client';

import miniInterviewVideo from "../../assets/mini-interview.mp4";

export default function MiniInterviewPage() {
  return (
    <main className="primary-page flex flex-col justify-center items-center gap-3">
      <h1 className="text-4xl font-bold">Mini Interview</h1>
      <video width="320" height="240" controls preload="none">
        <source src={miniInterviewVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </main>
  );
}
