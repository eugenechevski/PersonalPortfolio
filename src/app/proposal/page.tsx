"use client";

import { Document, Page } from "react-pdf";
import proposalDoc from "@/assets/docs/proposal.pdf";

import { useState } from "react";

export default function ProposalPage() {
  const [numPages, setNumPages] = useState<number>();

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
  }
  return (
    <main className="primary-page flex flex-col justify-center items-center gap-3 p-6">
      <h1 className="text-4xl font-bold">Proposal</h1>
      <p className="sm:w-3/4 p-12">
        For this assignment, I crafted a research proposal modeled after the UCF
        Office of Undergraduate Research&apos;s &quot;Student Research
        Grant&quot; proposal. This task involved articulating a concise research
        question and developing a clear, structured approach to addressing this
        inquiry within a specified academic context. The primary goal was to
        learn how to effectively propose a research project that is both
        feasible and significant, using a structured format to ensure clarity
        and comprehensiveness in the presentation of my research plans.
      </p>
      <Document
        file={proposalDoc}
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
