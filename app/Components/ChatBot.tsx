"use client"

import { useEffect, useState } from "react"
import ChatBot, { Flow } from "react-chatbotify"
import LlmConnector, { LlmConnectorBlock, GeminiProvider } from "@rcb-plugins/llm-connector"

const EntryTestChatBot = () => {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  // Initialize the LLM Connector plugin
  const plugins = [LlmConnector()]

  // System prompt for entry test preparation assistant
  const systemMessage = `You are an expert Entry Test Preparation Assistant. Your role is to help students prepare for university entry tests (like SAT, GRE, GMAT, MCAT, ECAT, NAT, GAT, or any standardized tests).

Your capabilities:
1. Explain concepts in Math, English, Physics, Chemistry, Biology, and General Knowledge
2. Provide practice questions and explain solutions step-by-step
3. Share study tips and time management strategies
4. Help with test anxiety and motivation
5. Clarify doubts on any topic related to entry tests

Guidelines:
- Be encouraging and supportive
- Break down complex concepts into simple explanations
- Provide examples when explaining
- If asked for practice questions, give one at a time and wait for the answer before providing solutions
- Keep responses concise but comprehensive`

  // Define the chatbot flow
  const flow: Flow = {
    start: {
      message: "👋 Hello! I'm your Entry Test Preparation Assistant. I can help you with:\n\n📚 Subject explanations (Math, English, Science)\n✏️ Practice questions\n💡 Study tips & strategies\n🎯 Test preparation guidance\n\nType your question below!",
      chatDisabled: true,
      transition: 0,
      path: "gemini_chat",
    },
    gemini_chat: {
      llmConnector: {
        provider: new GeminiProvider({
          mode: "proxy",
          model: "gemini-2.5-flash",
          responseFormat: "stream",
          baseUrl: "/api/chat",
        }),
        outputType: "character",
        historySize: 5,
        errorMessage: "Sorry, I'm experiencing issues right now. Please try again! 🔄",
      },
    } as LlmConnectorBlock,
  }

  // ChatBot settings
  const settings = {
    general: {
      embedded: false,
      primaryColor: "#4F46E5",
      secondaryColor: "#818CF8",
    },
    chatHistory: {
      disabled: true,
    },
    header: {
      title: "Entry Test Prep Assistant",
    },
    tooltip: {
      text: "Need help with entry test prep? 📚",
    },
    botBubble: {
      showAvatar: true,
    },
    userBubble: {
      showAvatar: true,
    },
  }

  // Don't render on server side
  if (!isLoaded) {
    return null
  }

  return <ChatBot settings={settings} plugins={plugins} flow={flow} />
}

export default EntryTestChatBot
