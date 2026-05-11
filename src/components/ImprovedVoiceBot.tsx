import { motion, AnimatePresence } from 'motion/react';
import { FormEvent, useEffect, useRef, useState } from 'react';
import { Mic, MicOff, Send, Volume2, VolumeX, X, Minimize2 } from 'lucide-react';
import { aiwanaBotSuggestions, answerAiwanaQuestion } from '../lib/aiwanaKnowledge';

export function ImprovedVoiceBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [response, setResponse] = useState('');
  const [typedQuestion, setTypedQuestion] = useState('');
  const [error, setError] = useState('');
  const recognitionRef = useRef<any>(null);

  useEffect(() => {
    return () => {
      recognitionRef.current?.abort?.();
      if ('speechSynthesis' in window) window.speechSynthesis.cancel();
    };
  }, []);

  const handleAnswer = (text: string) => {
    const botResponse = answerAiwanaQuestion(text);
    setTranscript(text);
    setResponse(botResponse);
    speak(botResponse);
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

  const stopListening = () => {
    recognitionRef.current?.stop?.();
    recognitionRef.current = null;
    setIsListening(false);
  };

  const startListening = () => {
    setError('');
    stopSpeaking();
    
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
      setError('Voice input is not supported in this browser. Type your question below and I will still answer.');
      return;
    }

    const SpeechRecognition = (window as any).webkitSpeechRecognition || (window as any).SpeechRecognition;
    const recognition = new SpeechRecognition();
    recognitionRef.current = recognition;
    recognition.continuous = false;
    recognition.interimResults = true;
    recognition.lang = 'en-IN';
    recognition.maxAlternatives = 1;

    recognition.onstart = () => {
      setIsListening(true);
      setTranscript('Listening...');
      setResponse('');
      setError('');
    };

    recognition.onresult = (event: any) => {
      const results = Array.from(event.results || []) as any[];
      const speechResult = results.map((result) => result?.[0]?.transcript || '').join(' ').trim();
      if (speechResult) setTranscript(speechResult);

      const hasFinal = results.some((result) => result?.isFinal);
      if (!hasFinal) return;

      if (!speechResult) {
        setResponse('I could not hear a clear question. You can try voice again or type your question below.');
        return;
      }
      handleAnswer(speechResult);
    };

    recognition.onerror = (event: any) => {
      setIsListening(false);
      if (event.error === 'no-speech') {
        setTranscript('');
        setResponse('I did not catch any voice. Please tap Start and speak after the listening message, or type your question below.');
        setError('');
      } else if (event.error === 'not-allowed') {
        setError('Microphone access denied. Enable microphone permission or type your question below.');
      } else if (event.error === 'network') {
        setError('Voice recognition network error. Type your question below and I will answer.');
      } else {
        setError('Voice input failed. Please try again or type your question below.');
      }
    };

    recognition.onend = () => {
      setIsListening(false);
      recognitionRef.current = null;
    };

    try {
      recognition.start();
    } catch {
      setIsListening(false);
      setError('Voice input is already starting. Please wait a moment or type below.');
    }
  };

  const submitTypedQuestion = (event: FormEvent) => {
    event.preventDefault();
    if (!typedQuestion.trim()) return;
    const question = typedQuestion.trim();
    setTypedQuestion('');
    setError('');
    handleAnswer(question);
  };

  const handleClose = () => {
    stopListening();
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
            initial={false}
            animate={{ scale: [1, 1.04, 1], opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
            className="fixed bottom-24 right-4 z-[60] sm:bottom-24 sm:right-6"
          >
            <button
              onClick={() => setIsOpen(true)}
              className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-violet-600 via-fuchsia-600 to-sky-500 text-white shadow-2xl shadow-violet-500/30 transition-shadow duration-300 hover:shadow-violet-500/50 sm:h-16 sm:w-16"
              aria-label="Open voice assistant"
            >
              <Mic size={28} />
              
              {/* Tooltip */}
              <div className="absolute right-full mr-3 px-4 py-2 bg-gray-900 text-white text-sm rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                AI Voice Assistant
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
            className="fixed bottom-24 right-4 z-50 max-h-[82vh] w-[92vw] max-w-[420px] overflow-hidden rounded-[1.5rem] bg-white shadow-2xl shadow-violet-950/20 sm:bottom-28 sm:right-6 sm:w-96"
          >
            {/* Header */}
            <div className="flex items-center justify-between bg-gradient-to-r from-violet-700 via-fuchsia-600 to-sky-500 p-4 text-white">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <Mic size={24} />
                </div>
                <div>
                  <h3 className="text-sm font-semibold sm:text-base">Aiwana Voice Bot</h3>
                  <p className="text-xs">Ask about services, products and audit</p>
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
                    stopListening();
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
            <div className="max-h-[calc(82vh-76px)] overflow-y-auto p-6">
              {/* Visualizer */}
              <div className="flex justify-center mb-6">
                <motion.div
                  className={`flex h-24 w-24 items-center justify-center rounded-full ${
                    isListening ? 'bg-gradient-to-r from-violet-600 to-fuchsia-500' : isSpeaking ? 'bg-gradient-to-r from-sky-500 to-violet-500' : 'bg-violet-50'
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
                    <MicOff className="text-violet-500" size={40} />
                  )}
                </motion.div>
              </div>

              {/* Status */}
              <div className="text-center mb-4 min-h-[24px]">
                {isListening && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-sm font-semibold text-violet-600"
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
                  <p className="text-sm text-slate-600">Click the microphone to start</p>
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
                <div className="mb-4 rounded-xl bg-violet-50 p-4">
                  <p className="text-xs text-purple-600 mb-1">You said:</p>
                  <p className="text-sm text-gray-800 break-words">{transcript}</p>
                </div>
              )}

              {/* Response */}
              {response && (
                <div className="mb-4 rounded-xl bg-sky-50 p-4">
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
                  className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-700 to-fuchsia-600 py-3 text-sm text-white disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <Mic size={20} />
                  {isListening ? 'Listening...' : 'Start'}
                </motion.button>
                {isListening && (
                  <motion.button
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={stopListening}
                    className="flex items-center justify-center rounded-xl bg-slate-900 px-4 py-3 text-white"
                  >
                    Stop
                  </motion.button>
                )}
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

              <form onSubmit={submitTypedQuestion} className="mt-4 flex gap-2">
                <input
                  value={typedQuestion}
                  onChange={(event) => setTypedQuestion(event.target.value)}
                  placeholder="Or type your question..."
                  className="min-w-0 flex-1 rounded-xl border border-violet-100 bg-violet-50 px-4 py-3 text-sm text-slate-950 outline-none focus:border-violet-400"
                />
                <button className="rounded-xl bg-violet-600 px-4 text-white" aria-label="Send voice bot text question">
                  <Send size={18} />
                </button>
              </form>

              {/* Tips */}
              <div className="mt-4 rounded-lg bg-violet-50 p-3">
                <p className="text-xs text-violet-900">
                  <strong>Try asking:</strong> {aiwanaBotSuggestions.map((item) => `"${item}"`).join(', ')}
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
            initial={false}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            onClick={() => setIsMinimized(false)}
            className="fixed bottom-24 right-4 z-[60] flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-700 to-fuchsia-600 px-5 py-3 text-white shadow-2xl transition-shadow hover:shadow-violet-500/50 sm:bottom-24 sm:right-6 sm:px-6"
          >
            <Mic size={20} />
            <span className="text-sm">Open Voice</span>
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
