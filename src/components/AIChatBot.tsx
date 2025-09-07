'use client'
import { useState, useEffect, useRef } from 'react'
import { useLanguage } from '../context/LanguageContext'

interface Message {
  text: string
  sender: 'user' | 'bot'
  timestamp: Date
}

export default function AIChatBot() {
  const { isKashmiri } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      text: isKashmiri 
        ? 'سلام! میٚ تقدس کا AI اسسٹنٹ چھُس۔ کیا پُچھنہ چاہان چھِو؟' 
        : 'Hi! I\'m Taqaddus\'s AI assistant trained on his resume. Ask me anything!',
      sender: 'bot',
      timestamp: new Date()
    }
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Auto scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  // Function to clean markdown formatting from AI responses
  const cleanMarkdownText = (text: string): string => {
    return text
      .replace(/\*\*(.*?)\*\*/g, '$1') // Remove **bold**
      .replace(/\*(.*?)\*/g, '$1')     // Remove *italic*
      .replace(/__(.*?)__/g, '$1')     // Remove __underline__
      .replace(/`(.*?)`/g, '$1')       // Remove `code`
      .replace(/~~(.*?)~~/g, '$1')     // Remove ~~strikethrough~~
      .replace(/#{1,6}\s/g, '')        // Remove # headers
      .replace(/^\s*[-*+]\s/gm, '• ')  // Convert markdown lists to bullet points
      .replace(/^\s*\d+\.\s/gm, '• ')  // Convert numbered lists to bullet points
      .trim()
  }

  // Enhanced fallback responses
  const fallbackResponses = {
    about: {
      en: 'Taqaddus Shafi is a versatile developer from Srinagar, Kashmir, specializing in Full Stack Development, Mobile Apps, and Cybersecurity. He is a B.Tech CSE graduate (8.26 CGPA) currently pursuing M.Tech.',
      ks: 'تقدس شافی سرینگر، کشمیر کا ایک ورسٹائل ڈیولپر ہے جو فُل سٹیک، موبائل ایپس اور سائبر سیکیورٹی میں مہارت رکھتا ہے۔'
    },
    experience: {
      en: 'Taqaddus has worked as a Freelance Full-Stack Developer (2023-Present), completed cybersecurity internships at TCS and Deloitte, and worked as an Android Developer Intern at Omninos Technologies.',
      ks: 'تقدس نے فری لانس فُل سٹیک ڈیولپر (2023-اب تک)، TCS اور Deloitte میں سائبر سیکیورٹی انٹرنشپ، اور Omninos میں اینڈروئد ڈیولپر کا کام کیا ہے۔'
    },
    education: {
      en: 'Taqaddus completed B.Tech in Computer Science from Lovely Professional University with 8.26 CGPA (2020-2024). He is currently pursuing M.Tech at Central University of Kashmir (2024-2026).',
      ks: 'تقدس نے لولی پروفیشنل یونیورسٹی سے کمپیوٹر سائنس میں B.Tech 8.26 CGPA کے ساتھ مکمل کیا اور اب Central University of Kashmir میں M.Tech کر رہا ہے۔'
    },
    skills: {
      en: 'He specializes in Full Stack Development (React, Node.js, Express), Mobile Apps (React Native, Flutter, Kotlin, Swift), and Cybersecurity (Penetration Testing, Burp Suite, OWASP). He has solved 500+ coding problems!',
      ks: 'وہ فُل سٹیک ڈیولپمنٹ (React، Node.js)، موبائل ایپس (React Native، Flutter)، اور سائبر سیکیورٹی میں ماہر ہے۔ 500+ کوڈنگ مسائل حل کیے ہیں!'
    },
    projects: {
      en: 'Key projects include AI Cyber Summarizer (Python/NLP), CVE Severity Predictor (Streamlit/ML), ZTTM Threat Mapper (Rust), Real-time Chat Applications (Node.js/Socket.IO), and various mobile apps.',
      ks: 'اہم پروجیکٹس میں AI Cyber Summarizer (Python/NLP)، CVE Severity Predictor (ML)، ZTTM Threat Mapper (Rust)، اور مختلف موبائل ایپس شامل ہیں۔'
    },
    achievements: {
      en: '3-Star CodeChef coder (Top 10% globally), solved 500+ problems on LeetCode & GeeksforGeeks, Google Cybersecurity Certificate, completed TCS and Deloitte virtual internships.',
      ks: 'CodeChef میں 3-Star (عالمی سطح پر ٹاپ 10%)، 500+ مسائل حل کیے، Google Cybersecurity Certificate، TCS اور Deloitte ورچوئل انٹرنشپس مکمل کیں۔'
    },
    contact: {
      en: 'You can reach him at [taqaddusabc@gmail.com](mailto:taqaddusabc@gmail.com) or +91-7780845956. He is from Srinagar, Kashmir and available for freelance work!',
      ks: 'آپ اسے [taqaddusabc@gmail.com](mailto:taqaddusabc@gmail.com) یا +91-7780845956 پر رابطہ کر سکتے ہیں۔ وہ سرینگر، کشمیر سے ہے اور فری لانس کام کے لیے دستیاب ہے!'
    }
  }

  // Enhanced keyword matching function
  const getFallbackResponse = (question: string): string => {
    const q = question.trim().toLowerCase()
    
    const keywords = {
      about: ['about', 'tell me', 'who is', 'introduction', 'taqaddus', 'who', 'describe', 'summary'],
      experience: ['experience', 'work', 'job', 'internship', 'career', 'professional', 'employment', 'worked', 'companies'],
      education: ['education', 'degree', 'university', 'study', 'college', 'academic', 'cgpa', 'graduate', 'school', 'qualification'],
      skills: ['skill', 'technology', 'programming', 'coding', 'technical', 'tech', 'development', 'languages', 'expertise', 'proficient'],
      projects: ['project', 'app', 'application', 'built', 'developed', 'created', 'portfolio', 'build', 'made', 'software'],
      achievements: ['achievement', 'award', 'certificate', 'codechef', 'leetcode', 'accomplishment', 'success', 'rating', 'problems', 'solved'],
      contact: ['contact', 'email', 'phone', 'reach', 'call', 'message', 'connect', 'touch', 'hire', 'freelance']
    }
    
    for (const [category, words] of Object.entries(keywords)) {
      if (words.some(keyword => q.includes(keyword))) {
        const response = fallbackResponses[category as keyof typeof fallbackResponses]
        return cleanMarkdownText(isKashmiri ? response.ks : response.en)
      }
    }
    
    if (['hello', 'hi', 'hey', 'greetings', 'salaam', 'assalam'].some(keyword => q.includes(keyword))) {
      return isKashmiri 
        ? 'سلام! میٚ تقدس کا AI اسسٹنٹ چھُس۔ آپ کیا جاننا چاہتے ہیں؟ آپ تعلیم، تجربہ، مہارت، پروجیکٹس یا رابطہ کے بارے میں پوچھ سکتے ہیں۔' 
        : 'Hello! I\'m here to tell you about Taqaddus. What would you like to know? You can ask about his education, experience, skills, projects, or contact information.'
    }
    
    return isKashmiri 
      ? 'معذرت، میں یہ سمجھ نہیں سکا۔ آپ مندرجہ ذیل کے بارے میں پوچھ سکتے ہیں:\n• تعلیم اور ڈگری\n• کام کا تجربہ\n• تکنیکی مہارتیں\n• پروجیکٹس\n• کامیابیاں\n• رابطہ کی معلومات'
      : 'I didn\'t quite understand that. You can ask me about:\n• Education and degrees\n• Work experience\n• Technical skills\n• Projects\n• Achievements\n• Contact information'
  }

  const handleSend = async () => {
    if (!input.trim()) return
    
    const userMessage: Message = {
      text: input,
      sender: 'user',
      timestamp: new Date()
    }
    
    setMessages(prev => [...prev, userMessage])
    const currentInput = input
    setInput('')
    setIsLoading(true)

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          message: currentInput,
          language: isKashmiri ? 'kashmiri' : 'english'
        })
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'API request failed')
      }
      
      // Clean the AI response before displaying
      const botMessage: Message = {
        text: cleanMarkdownText(data.response),
        sender: 'bot',
        timestamp: new Date()
      }
      
      setMessages(prev => [...prev, botMessage])

    } catch (error) {
      console.error('Chat error:', error)
      
      const fallbackMessage: Message = {
        text: getFallbackResponse(currentInput),
        sender: 'bot',
        timestamp: new Date()
      }
      
      setMessages(prev => [...prev, fallbackMessage])
    }
    
    setIsLoading(false)
  }

  return (
    <div className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50">
      {/* ✅ Kashmir-themed Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group w-14 sm:w-16 h-14 sm:h-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl sm:rounded-full flex items-center justify-center text-white text-xl sm:text-2xl shadow-2xl hover:scale-110 transition-all duration-300 relative animate-gentle-pulse border-2 border-white"
        aria-label={isKashmiri ? 'AI چیٹ بوٹ کھولیں' : 'Open AI Chat Assistant'}
      >
        <div className="transition-all duration-300 group-hover:scale-110">
          {isOpen ? '✕' : '🤖'}
        </div>
        <div className="absolute -top-2 -right-2 w-5 sm:w-6 h-5 sm:h-6 bg-green-500 rounded-full flex items-center justify-center text-xs font-bold text-white animate-pulse border-2 border-white">
          AI
        </div>
      </button>

      {/* ✅ Kashmir-themed Chat Window */}
      {isOpen && (
        <div 
          className="absolute bottom-16 sm:bottom-20 right-0 bg-white rounded-2xl sm:rounded-3xl shadow-2xl border-2 border-gray-300 flex flex-col overflow-hidden animate-scale-in"
          style={{
            width: 'min(450px, 90vw)',
            height: 'min(650px, 80vh)',
            maxHeight: '80vh'
          }}
        >
          {/* ✅ High Contrast Header */}
          <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white p-4 sm:p-5 flex items-center gap-3 sm:gap-4 border-b-2 border-green-500">
            <div className="w-10 sm:w-12 h-10 sm:h-12 bg-white/20 rounded-full flex items-center justify-center text-lg sm:text-xl animate-gentle-pulse border-2 border-white/30">
              🤖
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-bold text-lg sm:text-xl truncate">
                {isKashmiri ? 'تقدس AI اسسٹنٹ' : 'Taqaddus AI Assistant'}
              </h3>
              <div className="text-xs sm:text-sm text-white/90 flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="truncate">{isKashmiri ? 'آن لائن - جیمینی پاورڈ' : 'Online - Gemini Powered'}</span>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-200 text-lg border border-white/30"
              aria-label={isKashmiri ? 'بند کریں' : 'Close chat'}
            >
              ✕
            </button>
          </div>

          {/* ✅ High Contrast Messages Area */}
          <div className="flex-1 overflow-y-auto p-3 sm:p-5 space-y-3 sm:space-y-4 bg-gradient-to-b from-gray-50 to-white" id="chat-messages">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`p-3 sm:p-4 rounded-2xl shadow-lg transition-all duration-200 hover:shadow-xl max-w-[85%] sm:max-w-sm ${
                    message.sender === 'user'
                      ? 'bg-gradient-to-r from-green-600 to-blue-600 text-white border-2 border-green-500'
                      : 'bg-white text-gray-800 border-2 border-gray-200'
                  }`}
                >
                  <p className="text-sm sm:text-base leading-relaxed whitespace-pre-line break-words font-medium">
                    {message.text}
                  </p>
                  <p className={`text-xs mt-2 ${message.sender === 'user' ? 'text-white/80' : 'text-gray-500'}`}>
                    {message.timestamp.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                  </p>
                </div>
              </div>
            ))}
            
            {/* ✅ Kashmir-themed Loading Indicator */}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white p-3 sm:p-4 rounded-2xl shadow-lg border-2 border-gray-200">
                  <div className="flex items-center space-x-3">
                    <div className="text-sm sm:text-base text-green-600 font-medium">AI thinking</div>
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-teal-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* ✅ High Contrast Input Area */}
          <div className="p-3 sm:p-5 border-t-2 border-gray-200 bg-gradient-to-r from-green-50 to-blue-50">
            <div className="flex gap-2 sm:gap-3 items-end">
              <div className="flex-1">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && !isLoading && handleSend()}
                  placeholder={isKashmiri ? 'تقدس کے بارے میں کچھ پوچھیں...' : 'Ask me anything about Taqaddus...'}
                  className="w-full px-4 sm:px-6 py-3 sm:py-4 border-2 border-gray-300 rounded-2xl focus:outline-none focus:ring-4 focus:ring-green-200 focus:border-green-500 text-sm sm:text-base bg-white shadow-sm font-medium text-gray-800 placeholder-gray-500"
                  disabled={isLoading}
                />
              </div>
              <button
                onClick={handleSend}
                disabled={!input.trim() || isLoading}
                className="w-12 sm:w-14 h-12 sm:h-14 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-2xl flex items-center justify-center hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg text-lg sm:text-xl border-2 border-green-500 disabled:border-gray-300"
                aria-label={isKashmiri ? 'بھیجیں' : 'Send message'}
              >
                {isLoading ? (
                  <div className="animate-spin rounded-full h-4 sm:h-5 w-4 sm:w-5 border-b-2 border-white"></div>
                ) : (
                  '🚀'
                )}
              </button>
            </div>
            
            {/* ✅ High Contrast Footer Text */}
            <p className="text-xs sm:text-sm text-gray-600 mt-3 text-center font-medium">
              {isKashmiri ? '🔒 محفوظ اور نجی • جیمینی AI سے چلایا جاتا ہے' : '🔒 Secure & Private • Powered by Gemini AI'}
            </p>
            
            {/* ✅ Quick Suggestion Chips */}
            <div className="flex flex-wrap gap-2 mt-3 justify-center">
              {[
                { text: isKashmiri ? 'تجربہ' : 'Experience', query: 'experience' },
                { text: isKashmiri ? 'مہارتیں' : 'Skills', query: 'skills' },
                { text: isKashmiri ? 'پروجیکٹس' : 'Projects', query: 'projects' },
                { text: isKashmiri ? 'رابطہ' : 'Contact', query: 'contact' }
              ].map((suggestion, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setInput(suggestion.query)
                    setTimeout(() => handleSend(), 100)
                  }}
                  disabled={isLoading}
                  className="px-3 py-1 bg-white border border-gray-300 rounded-full text-xs font-medium text-gray-700 hover:bg-gray-50 hover:border-green-300 transition-all duration-200 disabled:opacity-50 hover:scale-105"
                >
                  {suggestion.text}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ✅ Styles for animations */}
      <style jsx>{`
        .animate-gentle-pulse {
          animation: gentle-pulse 2s ease-in-out infinite;
        }
        
        @keyframes gentle-pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        
        .animate-scale-in {
          animation: scale-in 0.3s ease-out;
        }
        
        @keyframes scale-in {
          0% { transform: scale(0.9); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
        
        /* Custom scrollbar for chat messages */
        #chat-messages::-webkit-scrollbar {
          width: 4px;
        }
        
        #chat-messages::-webkit-scrollbar-track {
          background: #f1f5f9;
          border-radius: 4px;
        }
        
        #chat-messages::-webkit-scrollbar-thumb {
          background: linear-gradient(135deg, #16a34a, #2563eb);
          border-radius: 4px;
        }
        
        #chat-messages::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(135deg, #15803d, #1d4ed8);
        }
      `}</style>
    </div>
  )
}
