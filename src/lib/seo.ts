import { useEffect } from 'react';

type MetaConfig = {
  title: string;
  description: string;
};

export function usePageMetadata({ title, description }: MetaConfig) {
  useEffect(() => {
    document.title = title;

    const descriptionMeta = document.querySelector('meta[name="description"]');
    if (descriptionMeta) {
      descriptionMeta.setAttribute('content', description);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = description;
      document.head.appendChild(meta);
    }

    const ogTitle = ensureMeta('property', 'og:title');
    ogTitle.setAttribute('content', title);

    const ogDescription = ensureMeta('property', 'og:description');
    ogDescription.setAttribute('content', description);

    const ogImage = ensureMeta('property', 'og:image');
    ogImage.setAttribute('content', '/images/og.jpg');

    const twitter = ensureMeta('name', 'twitter:card');
    twitter.setAttribute('content', 'summary_large_image');
  }, [title, description]);
}

function ensureMeta(attr: 'name' | 'property', value: string) {
  const selector = attr === 'name' ? `meta[name="${value}"]` : `meta[property="${value}"]`;
  let meta = document.querySelector(selector);
  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute(attr, value);
    document.head.appendChild(meta);
  }
  return meta;
}
