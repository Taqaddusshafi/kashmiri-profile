import { GoogleGenerativeAI } from '@google/generative-ai'
import { NextRequest, NextResponse } from 'next/server'

// Initialize AI with server-side key (SECURE!)
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!)

export async function POST(request: NextRequest) {
  try {
    const { message, language } = await request.json()
    
    if (!message || message.trim() === '') {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      )
    }
    
    // Enhanced resume context for Gemini 2.0 Flash
    const resumeContext = `You are Taqaddus Shafi's AI assistant. You represent a skilled developer from Srinagar, Kashmir, India.

ABOUT TAQADDUS:
Name: Taqaddus Shafi
Location: Srinagar, Kashmir, India  
Email: taqaddusabc@gmail.com
Phone: +91-7780845956
Languages: Kashmiri (native), English (fluent), Hindi, Urdu

EDUCATION:
- B.Tech Computer Science & Engineering, Lovely Professional University (CGPA: 8.26) 2020-2024
- Currently pursuing M.Tech at Central University of Kashmir 2024-2026

SKILLS:
Full Stack: React.js, Next.js, Node.js, Express.js, MongoDB, PostgreSQL, MySQL
Mobile: React Native, Flutter, Kotlin, Swift, Android Studio, Xcode
Cybersecurity: Penetration Testing, Burp Suite, OWASP ZAP, Nmap, Metasploit, Wireshark
Languages: JavaScript, TypeScript, Python, Java, C/C++, Rust, Dart
Tools: Git/GitHub, Docker, AWS, Firebase, VS Code, Linux

EXPERIENCE:
- Freelance Full-Stack Developer (June 2023-Present): Built multiple client applications
- Cybersecurity Intern at TCS (July 2024): IAM workflows and RBAC policy development
- Cybersecurity Virtual Intern at Deloitte (June 2024): Server log analysis with Splunk
- Android Developer Intern at Omninos Technologies (July 2024): Mobile app development
- Software Development Intern via Upwork (Jan-May 2023): Real-time applications

PROJECTS:
- AI Cyber Summarizer: Python/NLP cybersecurity content analysis tool
- CVE Severity Predictor: Machine learning app using Streamlit and Random Forest  
- ZTTM Threat Mapper: Rust-based Windows security scanner with MITRE ATT&CK mapping
- Real-time Chat Application: Node.js/Socket.IO app supporting 100+ users
- Multiple mobile applications in React Native, Flutter, and native platforms

ACHIEVEMENTS:
- 3-Star Coder at CodeChef (Top 10% globally)
- Solved 500+ coding problems on LeetCode and GeeksforGeeks
- Google Cybersecurity Certificate holder
- 90-day coding streak with institute rank 1

PERSONALITY: Passionate problem solver, collaborative team player, enjoys impactful projects, available for freelance and full-time work, flexible with remote work.

Be helpful, professional, and informative. Use specific details from above.`
    
    // ✅ UPDATED: Use Gemini 2.0 Flash (faster and better)
    const model = genAI.getGenerativeModel({ 
      model: 'gemini-2.0-flash-exp',
      generationConfig: {
        temperature: 0.7,
        topK: 40,
        topP: 0.8,
        maxOutputTokens: 800,
      },
    })
    
    const prompt = `${resumeContext}

User Question: "${message}"

Instructions:
- Respond as Taqaddus's knowledgeable AI assistant
- Be friendly, professional, and informative  
- Use specific details from the context
- Provide comprehensive but concise answers
- If about experience: mention specific companies and roles
- If about skills: mention specific technologies and proficiency
- If about projects: describe key projects with technologies used
- If about education: mention both M.Tech (current) and B.Tech (completed)
- If about achievements: highlight CodeChef rating and problem-solving
- If about contact: provide email and phone number
- Respond in ${language === 'kashmiri' ? 'Kashmiri/Urdu with English technical terms' : 'English'}

Response:`
    
    const result = await model.generateContent(prompt)
    const response = result.response
    const text = response.text()
    
    if (!text || text.trim() === '') {
      throw new Error('Empty response from Gemini')
    }
    
    return NextResponse.json({ response: text })
    
  } catch (error) {
    console.error('Gemini 2.0 Flash API Error:', error)
    
    // Enhanced error handling
    let errorMessage = 'Sorry, I encountered an error. Please try again later.'

    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    )
  }
}
