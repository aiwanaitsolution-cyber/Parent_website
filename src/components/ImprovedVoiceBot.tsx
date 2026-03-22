import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { Mic, MicOff, Volume2, VolumeX, X, Minimize2 } from 'lucide-react';

export function ImprovedVoiceBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [response, setResponse] = useState('');
  const [error, setError] = useState('');

  const getVoiceResponse = (text: string): string => {
    const lowerText = text.toLowerCase();

    if (lowerText.includes('service') || lowerText.includes('what do you do')) {
      return 'We offer Custom Software Development, Mobile App Development, Cloud Solutions, AI Automation, and Digital Marketing. We are a startup with expert specialists ready to help your business grow.';
    }

    if (lowerText.includes('ai') || lowerText.includes('automation')) {
      return 'Our AI Automation includes AI Calling Agents, Lead Generation, WhatsApp Business AI, and Appointment Booking. They reduce operational costs significantly and work twenty four seven.';
    }

    if (lowerText.includes('product')) {
      return 'We have three main products. HRM for human resource management at forty nine dollars per month, CRM for customer relationships at fifty nine dollars, and ERP for enterprise planning at ninety nine dollars per month. All include free trials.';
    }

    if (lowerText.includes('contact') || lowerText.includes('phone') || lowerText.includes('email')) {
      return 'You can reach us at email shankranandsarswati8@gmail.com or call us at +91 6203447902. Our office is located at SK-64, Sector 112, Noida, Uttar Pradesh, India.';
    }

    if (lowerText.includes('price') || lowerText.includes('cost')) {
      return 'Our SaaS products start from forty nine dollars per month. Custom development projects vary by scope. We offer flexible payment plans and free consultations.';
    }

    if (lowerText.includes('team') || lowerText.includes('about') || lowerText.includes('startup')) {
      return 'We are a passionate startup based in Noida with expert specialists in AI, software development, and digital marketing. Small team, big impact. We focus on delivering innovative solutions quickly.';
    }

    if (lowerText.includes('hello') || lowerText.includes('hi')) {
      return 'Hello! Welcome to Aiwana Solution. We are a startup specializing in AI automation and custom software development. How can I help you today?';
    }

    return 'I can help you with information about our services, AI automation, products, pricing, our team, and contact details. What would you like to know?';
  };

  const speak = (text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setIsSpeaking(true);
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.9;
      utterance.pitch = 1;
      utterance.volume = 1;
      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => {
        setIsSpeaking(false);
        setError('Speech synthesis failed');
      };
      window.speechSynthesis.speak(utterance);
    } else {
      setError('Speech synthesis not supported in your browser');
    }
  };

  const stopSpeaking = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
  };

  const startListening = () => {
    setError('');
    
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
      setError('Speech recognition not supported. Please use Chrome or Edge browser.');
      return;
    }

    const SpeechRecognition = (window as any).webkitSpeechRecognition || (window as any).SpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = 'en-US';

    recognition.onstart = () => {
      setIsListening(true);
      setTranscript('Listening...');
      setResponse('');
      setError('');
    };

    recognition.onresult = (event: any) => {
      const speechResult = event.results[0][0].transcript;
      setTranscript(speechResult);
      const botResponse = getVoiceResponse(speechResult);
      setResponse(botResponse);
      speak(botResponse);
    };

    recognition.onerror = (event: any) => {
      setIsListening(false);
      if (event.error === 'no-speech') {
        setError('No speech detected. Please try again.');
      } else if (event.error === 'not-allowed') {
        setError('Microphone access denied. Please enable microphone permissions.');
      } else {
        setError('Error occurred. Please try again.');
      }
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognition.start();
  };

  const handleClose = () => {
    stopSpeaking();
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Voice Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            className="fixed bottom-24 right-6 z-40"
          >
            <button
              onClick={() => setIsOpen(true)}
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white w-14 h-14 sm:w-16 sm:h-16 rounded-full shadow-2xl flex items-center justify-center hover:shadow-purple-500/50 transition-shadow duration-300 relative group"
              aria-label="Open voice assistant"
            >
              <Mic size={28} />
              
              {/* Tooltip */}
              <div className="absolute right-full mr-3 px-4 py-2 bg-gray-900 text-white text-sm rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                Voice Assistant
                <div className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 bg-gray-900 rotate-45" />
              </div>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Voice Interface */}
      <AnimatePresence>
        {isOpen && !isMinimized && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed bottom-24 right-6 z-50 w-[90vw] sm:w-96 max-w-[420px] bg-white rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <Mic size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-sm sm:text-base">Voice Assistant</h3>
                  <p className="text-xs">Speak naturally</p>
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setIsMinimized(true)}
                  className="hover:bg-white/20 p-2 rounded-lg transition-colors"
                  aria-label="Minimize"
                >
                  <Minimize2 size={18} />
                </button>
                <button
                  onClick={() => {
                    setIsOpen(false);
                    stopSpeaking();
                  }}
                  className="hover:bg-white/20 p-2 rounded-lg transition-colors"
                  aria-label="Close"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              {/* Visualizer */}
              <div className="flex justify-center mb-6">
                <motion.div
                  className={`w-24 h-24 rounded-full flex items-center justify-center ${
                    isListening ? 'bg-gradient-to-r from-purple-500 to-pink-500' : isSpeaking ? 'bg-gradient-to-r from-blue-500 to-cyan-500' : 'bg-gray-200'
                  }`}
                  animate={
                    isListening || isSpeaking
                      ? {
                          scale: [1, 1.2, 1],
                          boxShadow: [
                            '0 0 0 0 rgba(147, 51, 234, 0.7)',
                            '0 0 0 20px rgba(147, 51, 234, 0)',
                            '0 0 0 0 rgba(147, 51, 234, 0)',
                          ],
                        }
                      : {}
                  }
                  transition={{ repeat: isListening || isSpeaking ? Infinity : 0, duration: 1.5 }}
                >
                  {isListening ? (
                    <Mic className="text-white" size={40} />
                  ) : isSpeaking ? (
                    <Volume2 className="text-white" size={40} />
                  ) : (
                    <MicOff className="text-gray-500" size={40} />
                  )}
                </motion.div>
              </div>

              {/* Status */}
              <div className="text-center mb-4 min-h-[24px]">
                {isListening && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-purple-600 font-semibold text-sm"
                  >
                    Listening... Speak now
                  </motion.p>
                )}
                {isSpeaking && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-blue-600 font-semibold text-sm"
                  >
                    Speaking...
                  </motion.p>
                )}
                {!isListening && !isSpeaking && !error && (
                  <p className="text-gray-600 text-sm">Click the microphone to start</p>
                )}
              </div>

              {/* Error */}
              {error && (
                <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-xl">
                  <p className="text-xs text-red-600">{error}</p>
                </div>
              )}

              {/* Transcript */}
              {transcript && transcript !== 'Listening...' && (
                <div className="mb-4 p-4 bg-purple-50 rounded-xl">
                  <p className="text-xs text-purple-600 mb-1">You said:</p>
                  <p className="text-sm text-gray-800 break-words">{transcript}</p>
                </div>
              )}

              {/* Response */}
              {response && (
                <div className="mb-4 p-4 bg-blue-50 rounded-xl">
                  <p className="text-xs text-blue-600 mb-1">Response:</p>
                  <p className="text-sm text-gray-800 break-words">{response}</p>
                </div>
              )}

              {/* Controls */}
              <div className="flex gap-3">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={startListening}
                  disabled={isListening || isSpeaking}
                  className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-sm"
                >
                  <Mic size={20} />
                  {isListening ? 'Listening...' : 'Start'}
                </motion.button>
                {isSpeaking && (
                  <motion.button
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={stopSpeaking}
                    className="px-4 bg-red-500 text-white py-3 rounded-xl flex items-center justify-center"
                  >
                    <VolumeX size={20} />
                  </motion.button>
                )}
              </div>

              {/* Tips */}
              <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                <p className="text-xs text-blue-800">
                  <strong>Try asking:</strong> "What services do you offer?", "Tell me about AI automation", "What are your products?", "How can I contact you?", "Tell me about your team"
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Minimized State */}
      <AnimatePresence>
        {isOpen && isMinimized && (
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            onClick={() => setIsMinimized(false)}
            className="fixed bottom-24 right-6 z-50 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full shadow-2xl hover:shadow-purple-500/50 transition-shadow flex items-center gap-2"
          >
            <Mic size={20} />
            <span className="text-sm">Open Voice</span>
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}