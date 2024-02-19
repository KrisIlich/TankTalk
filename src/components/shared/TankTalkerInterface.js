import React, {useState} from 'react';
import { saveAsPDF } from './SaveAsPDF';
import '../../assets/styles/Home.css'
import '../../assets/styles/TankTalkerAI.css'


const TankTalkerInterface = () => {
    const [chat, setChat] = useState([]);
    return (
        <div className="tanktalker-interface">
            <div className="tanktalker-logo">TankTalker Placeholder Logo</div>
            <div className="chat-bar">
                <input type="text" id="chatInput" placeholder="Ask anything Aquatics related..."/>
                <button id="cta">Ask</button>
            </div>
            <div className="chat-area" id="chatArea"></div>
        </div>
    );
};

export default TankTalkerInterface;