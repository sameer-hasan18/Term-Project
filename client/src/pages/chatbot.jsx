import React, { useState } from 'react';
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator } from '@chatscope/chat-ui-kit-react';
import DoctorBotImage from './DoctorBot.png';

const OPENAI_API_KEY = "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";

const SYSTEM_MESSAGE = { 
  "role": "system", 
  "content": "Explain things like you are talking to a sick patient and trying to comfort them."
};

function ChatBot() {
  const [chatMessages, setChatMessages] = useState([
    {
      message: "Hello, I'm DoctorBot! Ask me anything!",
      sentTime: "just now",
      sender: "ChatGPT"
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const handleUserMessage = async (userMessage) => {
    const newMessage = {
      message: userMessage,
      direction: 'outgoing',
      sender: "user"
    };

    const updatedMessages = [...chatMessages, newMessage];
    
    setChatMessages(updatedMessages);

    setIsTyping(true);
    await processUserMessage(updatedMessages);
  };

  async function processUserMessage(messages) { 
    let apiMessages = messages.map((messageObject) => {
      let role = (messageObject.sender === "ChatGPT") ? "assistant" : "user";
      return { role, content: messageObject.message };
    });

    const apiRequestBody = {
      "model": "gpt-3.5-turbo",
      "messages": [SYSTEM_MESSAGE, ...apiMessages]
    };

    try {
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": "Bearer " + OPENAI_API_KEY,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(apiRequestBody)
      });

      const data = await response.json();
      const assistantReply = data.choices[0].message.content;

      setChatMessages([
        ...messages,
        { message: assistantReply, sender: "ChatGPT" }
      ]);

      setIsTyping(false);
    } catch (error) {
      console.error("Error processing user message:", error);
      setIsTyping(false);
    }
  }

  return (
    <div className="ChatBot">
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src={DoctorBotImage} alt="DoctorBot" style={{ height: '500px', width: '500px', borderRadius: '50%', marginRight: '10px' }} />
        <div style={{ position: "relative", height: "800px", width: "900px" }}>
        <MainContainer>
          <ChatContainer>       
            <MessageList 
              scrollBehavior="smooth" 
              typingIndicator={isTyping ? <TypingIndicator content="DoctorBot is typing" /> : null}
            >
              {chatMessages.map((message, index) => (
                <Message key={index} model={message} />
              ))}
            </MessageList>
            <MessageInput placeholder="Type message here" onSend={handleUserMessage} />        
          </ChatContainer>
        </MainContainer>
      </div>
    </div>
    </div>
  );
}

export default ChatBot;