import { useState, type ReactNode } from 'react';
import { contactSchema, type ContactFormValues } from '../lib/validation';
import { Input } from './ui/input';
import { TextArea } from './ui/textarea';
import { Select } from './ui/select';
import { Checkbox } from './ui/checkbox';
import { Button } from './ui/button';

const defaultValues: ContactFormValues = {
  name: '',
  organization: '',
  email: '',
  phone: '',
  service: 'personal-bodyguard',
  dates: '',
  origin: '',
  destination: '',
  requirements: '',
  preferredContact: 'email',
  confidential: false,
};

type Errors = Partial<Record<keyof ContactFormValues, string>>;

export function ContactForm() {
  const [values, setValues] = useState<ContactFormValues>(defaultValues);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  function update<Value extends keyof ContactFormValues>(key: Value, value: ContactFormValues[Value]) {
    setValues((prev) => ({ ...prev, [key]: value }));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const result = contactSchema.safeParse(values);
    if (!result.success) {
      const nextErrors: Errors = {};
      result.error.issues.forEach((issue) => {
        const field = issue.path[0] as keyof ContactFormValues;
        nextErrors[field] = issue.message;
      });
      setErrors(nextErrors);
      return;
    }

    setErrors({});
    setStatus('submitting');
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setStatus('success');
    setValues(defaultValues);
    setTimeout(() => setStatus('idle'), 4000);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2">
        <Field label="Name" error={errors.name}>
          <Input name="name" value={values.name} onChange={(event) => update('name', event.target.value)} autoComplete="name" />
        </Field>
        <Field label="Organization" error={errors.organization}>
          <Input name="organization" value={values.organization} onChange={(event) => update('organization', event.target.value)} />
        </Field>
        <Field label="Email" error={errors.email}>
          <Input type="email" name="email" value={values.email} onChange={(event) => update('email', event.target.value)} autoComplete="email" />
        </Field>
        <Field label="Phone" error={errors.phone}>
          <Input type="tel" placeholder="+1 202 555 0118" value={values.phone} onChange={(event) => update('phone', event.target.value)} />
        </Field>
        <Field label="Service Interest" error={errors.service}>
          <Select value={values.service} onChange={(event) => update('service', event.target.value)}>
            <option value="personal-bodyguard">Personal Bodyguard</option>
            <option value="executive-protection">Executive Protection</option>
            <option value="secure-transportation">Secure Transportation</option>
            <option value="event-security">Event Security</option>
            <option value="international-protection">International Protection</option>
          </Select>
        </Field>
        <Field label="Dates / Windows" error={errors.dates}>
          <Input name="dates" value={values.dates} onChange={(event) => update('dates', event.target.value)} placeholder="June 4–7" />
        </Field>
        <Field label="Origin" error={errors.origin}>
          <Input value={values.origin} onChange={(event) => update('origin', event.target.value)} placeholder="LHR" />
        </Field>
        <Field label="Destination" error={errors.destination}>
          <Input value={values.destination} onChange={(event) => update('destination', event.target.value)} placeholder="Paris" />
        </Field>
      </div>
      <Field label="Special Requirements" error={errors.requirements}>
        <TextArea rows={4} value={values.requirements} onChange={(event) => update('requirements', event.target.value)} placeholder="Detail principals, convoy needs, or sensitive notes" />
      </Field>
      <div className="grid gap-4 md:grid-cols-2">
        <Field label="Preferred Contact" error={errors.preferredContact}>
          <Select value={values.preferredContact} onChange={(event) => update('preferredContact', event.target.value as ContactFormValues['preferredContact'])}>
            <option value="email">Secure Email</option>
            <option value="phone">Encrypted Phone</option>
            <option value="signal">Signal</option>
          </Select>
        </Field>
        <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
          <Checkbox checked={values.confidential} onChange={(event) => update('confidential', event.target.checked)} />
          <div>
            <p className="text-sm text-brand-ivory">I acknowledge confidential handling.</p>
            {errors.confidential && <p className="text-xs text-red-400">{errors.confidential}</p>}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button type="submit" disabled={status === 'submitting'}>
          {status === 'submitting' ? 'Encrypting...' : 'Send Secure Brief'}
        </Button>
        {status === 'success' && <p className="text-sm text-emerald-300">Request received. OPS will respond via preferred channel.</p>}
      </div>
    </form>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: ReactNode }) {
  return (
    <label className="flex flex-col gap-2 text-sm text-brand-ivory">
      <span className="text-xs uppercase tracking-[0.4em] text-white/40">{label}</span>
      {children}
      {error && <span className="text-xs text-red-400">{error}</span>}
    </label>
  );
}
