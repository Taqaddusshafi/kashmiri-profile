'use client'
import { useState } from 'react'
import { useLanguage } from '../context/LanguageContext'

interface Message {
  text: string
  sender: 'user' | 'bot'
  timestamp: Date
}

export default function ChatBot() {
  const { isKashmiri } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      text: isKashmiri ? 'سلام! میٚ تقدس کا ذاتی چیٹ بوٹ چھُس۔ کیا پُچھنہ چاہان چھِو؟' : 'Hi! I\'m Taqaddus\'s personal chatbot. What would you like to know about him?',
      sender: 'bot',
      timestamp: new Date()
    }
  ])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)

  // Knowledge base about you
  const responses = {
    education: {
      en: 'Taqaddus completed B.Tech in Computer Science from Lovely Professional University with 8.26 CGPA. He\'s currently pursuing M.Tech at Central University of Kashmir.',
      ks: 'تقدس نے لولی پروفیشنل یونیورسٹی سے کمپیوٹر سائنس میں B.Tech 8.26 CGPA کے ساتھ مکمل کیا۔'
    },
    skills: {
      en: 'He specializes in Full Stack Development (React, Node.js), Mobile Apps (React Native, Flutter), and Cybersecurity (Penetration Testing, OWASP). He\'s solved 500+ coding problems!',
      ks: 'وہ فُل سٹیک ڈیولپمنٹ، موبائل ایپس، اور سائبر سیکیورٹی میں ماہر ہے۔ 500+ کوڈنگ مسائل حل کیے ہیں!'
    },
    experience: {
      en: 'He\'s worked as a freelance developer, completed internships at TCS (Cybersecurity), Deloitte, and Omninos Technologies. Also worked on real-time chat applications.',
      ks: 'فری لانس ڈیولپر کے طور پر کام کیا، TCS، Deloitte اور Omninos میں انٹرنشپ مکمل کی۔'
    },
    projects: {
      en: 'Notable projects include AI Cyber Summarizer (Python/NLP), CVE Severity Predictor (Streamlit), ZTTM Threat Mapper (Rust), and various mobile apps.',
      ks: 'اہم پروجیکٹس میں AI Cyber Summarizer، CVE Severity Predictor، اور مختلف موبائل ایپس شامل ہیں۔'
    },
    contact: {
      en: 'You can reach him at taqaddusabc@gmail.com or +91-7780845956. He\'s from Srinagar, Kashmir and available for freelance work!',
      ks: 'آپ اسے taqaddusabc@gmail.com یا +91-7780845956 پر رابطہ کر سکتے ہیں۔ وہ سرینگر، کشمیر سے ہے۔'
    },
    achievements: {
      en: '3-Star CodeChef coder (Top 10% globally), solved 500+ problems on LeetCode & GeeksforGeeks, Google Cybersecurity Certificate, and multiple virtual internships.',
      ks: 'CodeChef میں 3-Star، 500+ مسائل حل کیے، Google Cybersecurity Certificate، اور متعدد ورچوئل انٹرنشپس۔'
    },
    location: {
      en: 'He\'s from the beautiful valley of Srinagar, Kashmir, India - often called "Paradise on Earth"!',
      ks: 'وہ کشمیر کی خوبصورت وادی سرینگر سے ہے - جسے "زمین پر جنت" کہا جاتا ہے!'
    }
  }

  const getResponse = (question: string): string => {
    const q = question.toLowerCase()
    
    if (q.includes('education') || q.includes('degree') || q.includes('university') || q.includes('study')) {
      return isKashmiri ? responses.education.ks : responses.education.en
    }
    if (q.includes('skill') || q.includes('technology') || q.includes('programming') || q.includes('coding')) {
      return isKashmiri ? responses.skills.ks : responses.skills.en
    }
    if (q.includes('experience') || q.includes('work') || q.includes('job') || q.includes('internship')) {
      return isKashmiri ? responses.experience.ks : responses.experience.en
    }
    if (q.includes('project') || q.includes('app') || q.includes('development') || q.includes('built')) {
      return isKashmiri ? responses.projects.ks : responses.projects.en
    }
    if (q.includes('contact') || q.includes('email') || q.includes('phone') || q.includes('reach')) {
      return isKashmiri ? responses.contact.ks : responses.contact.en
    }
    if (q.includes('achievement') || q.includes('award') || q.includes('certificate') || q.includes('codechef')) {
      return isKashmiri ? responses.achievements.ks : responses.achievements.en
    }
    if (q.includes('location') || q.includes('kashmir') || q.includes('srinagar') || q.includes('from')) {
      return isKashmiri ? responses.location.ks : responses.location.en
    }
    if (q.includes('hello') || q.includes('hi') || q.includes('hey')) {
      return isKashmiri ? 'سلام! میٚ تقدس کا AI اسسٹنٹ چھُس۔ آپ کیا جاننا چاہتے ہیں؟' : 'Hello! I\'m here to tell you about Taqaddus. What would you like to know?'
    }
    
    return isKashmiri 
      ? 'معذرت، میں یہ سمجھ نہیں سکا۔ آپ تعلیم، مہارت، تجربہ، یا پروجیکٹس کے بارے میں پوچھ سکتے ہیں۔'
      : 'I didn\'t quite understand that. You can ask me about his education, skills, experience, projects, contact info, or achievements!'
  }

  const handleSend = () => {
    if (!input.trim()) return
    
    const userMessage: Message = {
      text: input,
      sender: 'user',
      timestamp: new Date()
    }
    
    setMessages(prev => [...prev, userMessage])
    setInput('')
    setIsTyping(true)
    
    // Simulate typing delay
    setTimeout(() => {
      const botResponse: Message = {
        text: getResponse(input),
        sender: 'bot',
        timestamp: new Date()
      }
      setMessages(prev => [...prev, botResponse])
      setIsTyping(false)
    }, 1500)
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full flex items-center justify-center text-white text-2xl shadow-2xl hover:scale-110 transition-all duration-300 animate-pulse-glow"
      >
        {isOpen ? '✕' : '💬'}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-80 h-96 bg-white rounded-2xl shadow-2xl border border-purple-200 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white p-4 flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-lg">
              🤖
            </div>
            <div>
              <h3 className="font-bold">
                {isKashmiri ? 'تقدس AI' : 'Taqaddus AI'}
              </h3>
              <p className="text-xs opacity-80">
                {isKashmiri ? 'آن لائن' : 'Online'}
              </p>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs p-3 rounded-2xl ${
                    message.sender === 'user'
                      ? 'bg-gradient-to-r from-purple-500 to-cyan-500 text-white'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-100 p-3 rounded-2xl">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-4 border-t">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder={isKashmiri ? 'کیا پُچھنہ چاہان چھِو؟' : 'Ask me anything about Taqaddus...'}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
              />
              <button
                onClick={handleSend}
                disabled={!input.trim()}
                className="w-10 h-10 bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded-full flex items-center justify-center hover:scale-105 transition-all duration-200 disabled:opacity-50"
              >
                📤
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
