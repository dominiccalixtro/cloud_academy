export function ResourcesPage() {

  return (

    <div className="space-y-6">


      <div
        className="
          rounded-2xl
          border
          border-slate-800
          bg-slate-900
          p-8
        "
      >

        <h1 className="text-3xl font-bold text-white">
          Resources
        </h1>


        <p className="mt-2 text-slate-400">
          Cloud engineering learning materials and references.
        </p>


      </div>


      <div
        className="
          rounded-xl
          bg-slate-900
          border
          border-slate-800
          p-6
        "
      >

        <h2 className="text-xl font-semibold text-white">
          Available Resources
        </h2>


        <ul className="mt-4 space-y-3 text-slate-300">

          <li>
            AWS Documentation
          </li>

          <li>
            Linux Cheat Sheets
          </li>

          <li>
            Networking Guides
          </li>

          <li>
            Cloud Architecture References
          </li>

        </ul>


      </div>


    </div>

  );

}