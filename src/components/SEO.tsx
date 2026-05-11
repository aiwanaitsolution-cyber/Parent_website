import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { site } from '../lib/site';

interface SEOProps {
  title: string;
  description: string;
  type?: 'website' | 'article';
  image?: string;
  schema?: Record<string, unknown>;
}

function upsertMeta(selector: string, attribute: 'name' | 'property', key: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(selector);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
}

function upsertCanonical(href: string) {
  let element = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', 'canonical');
    document.head.appendChild(element);
  }
  element.setAttribute('href', href);
}

function upsertSchema(schema: Record<string, unknown>) {
  const id = 'aiwana-schema';
  let element = document.getElementById(id) as HTMLScriptElement | null;
  if (!element) {
    element = document.createElement('script');
    element.id = id;
    element.type = 'application/ld+json';
    document.head.appendChild(element);
  }
  element.textContent = JSON.stringify(schema);
}

export function SEO({ title, description, type = 'website', image = '/Aiwana-logo.png', schema }: SEOProps) {
  const location = useLocation();

  useEffect(() => {
    const canonical = `${site.baseUrl}${location.pathname}`;
    const fullTitle = title.includes(site.name) ? title : `${title} | ${site.name}`;

    document.title = fullTitle;
    upsertMeta('meta[name="description"]', 'name', 'description', description);
    upsertMeta('meta[property="og:title"]', 'property', 'og:title', fullTitle);
    upsertMeta('meta[property="og:description"]', 'property', 'og:description', description);
    upsertMeta('meta[property="og:type"]', 'property', 'og:type', type);
    upsertMeta('meta[property="og:url"]', 'property', 'og:url', canonical);
    upsertMeta('meta[property="og:image"]', 'property', 'og:image', image);
    upsertMeta('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image');
    upsertMeta('meta[name="twitter:title"]', 'name', 'twitter:title', fullTitle);
    upsertMeta('meta[name="twitter:description"]', 'name', 'twitter:description', description);
    upsertCanonical(canonical);
    upsertSchema(
      schema || {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: site.name,
        email: site.email,
        telephone: site.phone,
        address: site.address,
        areaServed: ['India', 'Noida', 'Uttar Pradesh', 'Delhi NCR'],
        url: site.baseUrl,
      },
    );
  }, [description, image, location.pathname, schema, title, type]);

  return null;
}
