import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { AdvancedFooter } from './components/AdvancedFooter';
import { ImprovedChatBot } from './components/ImprovedChatBot';
import { ImprovedVoiceBot } from './components/ImprovedVoiceBot';
import { ScrollToTop } from './components/ScrollToTop';
import { HomePage } from './pages/HomePage';
import { StartupAboutPage } from './pages/StartupAboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { AIAutomationPage } from './pages/AIAutomationPage';
import { ProductsPage } from './pages/ProductsPage';
import { HRMSPage } from './pages/HRMSPage';
import { ContactPage } from './pages/ContactPage';
import { CareersPage } from './pages/CareersPage';
import { BlogPage } from './pages/BlogPage';
import { BlogArticlePage } from './pages/BlogArticlePage';
import { PrivacyPage } from './pages/PrivacyPage';
import { TermsPage } from './pages/TermsPage';

function Layout() {
  return (
    <div className="min-h-screen bg-white text-slate-950">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<StartupAboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/ai-automation" element={<AIAutomationPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/hrms" element={<HRMSPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogArticlePage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <AdvancedFooter />
      <ImprovedChatBot />
      <ImprovedVoiceBot />
      <ScrollToTop />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}
