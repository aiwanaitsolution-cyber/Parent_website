import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { AdvancedFooter } from './components/AdvancedFooter';
import { ImprovedChatBot } from './components/ImprovedChatBot';
import { ImprovedVoiceBot } from './components/ImprovedVoiceBot';
import { ImprovedWhatsAppButton } from './components/ImprovedWhatsAppButton';
import { ScrollToTop } from './components/ScrollToTop';
import { HomePage } from './pages/HomePage';
import { StartupAboutPage } from './pages/StartupAboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { AIAutomationPage } from './pages/AIAutomationPage';
import { ProductsPage } from './pages/ProductsPage';
import { ContactPage } from './pages/ContactPage';
import { CareersPage } from './pages/CareersPage';
import { BlogPage } from './pages/BlogPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'about':
        return <StartupAboutPage />;
      case 'services':
        return <ServicesPage />;
      case 'ai-automation':
        return <AIAutomationPage />;
      case 'products':
        return <ProductsPage />;
      case 'contact':
        return <ContactPage />;
      case 'careers':
        return <CareersPage />;
      case 'blog':
        return <BlogPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {renderPage()}
      <AdvancedFooter setCurrentPage={setCurrentPage} />
      
      {/* Floating Action Buttons */}
      <ImprovedChatBot />
      <ImprovedVoiceBot />
      <ImprovedWhatsAppButton />
      <ScrollToTop />
    </div>
  );
}