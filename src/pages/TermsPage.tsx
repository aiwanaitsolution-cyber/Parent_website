import { SEO } from '../components/SEO';
import { site } from '../lib/site';

export function TermsPage() {
  return (
    <>
      <SEO
        title="Terms of Service"
        description="Aiwana Solution terms of service for website visitors and business inquiries."
      />
      <section className="bg-slate-950 px-4 pb-20 pt-32 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-slate-300">
          <h1 className="break-words text-3xl font-semibold text-white sm:text-5xl">Terms of Service</h1>
          <p className="mt-6 leading-8">
            This website explains Aiwana Solution services and collects business inquiries. Final scope, timelines and
            commercials are confirmed separately in writing before project work begins.
          </p>
          <h2 className="mt-10 text-2xl font-semibold text-white">No automatic guarantee</h2>
          <p className="mt-3 leading-8">
            Website, SEO and automation outcomes depend on scope, market, content, business readiness and execution.
          </p>
          <h2 className="mt-10 text-2xl font-semibold text-white">Contact</h2>
          <p className="mt-3 leading-8">For service questions, email {site.email}.</p>
        </div>
      </section>
    </>
  );
}
