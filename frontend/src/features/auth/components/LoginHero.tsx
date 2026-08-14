import {
  ArrowRight,
  CheckCircle2,
  Cloud,
  Cpu,
  Server,
  TerminalSquare,
} from "lucide-react";

const skillList = [
  "AWS Cloud Fundamentals",
  "Linux Administration",
  "Networking",
  "Infrastructure as Code",
  "DevOps Practices",
];

const roadmap = [
  "Cloud Fundamentals",
  "AWS Services",
  "Linux Administration",
  "Networking",
  "Infrastructure as Code",
  "Containers & Kubernetes",
  "DevOps Automation",
  "Cloud Engineer",
];

export function LoginHero() {
  return (
    <div className="relative flex h-full items-center justify-center overflow-hidden bg-slate-950 p-6 sm:p-8 lg:p-10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(249,115,22,0.18),transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.12),transparent_28%)]" />

      <div className="relative z-10 w-full max-w-6xl animate-[fadeIn_0.6s_ease-out]">
        <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-orange-300">
          <Cloud className="h-3.5 w-3.5" />
          DC CLOUD ACADEMY
        </div>

        <h1 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl xl:text-5xl">
          Build the skills to become a cloud engineer.
        </h1>

        <p className="mt-4 max-w-xl text-sm text-slate-300 sm:text-base">
          Learn AWS, Linux, Networking, Infrastructure as Code, and DevOps through structured,
          hands-on training designed for modern cloud careers.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          <div className="rounded-2xl border border-orange-500/40 bg-slate-900/70 p-5 shadow-lg shadow-slate-950/20 transition-all duration-300 hover:border-orange-500/50">
            <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-300">
              Your Cloud Engineering Journey
            </h2>

            <div className="mt-5 space-y-3">
              {roadmap.map((step, index) => (
                <div key={step} className="flex items-center gap-3">
                  <div className="flex flex-col items-center">
                    <span className={`h-2.5 w-2.5 rounded-full ${index === roadmap.length - 1 ? "bg-orange-500" : "bg-slate-600"}`} />
                    {index < roadmap.length - 1 && <span className="mt-1 h-7 w-px bg-slate-700" />}
                  </div>
                  <span className="text-sm text-slate-300">{step}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            {skillList.map((skill) => (
              <div
                key={skill}
                className="flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-900/70 px-4 py-3 text-slate-200 shadow-lg shadow-slate-950/20 transition-all duration-300 hover:border-orange-500/50 hover:bg-slate-900"
              >
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-orange-500/10 text-orange-400">
                  <CheckCircle2 className="h-4 w-4" />
                </span>
                <span className="font-medium">{skill}</span>
              </div>
            ))}
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5 shadow-2xl shadow-slate-950/30 transition-all duration-300 hover:border-orange-500/40">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2 text-sm text-slate-300">
                <TerminalSquare className="h-4 w-4 text-orange-400" />
                terminal
              </div>
              <div className="flex gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
              </div>
            </div>

            <div className="mt-4 space-y-3 font-mono text-xs text-slate-300 sm:text-sm">
              <p className="text-orange-300">$ aws ec2 describe-instances</p>
              <p className="text-slate-400">$ terraform apply</p>
              <p className="text-slate-400">$ kubectl get pods</p>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3 text-center">
              <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-3 transition-all duration-300 hover:border-orange-500/40">
                <Server className="mx-auto h-5 w-5 text-orange-400" />
                <p className="mt-2 text-[10px] uppercase tracking-[0.18em] text-slate-400">EC2</p>
              </div>
              <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-3 transition-all duration-300 hover:border-orange-500/40">
                <Cloud className="mx-auto h-5 w-5 text-orange-400" />
                <p className="mt-2 text-[10px] uppercase tracking-[0.18em] text-slate-400">S3</p>
              </div>
              <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-3 transition-all duration-300 hover:border-orange-500/40">
                <Cpu className="mx-auto h-5 w-5 text-orange-400" />
                <p className="mt-2 text-[10px] uppercase tracking-[0.18em] text-slate-400">RDS</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex items-center gap-2 text-sm text-slate-400">
          <span>Infrastructure</span>
          <ArrowRight className="h-4 w-4 text-orange-400" />
          <span>Automation</span>
          <ArrowRight className="h-4 w-4 text-orange-400" />
          <span>Modern DevOps</span>
        </div>
      </div>
    </div>
  );
}
