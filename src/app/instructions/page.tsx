"use client";

import { Document, Page } from "react-pdf";
import instructionsDoc from "../../assets/docs/instructions.pdf";

import { useState } from "react";

export default function CoverLetterPage() {
  const [numPages, setNumPages] = useState<number>();

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
  }
  return (
    <main className="primary-page flex flex-col justify-center items-center gap-3 p-6">
      <h1 className="text-4xl font-bold">Instructions</h1>
      <p className="sm:w-3/4 p-12">
        For this assignment, I was tasked with creating a set of written
        instructions accompanied by visuals. My goal was to break down a complex
        task into simpler, smaller steps and explain each one clearly. I focused
        on using straightforward language and helpful illustrations to ensure
        the instructions were easy to follow. This helped me learn how to
        communicate detailed processes clearly and effectively.
      </p>
      <Document
        file={instructionsDoc}
        className="w-[90vw] sm:w-1/2 h-[90vh] overflow-auto rounded-3xl hide-scrollbar"
        onLoadSuccess={onDocumentLoadSuccess}
      >
        {Array.from(new Array(numPages), (el, index) => (
          <Page key={`page_${index + 1}`} pageNumber={index + 1} />
        ))}
      </Document>
    </main>
  );
}
