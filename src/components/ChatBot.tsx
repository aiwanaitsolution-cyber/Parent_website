import { motion, AnimatePresence } from 'motion/react';
import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: 'Hello! 👋 I\'m your AI assistant. How can I help you today?',
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();

    // Services
    if (lowerMessage.includes('service') || lowerMessage.includes('what do you do')) {
      return 'We offer Custom Software Development, Mobile App Development, Cloud Solutions, AI Automation, Digital Marketing, and SaaS Products (HRM, CRM, ERP). Which service interests you?';
    }

    // AI Automation
    if (lowerMessage.includes('ai') || lowerMessage.includes('automation')) {
      return 'Our AI Automation solutions include AI Calling Agents, Lead Generation Agents, WhatsApp Business AI, and Appointment Booking systems. They work 24/7 and can reduce costs by 70%! Want to know more?';
    }

    // Products
    if (lowerMessage.includes('product') || lowerMessage.includes('hrm') || lowerMessage.includes('crm') || lowerMessage.includes('erp')) {
      return 'We have 3 SaaS products: HRM ($49/mo), CRM ($59/mo), and ERP ($99/mo). All include free onboarding, 24/7 support, and a 14-day free trial. Which one interests you?';
    }

    // Pricing
    if (lowerMessage.includes('price') || lowerMessage.includes('cost') || lowerMessage.includes('pricing')) {
      return 'Our pricing varies by service. HRM starts at $49/mo, CRM at $59/mo, ERP at $99/mo. Custom development projects start at $5,000. Would you like a detailed quote?';
    }

    // Contact
    if (lowerMessage.includes('contact') || lowerMessage.includes('phone') || lowerMessage.includes('email')) {
      return 'You can reach us at:\n📧 Email: shankranandsarswati8@gmail.com\n📞 Phone: +91 6203447902\n📍 Address: SK-64, Sector 112, Noida, UP, India\n\nWould you like to book a meeting?';
    }

    // Greeting
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
      return 'Hello! Welcome to Axcelgro Solution. We specialize in AI automation, custom software, and business solutions. How can I assist you today?';
    }

    // Thank you
    if (lowerMessage.includes('thank') || lowerMessage.includes('thanks')) {
      return 'You\'re welcome! Feel free to ask if you have any other questions. Have a great day! 😊';
    }

    // Demo
    if (lowerMessage.includes('demo') || lowerMessage.includes('trial')) {
      return 'Great! We offer free demos and 14-day trials for all our products. Please share your email or call us at +91 6203447902 to schedule a demo. When would be a good time for you?';
    }

    // Default
    return 'I\'m here to help! You can ask me about our services, AI automation, products (HRM/CRM/ERP), pricing, or how to contact us. What would you like to know?';
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      text: inputMessage,
      sender: 'user',
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);
    setInputMessage('');

    // Simulate bot typing
    setIsTyping(true);
    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 2,
        text: getBotResponse(inputMessage),
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  return (
    <>
      {/* Chat Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 z-40 bg-gradient-to-r from-blue-600 to-purple-600 text-white w-14 h-14 sm:w-16 sm:h-16 rounded-full shadow-2xl flex items-center justify-center hover:shadow-blue-500/50 transition-shadow duration-300"
          >
            <MessageCircle size={28} />
            <motion.div
              className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
            />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            className="fixed bottom-6 right-6 z-50 w-[90vw] sm:w-96 h-[600px] max-h-[80vh] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center overflow-hidden">
                  <img src="/src/image/aiwana-bot.png" alt="Aiwana Bot" className="w-8 h-8 object-contain" />
                </div>
                <div>
                  <h3 className="font-semibold">Axcelgro AI Assistant</h3>
                  <div className="flex items-center gap-2 text-xs">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <span>Online</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="hover:bg-white/20 p-2 rounded-lg transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex items-start gap-2 ${message.sender === 'user' ? 'flex-row-reverse' : ''}`}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 overflow-hidden ${
                      message.sender === 'bot' ? 'bg-blue-600' : 'bg-gray-600'
                    } text-white`}
                  >
                    {message.sender === 'bot' ? (
                      <img src="/src/image/aiwana-bot.png" alt="Aiwana Bot" className="w-6 h-6 object-contain" />
                    ) : (
                      <User size={18} />
                    )}
                  </div>
                  <div
                    className={`max-w-[75%] px-4 py-2 rounded-2xl text-sm ${
                      message.sender === 'bot'
                        ? 'bg-white text-gray-800 shadow-sm'
                        : 'bg-blue-600 text-white'
                    }`}
                  >
                    <p className="whitespace-pre-line">{message.text}</p>
                    <span className={`text-xs mt-1 block ${message.sender === 'bot' ? 'text-gray-500' : 'text-blue-100'}`}>
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                </motion.div>
              ))}

              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex items-center gap-2"
                >
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white overflow-hidden">
                    <img src="/src/image/aiwana-bot.png" alt="Aiwana Bot" className="w-6 h-6 object-contain" />
                  </div>
                  <div className="bg-white px-4 py-3 rounded-2xl shadow-sm">
                    <div className="flex gap-1">
                      <motion.div
                        className="w-2 h-2 bg-gray-400 rounded-full"
                        animate={{ y: [0, -5, 0] }}
                        transition={{ repeat: Infinity, duration: 0.6, delay: 0 }}
                      />
                      <motion.div
                        className="w-2 h-2 bg-gray-400 rounded-full"
                        animate={{ y: [0, -5, 0] }}
                        transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }}
                      />
                      <motion.div
                        className="w-2 h-2 bg-gray-400 rounded-full"
                        animate={{ y: [0, -5, 0] }}
                        transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }}
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form onSubmit={handleSendMessage} className="p-4 bg-white border-t border-gray-200">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-3 rounded-xl hover:shadow-lg transition-shadow"
                >
                  <Send size={20} />
                </motion.button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
