import { useEffect, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

import worker from "pdfjs-dist/build/pdf.worker.min.mjs?url";


pdfjs.GlobalWorkerOptions.workerSrc = worker;


interface PresentationViewerProps {
  file: string;
}


export function PresentationViewer({
  file,
}: PresentationViewerProps) {

  const [numPages, setNumPages] =
    useState(0);

  const [pageNumber, setPageNumber] =
    useState(1);

  const [width, setWidth] =
    useState(900);

  const [error, setError] =
    useState<string | null>(null);





  useEffect(() => {

    function updateWidth() {

      setWidth(
        Math.min(
          window.innerWidth * 0.75,
          1100
        )
      );

    }


    updateWidth();


    window.addEventListener(
      "resize",
      updateWidth
    );


    return () => {

      window.removeEventListener(
        "resize",
        updateWidth
      );

    };

  }, []);







  return (

    <div
      className="
        rounded-2xl
        border
        border-slate-800
        bg-slate-900
        p-6
        overflow-hidden
      "
    >


      {
        error ? (

          <div
            className="
              rounded-lg
              bg-red-500/10
              p-4
              text-red-400
            "
          >

            Failed to load presentation:
            <br />

            {error}

          </div>


        ) : (


          <Document

            file={file}


            onLoadSuccess={
              ({ numPages }) => {

                setNumPages(
                  numPages
                );

                setPageNumber(
                  1
                );

                setError(
                  null
                );

              }
            }


            onLoadError={
              (error) => {

                console.error(
                  "PDF Load Error:",
                  error
                );


                setError(
                  error.message
                );

              }
            }


            loading={

              <div
                className="
                  text-center
                  text-slate-400
                "
              >
                Loading presentation...
              </div>

            }

          >


            <div
              className="
                flex
                justify-center
              "
            >

              <div
                className="
                  overflow-hidden
                  rounded-lg
                  bg-white
                  shadow-xl
                "
              >

                <Page

                  pageNumber={
                    pageNumber
                  }

                  width={
                    width
                  }

                  renderTextLayer={
                    false
                  }

                  renderAnnotationLayer={
                    false
                  }

                />

              </div>

            </div>


          </Document>


        )

      }







      <div
        className="
          mt-6
          flex
          items-center
          justify-between
        "
      >


        <button

          disabled={
            pageNumber <= 1
          }

          onClick={() =>
            setPageNumber(
              page =>
                page - 1
            )
          }

          className="
            rounded-lg
            bg-slate-800
            px-4
            py-2
            text-white
            transition
            hover:bg-slate-700
            disabled:cursor-not-allowed
            disabled:opacity-40
          "

        >

          Previous

        </button>





        <span
          className="
            text-sm
            text-slate-400
          "
        >

          Slide {pageNumber} of {numPages}

        </span>





        <button

          disabled={
            pageNumber >= numPages
          }

          onClick={() =>
            setPageNumber(
              page =>
                page + 1
            )
          }

          className="
            rounded-lg
            bg-orange-500
            px-4
            py-2
            font-medium
            text-slate-950
            transition
            hover:bg-orange-400
            disabled:cursor-not-allowed
            disabled:opacity-40
          "

        >

          Next

        </button>


      </div>


    </div>

  );

}