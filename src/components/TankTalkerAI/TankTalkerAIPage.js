import React, {useState, useEffect} from 'react';
import '../../assets/styles/TankTalkerAIPage.css'
import Header from "../shared/Header.js";
import TankTalkerInterface from './TankTalkerInterface.js';
import axios from "axios";
import OpenAI from "openai";

const TankTalkerAIPage = () => {
    const [input, setInput] = useState('');
    const [conversation, setConversation] = useState([]);
    const [isTyping, setIsTyping] = useState(false);

    //function for adding a message to the messages array
    /*const addMessagetToConversation = (message) => {
        setConversation(prevConvo => [...[prevConvo, message]])
    }*/

    useEffect(() => {
        setConversation([{ sender: 'ai', text: 'Hello! Welcome to Tank Talker AI, home of our virtual fish tank assistant.'}]);
    }, [])

    useEffect(() => {
        setIsTyping(true);
        const initialMessage = { sender: 'ai', text: 'How can I assist you with your aquarium today?'};
        const typingDelay = setTimeout(() => {
            setConversation(prevConversation => [
                ...prevConversation,
                initialMessage
            ]);
        setIsTyping(false);
        }, 1350);

        return () => clearTimeout(typingDelay);
    }, []);

    const handleInputChange = (e) => {
        setInput(e.target.value);
    };

    const openai = new OpenAI({
        apiKey: process.env.REACT_APP_OPENAI_API_KEY, dangerouslyAllowBrowser: true
    });
    const handleSubmit = async (e) => {
        e.preventDefault();
        const userMessage = {sender: 'user', text: input};
        setConversation(conv => [...conv, userMessage])
        setInput('');
        setIsTyping(true);

        try {
            const response = await openai.chat.completions.create({
                model: "gpt-3.5-turbo",
                messages: [
                    {role: "system", content: "You are a helpful assistant, assisting in aquarium related questions. Start new paragraphs like normal conversation in texting, keep it a medium to brief length. If a response is long, you can list out steps, just ask if the person wants the next step instead of giving all the steps at once. If creating a list, prefix everything with a bold word, like in a list."},
                    {role: "user", content: input}
                ],
            });

            let aiText = response.choices[0].message.content;
            aiText = aiText.replace(/\n/g, '<br>');
            aiText = aiText.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

            const aiResponse = {sender: 'ai', text: aiText};
            setConversation(conv => [...conv, aiResponse])
            setIsTyping(false);
        } catch (error) {
            console.error("Error fetching AI Response: ", error);
            const aiErrorResponse = {sender: 'ai', text: "Sorry, I couldn't process your request at the moment, please try again later."}
            setConversation(conv => [...conv, aiErrorResponse]);
        } finally {
            setIsTyping(false);
        }
    };

    return (
        <div>
            <Header/>
        <div className={"tanktalker-ai-page"}>
            <h1 className={"tanktalker-title"}>Fishtank Assistant</h1>
            <form onSubmit={handleSubmit} className={"tanktalker-search-form"}>
                <input type={"text"} value={input} onChange={handleInputChange} className={"tanktalker-search-input"} placeholder={"Ask your aquarium-related questions here..."}/>
                <button type={"submit"} className={"tanktalker-search-button"}>Ask</button>
            </form>
            {conversation.length > 0 && (<TankTalkerInterface conversation={conversation} isTyping={isTyping} />
                )}
        </div>
        </div>
    );
};

export default TankTalkerAIPage;