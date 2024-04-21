"use client";

import { Document, Page } from "react-pdf";
import resumeDoc from "@/assets/docs/Resume.pdf";

export default function ResumePage() {
  return (
    <main className="primary-page flex flex-col justify-center items-center gap-5 p-6">
      <h1 className="text-4xl font-bold">Resume</h1>
      <Document file={resumeDoc} className="w-[90vw] sm:w-1/2 h-[90vh] overflow-auto rounded-3xl hide-scrollbar">
        <Page pageNumber={1} />
      </Document>
    </main>
  );
}
