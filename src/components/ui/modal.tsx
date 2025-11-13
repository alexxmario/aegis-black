import type { ReactNode } from 'react';
import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';
import { Button } from './button';

export type ModalProps = {
  open: boolean;
  title: string;
  onClose: () => void;
  children: ReactNode;
};

export function Modal({ open, title, onClose, children }: ModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleKey(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        onClose();
      }
      if (event.key === 'Tab' && dialogRef.current) {
        const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
          'a[href], button, textarea, input, select, [tabindex]:not([tabindex="-1"])',
        );
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first?.focus();
        }
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last?.focus();
        }
      }
    }

    if (open) {
      const previouslyFocused = document.activeElement as HTMLElement | null;
      const timer = setTimeout(() => dialogRef.current?.focus(), 0);
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleKey);
      return () => {
        clearTimeout(timer);
        document.body.style.overflow = '';
        document.removeEventListener('keydown', handleKey);
        previouslyFocused?.focus();
      };
    }
  }, [open, onClose]);

  if (!open) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 py-8" role="dialog" aria-modal="true">
      <div ref={dialogRef} className="glass-panel relative w-full max-w-3xl rounded-3xl border border-white/10 p-8 outline-none" tabIndex={-1}>
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-brand-gold">Vehicle dossier</p>
            <h3 className="mt-2 text-2xl font-semibold text-brand-ivory">{title}</h3>
          </div>
          <Button aria-label="Close vehicle details" variant="ghost" className="rounded-full p-2" onClick={onClose}>
            <X className="h-5 w-5" />
          </Button>
        </div>
        <div className="mt-6 space-y-6 overflow-y-auto pr-2" style={{ maxHeight: '70vh' }}>
          {children}
        </div>
      </div>
    </div>,
    document.body,
  );
}
