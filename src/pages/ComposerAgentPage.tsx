import { Link } from 'react-router-dom';
import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Sparkles, Loader2, ArrowLeft } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { cn } from '../App';

interface Message {
  id: string;
  role: 'user' | 'agent';
  text: string;
}

export default function ComposerAgentPage() {
  const { t, language } = useLanguage();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      role: 'agent',
      text: language === 'en' 
        ? "Hello! I am your AI Music Composer. I'm here to help you compose an Eastern/Arabic song. Let's start! Do you have specific lyrics or a general theme in mind?"
        : "أهلاً بك! أنا وكيلك الموسيقي الذكي الذكي. أنا هنا لأساعدك في تلحين وبناء أغنيتك الشرقية. دعنا نبدأ! هل لديك كلمات معينة أم فكرة عامة تريد التحدث عنها؟"
    }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { id: Date.now().toString(), role: 'user' as const, text: input.trim() };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const response = await fetch('/api/composer', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          history: messages,
          message: userMessage.text
        })
      });

      const data = await response.json();
      
      const agentMessage = {
        id: (Date.now() + 1).toString(),
        role: 'agent' as const,
        text: data.response || (language === 'en' ? "Sorry, something went wrong." : "عذراً، حدث خطأ ما.")
      };

      setMessages(prev => [...prev, agentMessage]);
    } catch (err) {
      console.error(err);
      setMessages(prev => [...prev, {
        id: Date.now().toString(),
        role: 'agent',
        text: language === 'en' ? "Failed to communicate with the server." : "فشل الاتصال بالخادم."
      }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto h-[calc(100vh-10rem)] animate-in fade-in duration-500 flex flex-col">
      
      <div className="mb-6 flex justify-start">
        <Link to="/" className="inline-flex items-center gap-2 text-eastern-text/60 hover:text-eastern-gold transition-colors text-[18px] font-bold uppercase tracking-widest">
          <ArrowLeft className="w-5 h-5 rtl:rotate-180" /> {t('Back', 'عودة')}
        </Link>
      </div>
      <header className="text-center space-y-4 mb-6 shrink-0">
        <div className="inline-flex items-center justify-center p-4 bg-eastern-gold/10 text-eastern-gold rounded-full border border-eastern-gold/20 mb-2">
          <Sparkles className="w-8 h-8" />
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold font-serif tracking-widest text-eastern-text glow-gold uppercase">
          {t('AI Composer Agent', 'وكيل الألحان الذكي')}
        </h1>
        <p className="text-eastern-text/60 font-sans text-[18px] font-bold max-w-2xl mx-auto">
          {t(
             'Chat with our AI composer. It will ask you a few questions and generate a complete musical composition plan for you.',
             'تحدث مع الملحن الذكي. سيقوم بطرح بعض الأسئلة عليك لتكوين تصور موسيقي متكامل لأغنيتك.'
          )}
        </p>
      </header>

      <div className="flex-1 glass rounded-2xl flex flex-col overflow-hidden border-eastern-gold/20 shadow-xl relative">
        <div className="absolute inset-0 bg-black/40 z-0"></div>
        
        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6 relative z-10 font-sans">
          {messages.map((msg) => (
            <div 
              key={msg.id} 
              className={cn(
                "flex gap-4 max-w-[85%]",
                msg.role === 'user' ? "ml-auto flex-row-reverse" : "mr-auto"
              )}
            >
              <div className={cn(
                "w-10 h-10 rounded-full flex items-center justify-center shrink-0 border",
                msg.role === 'user' 
                  ? "bg-eastern-text/10 text-eastern-text border-eastern-text/20" 
                  : "bg-eastern-gold/20 text-eastern-gold border-eastern-gold/40"
              )}>
                {msg.role === 'user' ? <User className="w-5 h-5"/> : <Bot className="w-5 h-5" />}
              </div>
              
              <div className={cn(
                "p-4 rounded-2xl whitespace-pre-wrap leading-relaxed text-[18px] font-bold",
                msg.role === 'user'
                  ? "bg-eastern-text/10 border border-eastern-text/10 text-eastern-text"
                  : "bg-eastern-surface border border-eastern-gold/30 text-eastern-text/90 shadow-[0_0_15px_rgba(212,175,55,0.05)]"
              )}>
                {msg.text}
              </div>
            </div>
          ))}
          {loading && (
             <div className="flex gap-4 max-w-[85%] mr-auto">
                <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 border bg-eastern-gold/20 text-eastern-gold border-eastern-gold/40">
                  <Bot className="w-5 h-5" />
                </div>
                <div className="p-4 rounded-2xl bg-eastern-surface border border-eastern-gold/30 flex items-center">
                   <Loader2 className="w-5 h-5 animate-spin text-eastern-gold" />
                </div>
             </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-4 sm:p-6 bg-eastern-bg/80 border-t border-eastern-gold/20 backdrop-blur-md relative z-10">
          <div className="flex gap-3">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder={t('Type your answer...', 'اكتب إجابتك أو تفاصيل أغنيتك...')}
              className="flex-1 bg-eastern-text/5 border border-eastern-text/10 focus:border-eastern-gold/50 rounded-full px-6 py-3 text-eastern-text outline-none transition-colors font-sans"
              disabled={loading}
            />
            <button 
              onClick={handleSend}
              disabled={!input.trim() || loading}
              className="w-12 h-12 rounded-full bg-eastern-gold hover:bg-[#b0912d] disabled:opacity-50 disabled:hover:bg-eastern-gold flex items-center justify-center text-black transition-colors shrink-0"
            >
              <Send className="w-5 h-5 rtl:mr-1 ltr:ml-1" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
