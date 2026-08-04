import {
  getProgress,
} from "../../progress/services/progress.service";


export function CertificateCard() {

  const progress =
    getProgress();


  const completed =
    progress.percentage === 100;


  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

      <h2 className="text-xl font-semibold">
        Certificate
      </h2>


      <div className="mt-5 rounded-lg bg-slate-950 p-5">

        {completed ? (

          <>
            <h3 className="text-green-400 font-semibold">
              🏆 Cloud Engineering Foundations Certificate
            </h3>

            <p className="mt-2 text-slate-400">
              Congratulations! You completed the bootcamp.
            </p>
          </>

        ) : (

          <>
            <h3 className="font-semibold text-slate-500">
              🔒 Certificate Locked
            </h3>

            <p className="mt-2 text-slate-400">
              Complete the bootcamp to unlock your certificate.
            </p>
          </>

        )}

      </div>

    </div>
  );
}