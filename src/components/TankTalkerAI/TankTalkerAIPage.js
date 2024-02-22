import React, {useState, useEffect} from 'react';
import '../../assets/styles/TankTalkerAIPage.css'
import logoImage from '../../assets/images/logo.png'
import bannerImage from '../../assets/images/home-banner.png'
import Header from "../shared/Header";
import TankTalkerInterface from './TankTalkerInterface';

const TankTalkerAIPage = () => {
    const [input, setInput] = useState('');
    const [conversation, setConversation] = useState([]);
    const [isTyping, setIsTyping] = useState(false);

    //function for adding a message to the messages array
    const addMessagetToConversation = (message) => {
        setConversation(prevConvo => [...[prevConvo, message]])
    }

    useEffect(() => {
        addMessagetToConversation({ sender: 'ai', text: 'How can I assist you with your aquarium today?'});
    }, [])

    const handleInputChange = (e) => {
        setInput(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        // code to send input to the backend api
        //add users question to the conversation
        const updatedConversation = [...conversation, { sender: 'user', text: input}]
        setConversation(updatedConversation);
        setInput('');
        setIsTyping(true);



        //placeholder for backend integration
        // simulate AI response
        setTimeout(() => {
            const aiResponse = { sender: 'ai', text: 'This is a simulated response from TankTalker AI'};
            setConversation(conv => [...conv, aiResponse]);
            setIsTyping(false);
            }, 2000);
    };

    return (
        <div>
            <Header/>
        <div className={"tanktalker-ai-page"}>
            <h1 className={"tanktalker-title"}>TankTalker AI</h1>
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