"use client";

import { Document, Page } from "react-pdf";
import coverLetterDoc from "@/assets/docs/cover-letter.pdf";

export default function CoverLetterPage() {
  return (
    <main className="primary-page flex flex-col justify-center items-center gap-5 p-6">
      <h1 className="text-4xl font-bold">Cover Letter</h1>
      <Document file={coverLetterDoc} className="w-[90vw] sm:w-1/2 h-[90vh] overflow-auto rounded-3xl hide-scrollbar">
        <Page pageNumber={1} />
      </Document>
    </main>
  );
}
