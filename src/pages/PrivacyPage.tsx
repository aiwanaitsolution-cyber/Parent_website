import { SEO } from '../components/SEO';
import { site } from '../lib/site';

export function PrivacyPage() {
  return (
    <>
      <SEO
        title="Privacy Policy"
        description="Aiwana Solution privacy policy for website visitors, lead forms and business inquiries."
      />
      <section className="bg-slate-950 px-4 pb-20 pt-32 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-slate-300">
          <h1 className="break-words text-3xl font-semibold text-white sm:text-5xl">Privacy Policy</h1>
          <p className="mt-6 leading-8">
            Aiwana Solution collects information you submit through contact, audit, newsletter and consultation forms so
            we can respond to your business inquiry.
          </p>
          <h2 className="mt-10 text-2xl font-semibold text-white">What we collect</h2>
          <p className="mt-3 leading-8">Name, email, phone, company, service interest, message and preferred meeting details.</p>
          <h2 className="mt-10 text-2xl font-semibold text-white">How we use it</h2>
          <p className="mt-3 leading-8">We use submitted details to contact you, plan audits, manage leads and improve our services.</p>
          <h2 className="mt-10 text-2xl font-semibold text-white">Contact</h2>
          <p className="mt-3 leading-8">For privacy questions, email {site.email}.</p>
        </div>
      </section>
    </>
  );
}
