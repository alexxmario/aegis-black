import { useMemo } from 'react';
import yaml from 'yaml';
import teamRaw from '../../data/team.yaml?raw';
import { Badge } from '../../components/ui/badge';
import { usePageMetadata } from '../../lib/seo';

type TeamMember = {
  call_sign: string;
  role: string;
  credentials: string[];
  years_experience: number;
  bio: string;
};

export default function TeamRoute() {
  usePageMetadata({
    title: 'Aegis Black | Protective Team',
    description: 'Meet the anonymized leadership team with call signs, credentials, and years of close protection experience.',
  });

  const team = useMemo(() => yaml.parse(teamRaw) as TeamMember[], [teamRaw]);

  return (
    <section className="space-y-10">
      <header>
        <p className="text-xs uppercase tracking-[0.5em] text-white/40">Team</p>
        <h1 className="mt-4 text-4xl font-serif">Anonymized close protection leadership</h1>
        <p className="mt-4 max-w-3xl text-sm text-white/70">
          Call signs maintain confidentiality until contracts are executed. Each lead is vetted, licensed, and experienced with diplomatic, corporate, and UHNW principals.
        </p>
      </header>
      <div className="grid gap-6 md:grid-cols-2">
        {team.map((member) => (
          <article key={member.call_sign} className="glass-panel rounded-3xl border border-white/10 p-6">
            <div className="flex items-center gap-4">
              <img
                src={`/images/team/${member.call_sign.toLowerCase()}.jpg`}
                alt={member.call_sign}
                className="h-20 w-20 rounded-2xl object-cover"
                loading="lazy"
              />
              <div>
                <p className="text-xs uppercase tracking-[0.5em] text-white/40">Call sign</p>
                <h2 className="text-2xl font-serif text-brand-ivory">{member.call_sign}</h2>
                <p className="text-sm text-white/70">{member.role}</p>
              </div>
            </div>
            <p className="mt-4 text-sm text-white/70">{member.bio}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {member.credentials.map((cred) => (
                <Badge key={cred} variant="outline">
                  {cred}
                </Badge>
              ))}
            </div>
            <p className="mt-4 text-xs uppercase tracking-[0.4em] text-white/50">
              {member.years_experience}+ years experience
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
