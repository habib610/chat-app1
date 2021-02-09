import {ChatEngine} from 'react-chat-engine'
import './App.css';
import ChatFeed from './components/ChatFeed';



function App() {
  return (
    <div>

      <ChatEngine
    height="100vh"
    projectID ="9f290de9-29cf-4eab-a29c-726183198dd3"
    userSecret="123123"
    userName = "habib"
    renderChatFeed = {(chatAppProps)=> <ChatFeed {...chatAppProps}/>}
    />
    </div>
    
  );
}
export default App;
