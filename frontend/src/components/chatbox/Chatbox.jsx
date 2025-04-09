import { useState } from 'react';
import { mockChatHistory } from './mockData.js';
import styles from './Chatbox.module.css';

function Chatbox() {

    const [jobTitle, setJobTitle] = useState(''); // State to hold the job title input by the user
    const [userReply, setUserReply] = useState(''); // State to hold the user's reply to display in the chatbox
    const [interviewHistory, setInterviewHistory] = useState(mockChatHistory);  // State to hold the interview history to be be sent to backend

    const handleChange = (e) => {
        const { name, value } = e.target;

        switch (name) {
            case 'jobTitle':
            setJobTitle(value);
            break;
            case 'userReply':
            setUserReply(value);
            break;
            default:
            break;
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());
        setInterviewHistory((prev) => ({
            ...prev,
            messageHistory: [
            ...prev.messageHistory,
            {
                id: prev.messageHistory.length + 1,
                name: data.userName,
                message: data.userReply,
            },
            ],
        }));
        console.log(data);
        setUserReply("");
    }

    
    return (
        <form onSubmit={handleSubmit} className={styles.chatBox}>

            {/* ========== JOB TITLE ========== */}
            <div className={styles.jobTitle} >
                <label htmlFor="jobTitle">Job Title:</label>
                <input 
                    type="text" 
                    id="jobTitle" 
                    name="jobTitle" 
                    className={styles.userInputBox}
                    value={jobTitle} 
                    onChange={handleChange} 
                    required 
                />
            </div>

            <div className={styles.chatHistory}>
            {/* ========== INTERVIEW HISTORY ========== */}
            {interviewHistory.messageHistory.map((message) => (
                <div key={message.id} className={styles.chatMessage}>
                    <p>{message.name}:</p> <p>{message.message}</p>
                </div>
            ))}
            </div>

            {/* ========== USER INPUT ========== */}
            <input type="text" id='userName' name='userName' value="User" readOnly hidden />
            <div className={styles.messageInput} >
                <input 
                    type="text" 
                    id="userReply" 
                    name="userReply" 
                    className={styles.userInputBox}
                    value={userReply} 
                    onChange={handleChange} 
                    required 
                />
                <button type="submit">Submit</button>
            </div>
        </form>
    )
}


export default Chatbox;