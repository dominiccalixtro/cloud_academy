import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

interface PresentationViewerProps {
  file: string;
}

export function PresentationViewer({
  file,
}: PresentationViewerProps) {
  const [numPages, setNumPages] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <Document
        file={file}
        onLoadSuccess={({ numPages }) => setNumPages(numPages)}
        onLoadError={(error) => {
          console.error("PDF Load Error:", error);
        }}
      >
        <Page
          pageNumber={pageNumber}
          width={900}
        />
      </Document>

      <div className="mt-6 flex items-center justify-between">
        <button
          disabled={pageNumber === 1}
          onClick={() => setPageNumber((page) => page - 1)}
          className="rounded-lg bg-slate-800 px-4 py-2 disabled:opacity-40"
        >
          Previous
        </button>

        <span className="text-sm text-slate-400">
          Slide {pageNumber} of {numPages}
        </span>

        <button
          disabled={pageNumber === numPages}
          onClick={() => setPageNumber((page) => page + 1)}
          className="rounded-lg bg-orange-500 px-4 py-2 font-medium text-slate-950 disabled:opacity-40"
        >
          Next
        </button>
      </div>
    </div>
  );
}