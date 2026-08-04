import { Document, Page } from "react-pdf";
import { useState } from "react";

interface Props {
    file: string;
}

export function PresentationViewer({
    file,
}: Props) {

    const [pages, setPages] = useState(0);

    return (

        <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">

            <Document
                file={file}
                onLoadSuccess={(pdf) =>
                    setPages(pdf.numPages)
                }
            >

                <Page
                    pageNumber={1}
                    width={800}
                />

            </Document>

            <p className="mt-4 text-sm text-slate-400">

                {pages} slides available

            </p>

        </div>

    );
}