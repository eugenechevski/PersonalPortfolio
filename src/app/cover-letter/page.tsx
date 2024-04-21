"use client";

import { Document, Page } from "react-pdf";
import coverLetterDoc from "@/assets/docs/cover-letter.pdf";

export default function CoverLetterPage() {
  return (
    <main className="primary-page flex justify-center items-center">
      <Document file={coverLetterDoc} className="w-[90vw] sm:w-1/2 h-[90vh] overflow-auto rounded-3xl hide-scrollbar">
        <Page pageNumber={1} />
      </Document>
    </main>
  );
}
