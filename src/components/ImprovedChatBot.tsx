import { FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { Bot, MessageCircle, Phone, Send, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { site } from '../lib/site';
import { answerAiwanaQuestion } from '../lib/aiwanaKnowledge';

interface Message {
  sender: 'user' | 'bot';
  text: string;
}

export function ImprovedChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: 'bot',
      text: 'Hi, I am Aiwana assistant. Ask me about Free IT Audit, complete IT handling, websites, CRM or AI automation.',
    },
  ]);

  const send = (event: FormEvent) => {
    event.preventDefault();
    if (!input.trim()) return;
    const userText = input.trim();
    setMessages((current) => [...current, { sender: 'user', text: userText }, { sender: 'bot', text: answerAiwanaQuestion(userText) }]);
    setInput('');
  };

  const whatsappUrl = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent('Hello Aiwana Solution, I want a Free IT Audit.')}`;

  return (
    <>
      <div className="fixed bottom-4 right-4 z-40 flex items-center gap-2 rounded-2xl border border-violet-100 bg-white/90 p-2 shadow-[0_24px_80px_rgba(88,28,135,0.22)] backdrop-blur-xl sm:bottom-6 sm:right-6">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-400 text-slate-950 transition hover:bg-emerald-300"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle size={21} />
        </a>
        <a
          href={site.phoneHref}
          className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-100 text-violet-800 transition hover:bg-violet-200"
          aria-label="Call Aiwana"
        >
          <Phone size={20} />
        </a>
        <button
          onClick={() => setIsOpen(true)}
          className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-r from-violet-600 to-sky-500 text-white transition hover:scale-105"
          aria-label="Open Aiwana assistant"
        >
          <Bot size={21} />
        </button>
        <Link
          to="/contact"
          className="hidden rounded-xl bg-violet-950 px-4 py-3 text-sm font-semibold text-white transition hover:bg-violet-800 sm:block"
        >
          Free Audit
        </Link>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.96 }}
            className="fixed bottom-20 right-4 z-50 flex h-[min(620px,78vh)] w-[calc(100vw-2rem)] max-w-[420px] flex-col overflow-hidden rounded-3xl border border-violet-100 bg-white shadow-[0_24px_90px_rgba(88,28,135,0.25)] sm:right-6"
          >
            <div className="flex items-center justify-between border-b border-violet-100 bg-gradient-to-r from-violet-600 to-sky-500 p-4 text-white">
              <div className="flex items-center gap-3">
                <Bot size={24} />
                <div>
                  <h3 className="font-semibold">Aiwana Assistant</h3>
                  <p className="text-xs">Website, IT and AI guidance</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} aria-label="Close assistant">
                <X size={22} />
              </button>
            </div>
            <div className="flex-1 space-y-3 overflow-y-auto p-4">
              {messages.map((message, index) => (
                <div key={`${message.sender}-${index}`} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[82%] rounded-2xl px-4 py-3 text-sm leading-6 ${message.sender === 'user' ? 'bg-violet-600 text-white' : 'bg-violet-50 text-slate-800'}`}>
                    {message.text}
                  </div>
                </div>
              ))}
            </div>
            <form onSubmit={send} className="flex gap-2 border-t border-violet-100 p-3">
              <input
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder="Ask about Free IT Audit..."
                className="min-w-0 flex-1 rounded-xl border border-violet-100 bg-violet-50 px-4 py-3 text-sm text-slate-950 outline-none focus:border-violet-400"
              />
              <button className="rounded-xl bg-violet-600 px-4 text-white" aria-label="Send message">
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
