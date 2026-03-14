import React, { useState} from "react";
import axios from "axios";

function App() {

  const [message, setMessage] = useState("");
  const [reply, setReply] = useState("");

  const sendMessage = async () => {
    const res = await axios.get("http://127.0.0.1:8000/chat", { param : { message: message }});
    setReply(res.data.response);
  };

  return (
    <div style={{padding: "50px"}}>
      <h2>Chatbot</h2>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message here..."
      />
      <button onClick={sendMessage}>Send</button>

      <h3>Bot Reply:</h3>
      <p>{reply}</p>
    </div>
  );
}

export default App;