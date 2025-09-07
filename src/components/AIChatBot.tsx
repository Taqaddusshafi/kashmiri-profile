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
      en: 'You can reach him at taqaddusabc@gmail.com or +91-7780845956. He is from Srinagar, Kashmir and available for freelance work!',
      ks: 'آپ اسے taqaddusabc@gmail.com یا +91-7780845956 پر رابطہ کر سکتے ہیں۔ وہ سرینگر، کشمیر سے ہے اور فری لانس کام کے لیے دستیاب ہے!'
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
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full flex items-center justify-center text-white text-2xl shadow-2xl hover:scale-110 transition-all duration-300 relative animate-pulse-glow"
      >
        {isOpen ? '✕' : '🤖'}
        <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-400 rounded-full flex items-center justify-center text-xs font-bold text-white animate-pulse">
          AI
        </div>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div 
          className="absolute bottom-20 right-0 bg-white rounded-3xl shadow-2xl border border-purple-200 flex flex-col overflow-hidden animate-scale-in"
          style={{
            width: '480px',
            height: '700px',
            maxHeight: '80vh',
            maxWidth: '90vw'
          }}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white p-5 flex items-center gap-4">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-xl animate-pulse">
              🤖
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-xl">
                {isKashmiri ? 'تقدس AI اسسٹنٹ' : 'Taqaddus AI Assistant'}
              </h3>
              {/* ✅ FIXED: Changed <p> to <div> to fix hydration error */}
              <div className="text-sm opacity-90 flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>{isKashmiri ? 'آن لائن - جیمینی 2.0 فلیش پاورڈ' : 'Online - Powered by Gemini 2.0 Flash'}</span>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-200 text-lg"
            >
              ✕
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4 bg-gradient-to-b from-gray-50 to-white" id="chat-messages">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`p-4 rounded-3xl shadow-lg transition-all duration-200 hover:shadow-xl ${
                    message.sender === 'user'
                      ? 'bg-gradient-to-r from-purple-500 to-cyan-500 text-white max-w-sm'
                      : 'bg-white text-gray-800 border border-gray-100 max-w-md'
                  }`}
                >
                  <p className="text-base leading-relaxed whitespace-pre-line break-words">
                    {message.text}
                  </p>
                  <p className="text-xs opacity-60 mt-2">
                    {message.timestamp.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                  </p>
                </div>
              </div>
            ))}
            
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white p-4 rounded-3xl shadow-lg border border-gray-100">
                  <div className="flex items-center space-x-3">
                    <div className="text-base text-purple-600 font-medium">AI thinking</div>
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-5 border-t bg-gradient-to-r from-gray-50 to-blue-50">
            <div className="flex gap-3">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && !isLoading && handleSend()}
                placeholder={isKashmiri ? 'تقدس کے بارے میں کچھ پوچھیں...' : 'Ask me anything about Taqaddus...'}
                className="flex-1 px-6 py-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-base bg-white shadow-sm resize-none"
                disabled={isLoading}
                style={{ minHeight: '56px' }}
              />
              <button
                onClick={handleSend}
                disabled={!input.trim() || isLoading}
                className="w-14 h-14 bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded-full flex items-center justify-center hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg text-xl"
              >
                {isLoading ? (
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                ) : (
                  '🚀'
                )}
              </button>
            </div>
            <p className="text-sm text-gray-500 mt-3 text-center">
              {isKashmiri ? 'محفوظ اور نجی • جیمینی 2.0 فلیش AI سے چلایا جاتا ہے' : 'Secure & Private • Powered by Gemini 2.0 Flash AI'}
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
