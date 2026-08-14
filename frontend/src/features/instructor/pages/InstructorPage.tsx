import {
  Award,
  Briefcase,
  Cloud,
  Code2,
  Shield,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { useState, type ComponentType } from "react";

import { useAuth } from "../../auth/context/AuthContext";
import instructorImage from "../assets/instructor-profile.png";

const OWNER_EMAIL = "dominic@dccloudacademy.com";

type CertificationItem = {
  id: string;
  icon: LucideIcon;
  name: string;
  issuer: string;
  description: string;
  url: string;
};

type ExperienceItem = {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
};

type SocialLinkItem = {
  id: string;
  label: string;
  href: string;
  icon: ComponentType<SocialIconProps>;
};

const makeId = () => `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;

const initialCertifications: CertificationItem[] = [
  {
    id: makeId(),
    icon: Award,
    name: "AWS Certified Solutions Architect – Associate",
    issuer: "Amazon Web Services",
    description:
      "Cloud architecture, scalable solutions, high availability, security, and AWS best practices.",
    url: "https://www.credly.com/badges/11a7c4b6-69a5-4563-8e77-ab4da7d33d10/public_url",
  },
  {
    id: makeId(),
    icon: Cloud,
    name: "AWS Certified SysOps Administrator – Associate",
    issuer: "Amazon Web Services",
    description:
      "AWS operations, monitoring, deployment, automation, and troubleshooting.",
    url: "https://www.credly.com/badges/9aeebca5-1356-487a-b0ce-493c2087763c/public_url",
  },
  {
    id: makeId(),
    icon: Shield,
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    description: "Cloud fundamentals and AWS core concepts.",
    url: "https://www.credly.com/badges/805b6ba4-06c5-448c-87bb-a80aa66ee3f9/public_url",
  },
];

const initialExperience: ExperienceItem[] = [
  {
    id: makeId(),
    title: "AWS Cloud Engineer",
    company: "ScalableOS",
    period: "January 2026 - Present",
    description:
      "Managing AWS cloud operations, infrastructure monitoring, backups, disaster recovery, AWS networking, and production cloud environments.",
    technologies: ["AWS", "AWS Backup", "Amazon S3", "CloudWatch", "Terraform", "IIS", "Active Directory"],
  },
  {
    id: makeId(),
    title: "AWS Engineer",
    company: "Booth and Partners",
    period: "June 2025 - December 2025",
    description:
      "Delivered AWS infrastructure solutions, Terraform-based deployments, cloud migration validation, Amazon WorkSpaces solutions, and backup architectures.",
    technologies: ["Terraform", "AWS Landing Zone", "AWS MGN", "Amazon FSx", "AWS Directory Service", "Amazon S3"],
  },
  {
    id: makeId(),
    title: "Cloud Engineer",
    company: "Stratpoint Global Outsourcing",
    period: "January 2024 - May 2025",
    description:
      "Managed AWS production environments, Kubernetes workloads, infrastructure automation, cloud optimization, and security governance.",
    technologies: ["AWS", "Terraform", "AWS CloudFormation", "Amazon EKS", "Kubernetes", "Lambda", "Redshift", "IAM", "AWS Organizations"],
  },
];

type SocialIconProps = {
  className?: string;
};

function GitHubIcon({ className = "h-4 w-4" }: SocialIconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 .5a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.1c-3.3.7-4-1.6-4-1.6-.5-1.4-1.2-1.8-1.2-1.8-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1 2-.8 2-.8.9-1.5 2.3-1.2 2.9-.9.1-.7.3-1.2.5-1.5-1-2.7-1.7-3.3-2.4-.4-.5-.8-1.3-.8-2.2 0-1.6.8-2.9 1.8-3.5-.2-.4-.8-1.9.2-3.8 1.4 0 2.4.9 2.9 1.2.8-.2 1.7-.3 2.6-.3s1.8.1 2.6.3c.5-.3 1.5-1.2 2.9-1.2.9 1.9.4 3.4.2 3.8 1.1.6 1.8 1.9 1.8 3.5 0 .9-.4 1.7-.8 2.3-.6.7-1.8 1.4-3.3 2.4.3.3.6.9.6 1.8v2.7c0 .3.2.7.8.6A12 12 0 0 0 12 .5Z" />
    </svg>
  );
}

function LinkedInIcon({ className = "h-4 w-4" }: SocialIconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M6.9 8.5A1.7 1.7 0 1 1 6.9 5a1.7 1.7 0 0 1 0 3.5ZM5.4 9.8h3V19h-3V9.8Zm5.2 0h2.9v1.3h.1c.4-.8 1.4-1.7 2.9-1.7 3.1 0 3.7 2 3.7 4.7V19h-3v-17.7h-3v13.6c0 1.1-.1 2.5-1.5 2.5-1.5 0-1.8-1.3-1.8-2.7V9.8Z" />
    </svg>
  );
}

function InstagramIcon({ className = "h-4 w-4" }: SocialIconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true">
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.6" cy="6.4" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon({ className = "h-4 w-4" }: SocialIconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M13.4 22v-9h3l.4-3.1h-3.4V7.2c0-.9.3-1.6 1.7-1.6H17V2.8c-.3 0-1.3-.1-2.5-.1-2.4 0-4.1 1.5-4.1 4.2v2.4H7.5V13h2.9v9h2.9Z" />
    </svg>
  );
}

const initialSocialLinks: SocialLinkItem[] = [
  { id: makeId(), label: "GitHub", href: "https://github.com/dominiccalixtro", icon: GitHubIcon },
  { id: makeId(), label: "LinkedIn", href: "https://www.linkedin.com/in/angel-dominic-kynnt-calixtro-881b60200/", icon: LinkedInIcon },
  { id: makeId(), label: "Instagram", href: "https://www.instagram.com/xzcalix/", icon: InstagramIcon },
  { id: makeId(), label: "Facebook", href: "https://www.facebook.com/dominiccalixtro", icon: FacebookIcon },
];

const defaultAboutText = `AWS Cloud Engineer with experience delivering and automating cloud infrastructure
solutions across AWS production and Professional Services environments. Specialized in
AWS Cloud Infrastructure, Terraform, AWS CloudFormation, Amazon EKS / Kubernetes,
Cloud Security, Cloud Migration, Linux Administration, Networking, and DevOps
Automation. Helping aspiring cloud engineers build practical skills through structured
lessons, hands-on projects, and real-world cloud engineering practices.`;

type SkillGroup = {
  id: string;
  title: string;
  items: string[];
};

const initialSkillGroups: SkillGroup[] = [
  {
    id: makeId(),
    title: "Cloud Platforms",
    items: ["AWS"],
  },
  {
    id: makeId(),
    title: "Infrastructure as Code",
    items: ["Terraform", "AWS CloudFormation"],
  },
  {
    id: makeId(),
    title: "Containers",
    items: ["Amazon EKS", "Kubernetes", "Docker", "Amazon ECR", "KEDA"],
  },
  {
    id: makeId(),
    title: "Automation and CI/CD",
    items: ["Python", "Bash", "AWS CLI", "Git", "GitHub Actions", "GitLab CI", "AWS CodePipeline"],
  },
  {
    id: makeId(),
    title: "Networking",
    items: ["Amazon VPC", "Transit Gateway", "VPC Peering", "Route 53", "Load Balancing", "Security Groups", "Network ACLs"],
  },
  {
    id: makeId(),
    title: "Cloud Security",
    items: ["AWS IAM", "RBAC", "AWS Organizations", "SCPs", "Encryption"],
  },
  {
    id: makeId(),
    title: "Operating Systems",
    items: ["Linux", "Windows Server"],
  },
];

export function InstructorPage() {
  const { user } = useAuth();
  const canEdit = user?.role === "instructor" && user.email === OWNER_EMAIL;

  const [certifications, setCertifications] = useState(initialCertifications);
  const [experience, setExperience] = useState(initialExperience);
  const [socialLinks, setSocialLinks] = useState(initialSocialLinks);
  const [aboutText, setAboutText] = useState(defaultAboutText);
  const [skillGroups, setSkillGroups] = useState(initialSkillGroups);
  const [showCertForm, setShowCertForm] = useState(false);
  const [showExpForm, setShowExpForm] = useState(false);
  const [showSkillGroupForm, setShowSkillGroupForm] = useState(false);
  const [showSocialForm, setShowSocialForm] = useState(false);
  const [showAboutEdit, setShowAboutEdit] = useState(false);
  const [editingCertId, setEditingCertId] = useState<string | null>(null);
  const [editingExpId, setEditingExpId] = useState<string | null>(null);
  const [editingSkillGroupId, setEditingSkillGroupId] = useState<string | null>(null);
  const [editingSocialId, setEditingSocialId] = useState<string | null>(null);
  const [certForm, setCertForm] = useState({
    icon: Award,
    name: "",
    issuer: "",
    description: "",
    url: "",
  });
  const [expForm, setExpForm] = useState({
    title: "",
    company: "",
    period: "",
    description: "",
    technologies: "",
  });
  const [skillGroupForm, setSkillGroupForm] = useState({
    title: "",
    items: "",
  });
  const [skillItemForm, setSkillItemForm] = useState({
    groupId: "",
    value: "",
  });
  const [editingSkillItem, setEditingSkillItem] = useState<{ groupId: string; oldValue: string } | null>(
    null,
  );
  const [socialForm, setSocialForm] = useState({
    label: "",
    href: "",
  });

  const resetCertForm = () => {
    setCertForm({
      icon: Award,
      name: "",
      issuer: "",
      description: "",
      url: "",
    });
    setEditingCertId(null);
    setShowCertForm(false);
  };

  const resetExpForm = () => {
    setExpForm({
      title: "",
      company: "",
      period: "",
      description: "",
      technologies: "",
    });
    setEditingExpId(null);
    setShowExpForm(false);
  };

  const resetSkillGroupForm = () => {
    setSkillGroupForm({
      title: "",
      items: "",
    });
    setEditingSkillGroupId(null);
    setShowSkillGroupForm(false);
  };

  const resetSocialForm = () => {
    setSocialForm({
      label: "",
      href: "",
    });
    setEditingSocialId(null);
    setShowSocialForm(false);
  };

  const handleCertSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const name = certForm.name.trim();
    const issuer = certForm.issuer.trim();
    const description = certForm.description.trim();
    const url = certForm.url.trim();

    if (!name || !issuer || !description) {
      return;
    }

    const nextItem: CertificationItem = {
      id: editingCertId ?? makeId(),
      icon: certForm.icon,
      name,
      issuer,
      description,
      url,
    };

    setCertifications((current) => {
      if (editingCertId) {
        return current.map((item) => (item.id === editingCertId ? nextItem : item));
      }

      return [...current, nextItem];
    });

    resetCertForm();
  };

  const handleExpSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const title = expForm.title.trim();
    const company = expForm.company.trim();
    const period = expForm.period.trim();
    const description = expForm.description.trim();

    if (!title || !company || !period || !description) {
      return;
    }

    const nextItem: ExperienceItem = {
      id: editingExpId ?? makeId(),
      title,
      company,
      period,
      description,
      technologies: expForm.technologies
        .split(",")
        .map((technology) => technology.trim())
        .filter(Boolean),
    };

    setExperience((current) => {
      if (editingExpId) {
        return current.map((item) => (item.id === editingExpId ? nextItem : item));
      }

      return [...current, nextItem];
    });

    resetExpForm();
  };

  const startEditingCert = (item: CertificationItem) => {
    setCertForm({
      icon: item.icon,
      name: item.name,
      issuer: item.issuer,
      description: item.description,
      url: item.url,
    });
    setEditingCertId(item.id);
    setShowCertForm(true);
  };

  const startEditingExp = (item: ExperienceItem) => {
    setExpForm({
      title: item.title,
      company: item.company,
      period: item.period,
      description: item.description,
      technologies: item.technologies.join(", "),
    });
    setEditingExpId(item.id);
    setShowExpForm(true);
  };

  const handleSkillGroupSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const title = skillGroupForm.title.trim();
    const items = skillGroupForm.items
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean);

    if (!title || items.length === 0) {
      return;
    }

    const nextGroup: SkillGroup = {
      id: editingSkillGroupId ?? makeId(),
      title,
      items,
    };

    setSkillGroups((current) => {
      if (editingSkillGroupId) {
        return current.map((group) => (group.id === editingSkillGroupId ? nextGroup : group));
      }

      return [...current, nextGroup];
    });

    resetSkillGroupForm();
  };

  const handleSocialSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const label = socialForm.label.trim();
    const href = socialForm.href.trim();

    if (!label || !href) {
      return;
    }

    const nextLink: SocialLinkItem = {
      id: editingSocialId ?? makeId(),
      label,
      href,
      icon: label.toLowerCase().includes("github")
        ? GitHubIcon
        : label.toLowerCase().includes("linkedin")
          ? LinkedInIcon
          : label.toLowerCase().includes("instagram")
            ? InstagramIcon
            : FacebookIcon,
    };

    setSocialLinks((current) => {
      if (editingSocialId) {
        return current.map((item) => (item.id === editingSocialId ? nextLink : item));
      }

      return [...current, nextLink];
    });

    resetSocialForm();
  };

  const saveSkillItem = (groupId: string) => {
    const normalizedValue = skillItemForm.value.trim();

    if (!normalizedValue) {
      return;
    }

    setSkillGroups((current) =>
      current.map((group) => {
        if (group.id !== groupId) {
          return group;
        }

        const nextItems = editingSkillItem?.groupId === groupId
          ? group.items.map((item) => (item === editingSkillItem.oldValue ? normalizedValue : item))
          : [...group.items, normalizedValue];

        const uniqueItems = [...new Set(nextItems)];
        return { ...group, items: uniqueItems };
      }),
    );

    setSkillItemForm({ groupId: "", value: "" });
    setEditingSkillItem(null);
  };

  return (
    <div className="space-y-8">
      <div className="grid gap-8 xl:grid-cols-[1.35fr_0.95fr]">
        <div className="space-y-6">
          <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-lg shadow-slate-950/20 transition-all duration-300 hover:border-orange-500/50 sm:p-7">
            <div className="flex flex-col items-center gap-5 text-center sm:text-left">
              <div className="group relative">
                <img
                  src={instructorImage}
                  alt="Dominic Calixtro"
                  className="relative h-28 w-28 rounded-full border border-slate-600 object-cover shadow-xl shadow-slate-950/40 transition-all duration-300 group-hover:scale-105 sm:h-32 sm:w-32"
                />
              </div>

              <div className="w-full">
                <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Dominic Calixtro
                </h1>
                <p className="mt-3 text-base font-medium text-orange-400 sm:text-lg">
                  AWS Cloud Engineer | Cloud Infrastructure Instructor
                </p>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
                  AWS Cloud Engineer delivering and automating cloud infrastructure solutions across
                  AWS production and Professional Services environments.
                </p>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {[
                    { value: "3", label: "AWS Certifications" },
                    { value: "2+", label: "Years Cloud Experience" },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-xl border border-slate-700 bg-slate-950/60 px-3 py-3 text-left"
                    >
                      <div className="text-2xl font-bold text-orange-400">{stat.value}</div>
                      <div className="mt-1 text-xs text-slate-400">{stat.label}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-5 flex flex-wrap gap-2 text-left">
                  {[
                    "AWS Cloud Infrastructure",
                    "Terraform",
                    "AWS CloudFormation",
                    "Amazon EKS / Kubernetes",
                    "Cloud Security",
                    "Cloud Migration",
                    "Linux Administration",
                    "Networking",
                    "DevOps Automation",
                  ].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-slate-700 bg-slate-950/70 px-3 py-1.5 text-xs font-medium text-slate-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {socialLinks.map(({ id, label, href, icon: Icon }) => (
                    <div key={id} className="flex items-center gap-2">
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-950/60 px-3 py-2 text-sm font-medium text-slate-200 transition-all duration-300 hover:border-orange-500/50 hover:text-orange-300"
                      >
                        <Icon className="h-4 w-4" />
                        <span>{label}</span>
                      </a>
                      {canEdit && (
                        <>
                          <button
                            type="button"
                            onClick={() => {
                              setEditingSocialId(id);
                              setSocialForm({ label, href });
                              setShowSocialForm(true);
                            }}
                            className="text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-400 hover:text-orange-300"
                          >
                            Edit
                          </button>
                          <button
                            type="button"
                            onClick={() => setSocialLinks((current) => current.filter((item) => item.id !== id))}
                            className="text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-400 hover:text-red-400"
                          >
                            Remove
                          </button>
                        </>
                      )}
                    </div>
                  ))}
                  {canEdit && (
                    <button
                      type="button"
                      onClick={() => {
                        if (showSocialForm) {
                          resetSocialForm();
                          return;
                        }
                        setShowSocialForm(true);
                      }}
                      className="rounded-lg border border-slate-700 bg-slate-950/70 px-3 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-slate-200 transition hover:border-orange-500/50 hover:text-orange-300"
                    >
                      {showSocialForm ? "Cancel" : "+ Link"}
                    </button>
                  )}
                </div>

                {showSocialForm && canEdit && (
                  <form onSubmit={handleSocialSubmit} className="mt-4 space-y-3 rounded-xl border border-slate-700 bg-slate-950/60 p-3">
                    <div className="grid gap-3 md:grid-cols-2">
                      <input
                        value={socialForm.label}
                        onChange={(event) => setSocialForm((current) => ({ ...current, label: event.target.value }))}
                        placeholder="Label"
                        className="rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-white placeholder:text-slate-500 focus:border-orange-500/60 focus:outline-none"
                      />
                      <input
                        value={socialForm.href}
                        onChange={(event) => setSocialForm((current) => ({ ...current, href: event.target.value }))}
                        placeholder="Profile URL"
                        className="rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-white placeholder:text-slate-500 focus:border-orange-500/60 focus:outline-none"
                      />
                    </div>
                    <div className="flex justify-end gap-2">
                      <button
                        type="button"
                        onClick={resetSocialForm}
                        className="rounded-lg border border-slate-700 px-3 py-2 text-xs font-medium text-slate-300 hover:border-slate-500"
                      >
                        Clear
                      </button>
                      <button
                        type="submit"
                        className="rounded-lg bg-orange-500 px-3 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-slate-950 hover:bg-orange-400"
                      >
                        {editingSocialId ? "Save link" : "Add link"}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </section>

          <section className="rounded-2xl border border-slate-800 bg-slate-900 p-5 transition-all duration-300 hover:border-orange-500/50 sm:p-7">
            <div className="mb-4 flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-orange-500/30 bg-orange-500/10 text-orange-400">
                  <Sparkles className="h-5 w-5" />
                </div>
                <h2 className="text-2xl font-bold text-white">About Instructor</h2>
              </div>
              {canEdit && (
                <button
                  type="button"
                  onClick={() => setShowAboutEdit((current) => !current)}
                  className="rounded-lg border border-slate-700 bg-slate-950/70 px-3 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-slate-200 transition hover:border-orange-500/50 hover:text-orange-300"
                >
                  {showAboutEdit ? "Cancel" : "Edit"}
                </button>
              )}
            </div>

            {showAboutEdit && canEdit ? (
              <div className="space-y-3">
                <textarea
                  value={aboutText}
                  onChange={(event) => setAboutText(event.target.value)}
                  rows={8}
                  className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-white placeholder:text-slate-500 focus:border-orange-500/60 focus:outline-none"
                />
                <div className="flex justify-end">
                  <button
                    type="button"
                    onClick={() => setShowAboutEdit(false)}
                    className="rounded-lg bg-orange-500 px-3 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-slate-950 hover:bg-orange-400"
                  >
                    Save summary
                  </button>
                </div>
              </div>
            ) : (
              <p className="text-sm leading-7 text-slate-300 sm:text-base">{aboutText}</p>
            )}
          </section>
        </div>

        <div className="space-y-6">
          <section className="rounded-2xl border border-slate-800 bg-slate-900 p-5 transition-all duration-300 hover:border-orange-500/50 sm:p-7">
            <div className="mb-4 flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-orange-500/30 bg-orange-500/10 text-orange-400">
                  <Award className="h-5 w-5" />
                </div>
                <h2 className="text-2xl font-bold text-white">Certifications</h2>
              </div>
              {canEdit && (
                <button
                  type="button"
                  onClick={() => {
                    if (showCertForm) {
                      resetCertForm();
                      return;
                    }
                    setShowCertForm(true);
                  }}
                  className="rounded-lg border border-slate-700 bg-slate-950/70 px-3 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-slate-200 transition hover:border-orange-500/50 hover:text-orange-300"
                >
                  {showCertForm ? "Cancel" : "Add cert"}
                </button>
              )}
            </div>

            {showCertForm && canEdit && (
              <form onSubmit={handleCertSubmit} className="mb-4 space-y-3 rounded-xl border border-slate-700 bg-slate-950/60 p-3">
                <div className="grid gap-3 md:grid-cols-2">
                  <input
                    value={certForm.name}
                    onChange={(event) => setCertForm((current) => ({ ...current, name: event.target.value }))}
                    placeholder="Certification name"
                    className="rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-white placeholder:text-slate-500 focus:border-orange-500/60 focus:outline-none"
                  />
                  <input
                    value={certForm.issuer}
                    onChange={(event) => setCertForm((current) => ({ ...current, issuer: event.target.value }))}
                    placeholder="Issuer"
                    className="rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-white placeholder:text-slate-500 focus:border-orange-500/60 focus:outline-none"
                  />
                </div>
                <textarea
                  value={certForm.description}
                  onChange={(event) => setCertForm((current) => ({ ...current, description: event.target.value }))}
                  placeholder="Short description"
                  rows={3}
                  className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-white placeholder:text-slate-500 focus:border-orange-500/60 focus:outline-none"
                />
                <input
                  value={certForm.url}
                  onChange={(event) => setCertForm((current) => ({ ...current, url: event.target.value }))}
                  placeholder="Credly URL"
                  className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-white placeholder:text-slate-500 focus:border-orange-500/60 focus:outline-none"
                />
                <div className="flex justify-end gap-2">
                  <button
                    type="button"
                    onClick={resetCertForm}
                    className="rounded-lg border border-slate-700 px-3 py-2 text-xs font-medium text-slate-300 hover:border-slate-500"
                  >
                    Clear
                  </button>
                  <button
                    type="submit"
                    className="rounded-lg bg-orange-500 px-3 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-slate-950 hover:bg-orange-400"
                  >
                    {editingCertId ? "Save cert" : "Add cert"}
                  </button>
                </div>
              </form>
            )}

            <div className="space-y-3">
              {certifications.map(({ id, icon: Icon, name, issuer, description, url }) => (
                <div
                  key={id}
                  className="rounded-xl border border-slate-800 bg-slate-950/60 p-3.5 transition-all duration-300"
                >
                  <div className="flex items-start gap-3">
                    <div className="mt-1 flex h-9 w-9 items-center justify-center rounded-lg bg-orange-500/10 text-orange-400">
                      <Icon className="h-4 w-4" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <h3 className="text-sm font-semibold text-white">{name}</h3>
                          <p className="mt-1 text-xs font-medium text-slate-300">{issuer}</p>
                        </div>
                        {canEdit && (
                          <div className="flex gap-2">
                            <button
                              type="button"
                              onClick={() => startEditingCert({ id, icon: Icon, name, issuer, description, url })}
                              className="text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-300 hover:text-orange-300"
                            >
                              Edit
                            </button>
                            <button
                              type="button"
                              onClick={() => setCertifications((current) => current.filter((item) => item.id !== id))}
                              className="text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-300 hover:text-red-400"
                            >
                              Remove
                            </button>
                          </div>
                        )}
                      </div>
                      <p className="mt-2 text-xs leading-5 text-slate-400">{description}</p>
                      {url && (
                        <a
                          href={url}
                          target="_blank"
                          rel="noreferrer"
                          className="mt-2 inline-block text-[10px] font-semibold uppercase tracking-[0.12em] text-orange-300 hover:text-orange-200"
                        >
                          View credential
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-2xl border border-slate-800 bg-slate-900 p-5 transition-all duration-300 hover:border-orange-500/50 sm:p-7">
            <div className="mb-4 flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-orange-500/30 bg-orange-500/10 text-orange-400">
                  <Briefcase className="h-5 w-5" />
                </div>
                <h2 className="text-2xl font-bold text-white">Professional Experience</h2>
              </div>
              {canEdit && (
                <button
                  type="button"
                  onClick={() => {
                    if (showExpForm) {
                      resetExpForm();
                      return;
                    }
                    setShowExpForm(true);
                  }}
                  className="rounded-lg border border-slate-700 bg-slate-950/70 px-3 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-slate-200 transition hover:border-orange-500/50 hover:text-orange-300"
                >
                  {showExpForm ? "Cancel" : "Add exp"}
                </button>
              )}
            </div>

            {showExpForm && canEdit && (
              <form onSubmit={handleExpSubmit} className="mb-4 space-y-3 rounded-xl border border-slate-700 bg-slate-950/60 p-3">
                <div className="grid gap-3 md:grid-cols-2">
                  <input
                    value={expForm.title}
                    onChange={(event) => setExpForm((current) => ({ ...current, title: event.target.value }))}
                    placeholder="Role title"
                    className="rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-white placeholder:text-slate-500 focus:border-orange-500/60 focus:outline-none"
                  />
                  <input
                    value={expForm.company}
                    onChange={(event) => setExpForm((current) => ({ ...current, company: event.target.value }))}
                    placeholder="Company"
                    className="rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-white placeholder:text-slate-500 focus:border-orange-500/60 focus:outline-none"
                  />
                </div>
                <input
                  value={expForm.period}
                  onChange={(event) => setExpForm((current) => ({ ...current, period: event.target.value }))}
                  placeholder="Date range"
                  className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-white placeholder:text-slate-500 focus:border-orange-500/60 focus:outline-none"
                />
                <textarea
                  value={expForm.description}
                  onChange={(event) => setExpForm((current) => ({ ...current, description: event.target.value }))}
                  placeholder="Role description"
                  rows={3}
                  className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-white placeholder:text-slate-500 focus:border-orange-500/60 focus:outline-none"
                />
                <input
                  value={expForm.technologies}
                  onChange={(event) => setExpForm((current) => ({ ...current, technologies: event.target.value }))}
                  placeholder="Technologies (comma separated)"
                  className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-white placeholder:text-slate-500 focus:border-orange-500/60 focus:outline-none"
                />
                <div className="flex justify-end gap-2">
                  <button
                    type="button"
                    onClick={resetExpForm}
                    className="rounded-lg border border-slate-700 px-3 py-2 text-xs font-medium text-slate-300 hover:border-slate-500"
                  >
                    Clear
                  </button>
                  <button
                    type="submit"
                    className="rounded-lg bg-orange-500 px-3 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-slate-950 hover:bg-orange-400"
                  >
                    {editingExpId ? "Save exp" : "Add exp"}
                  </button>
                </div>
              </form>
            )}

            <div className="space-y-4">
              {experience.map((role) => (
                <div key={role.id} className="relative pl-6">
                  <div className="absolute left-0 top-1.5 h-3 w-3 rounded-full bg-orange-500 shadow-[0_0_0_4px_rgba(249,115,22,0.15)]" />
                  <div className="absolute left-[5px] top-6 bottom-[-22px] w-px bg-slate-700 last:hidden" />
                  <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-3.5">
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <h3 className="text-base font-semibold text-white">{role.title}</h3>
                        <p className="mt-1 text-xs font-medium text-orange-400">@ {role.company}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] uppercase tracking-[0.18em] text-slate-400">{role.period}</span>
                        {canEdit && (
                          <>
                            <button
                              type="button"
                              onClick={() => startEditingExp(role)}
                              className="text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-300 hover:text-orange-300"
                            >
                              Edit
                            </button>
                            <button
                              type="button"
                              onClick={() => setExperience((current) => current.filter((item) => item.id !== role.id))}
                              className="text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-300 hover:text-red-400"
                            >
                              Remove
                            </button>
                          </>
                        )}
                      </div>
                    </div>
                    <p className="mt-2 text-xs leading-5 text-slate-300">{role.description}</p>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {role.technologies.map((technology) => (
                        <span
                          key={`${role.id}-${technology}`}
                          className="rounded-full border border-slate-700 bg-slate-900 px-2 py-1 text-[10px] font-medium text-slate-200"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-2xl border border-slate-800 bg-slate-900 p-5 transition-all duration-300 hover:border-orange-500/50 sm:p-7">
            <div className="mb-4 flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-orange-500/30 bg-orange-500/10 text-orange-400">
                  <Code2 className="h-5 w-5" />
                </div>
                <h2 className="text-2xl font-bold text-white">Technical Skills</h2>
              </div>
              {canEdit && (
                <button
                  type="button"
                  onClick={() => {
                    if (showSkillGroupForm) {
                      resetSkillGroupForm();
                      return;
                    }
                    setShowSkillGroupForm(true);
                  }}
                  className="rounded-lg border border-slate-700 bg-slate-950/70 px-3 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-slate-200 transition hover:border-orange-500/50 hover:text-orange-300"
                >
                  {showSkillGroupForm ? "Cancel" : "Add category"}
                </button>
              )}
            </div>

            {showSkillGroupForm && canEdit && (
              <form onSubmit={handleSkillGroupSubmit} className="mb-4 space-y-3 rounded-xl border border-slate-700 bg-slate-950/60 p-3">
                <input
                  value={skillGroupForm.title}
                  onChange={(event) => setSkillGroupForm((current) => ({ ...current, title: event.target.value }))}
                  placeholder="Category title"
                  className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-white placeholder:text-slate-500 focus:border-orange-500/60 focus:outline-none"
                />
                <input
                  value={skillGroupForm.items}
                  onChange={(event) => setSkillGroupForm((current) => ({ ...current, items: event.target.value }))}
                  placeholder="Skills (comma separated)"
                  className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-white placeholder:text-slate-500 focus:border-orange-500/60 focus:outline-none"
                />
                <div className="flex justify-end gap-2">
                  <button
                    type="button"
                    onClick={resetSkillGroupForm}
                    className="rounded-lg border border-slate-700 px-3 py-2 text-xs font-medium text-slate-300 hover:border-slate-500"
                  >
                    Clear
                  </button>
                  <button
                    type="submit"
                    className="rounded-lg bg-orange-500 px-3 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-slate-950 hover:bg-orange-400"
                  >
                    {editingSkillGroupId ? "Save category" : "Add category"}
                  </button>
                </div>
              </form>
            )}

            <div className="space-y-4">
              {skillGroups.map((group) => (
                <div key={group.id}>
                  <div className="mb-2 flex items-center justify-between gap-2">
                    <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-400">
                      {group.title}
                    </h3>
                    {canEdit && (
                      <div className="flex gap-2">
                        <button
                          type="button"
                          onClick={() => {
                            setEditingSkillGroupId(group.id);
                            setSkillGroupForm({
                              title: group.title,
                              items: group.items.join(", "),
                            });
                            setShowSkillGroupForm(true);
                          }}
                          className="text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-300 hover:text-orange-300"
                        >
                          Edit
                        </button>
                        <button
                          type="button"
                          onClick={() => setSkillGroups((current) => current.filter((item) => item.id !== group.id))}
                          className="text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-300 hover:text-red-400"
                        >
                          Remove
                        </button>
                      </div>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {group.items.map((skill) => (
                      <span
                        key={`${group.id}-${skill}`}
                        className="inline-flex items-center gap-1.5 rounded-full border border-slate-700 bg-slate-950/70 px-2.5 py-1.5 text-xs font-medium text-slate-200 transition-all duration-300"
                      >
                        <span>{skill}</span>
                        {canEdit && (
                          <>
                            <button
                              type="button"
                              onClick={() => {
                                setEditingSkillItem({ groupId: group.id, oldValue: skill });
                                setSkillItemForm({ groupId: group.id, value: skill });
                              }}
                              className="text-[10px] uppercase tracking-[0.12em] text-slate-400 hover:text-orange-300"
                            >
                              Edit
                            </button>
                            <button
                              type="button"
                              onClick={() =>
                                setSkillGroups((current) =>
                                  current.map((item) =>
                                    item.id === group.id
                                      ? { ...item, items: item.items.filter((entry) => entry !== skill) }
                                      : item,
                                  ),
                                )
                              }
                              className="text-slate-400 hover:text-red-400"
                              aria-label={`Remove ${skill} from ${group.title}`}
                            >
                              ×
                            </button>
                          </>
                        )}
                      </span>
                    ))}
                  </div>

                  {canEdit && skillItemForm.groupId === group.id && (
                    <div className="mt-3 flex gap-2">
                      <input
                        value={skillItemForm.value}
                        onChange={(event) =>
                          setSkillItemForm((current) => ({ ...current, value: event.target.value }))
                        }
                        placeholder={editingSkillItem ? "Edit skill" : "Add skill"}
                        className="flex-1 rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-white placeholder:text-slate-500 focus:border-orange-500/60 focus:outline-none"
                      />
                      <button
                        type="button"
                        onClick={() => saveSkillItem(group.id)}
                        className="rounded-lg bg-orange-500 px-3 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-slate-950 hover:bg-orange-400"
                      >
                        {editingSkillItem ? "Save" : "Add"}
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          setSkillItemForm({ groupId: "", value: "" });
                          setEditingSkillItem(null);
                        }}
                        className="rounded-lg border border-slate-700 px-3 py-2 text-xs font-medium text-slate-300 hover:border-slate-500"
                      >
                        Cancel
                      </button>
                    </div>
                  )}

                  {canEdit && (
                    <button
                      type="button"
                      onClick={() => {
                        setEditingSkillItem(null);
                        setSkillItemForm({ groupId: group.id, value: "" });
                      }}
                      className="mt-3 text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-300 hover:text-orange-300"
                    >
                      + Add skill
                    </button>
                  )}
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
