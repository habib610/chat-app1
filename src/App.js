import {ChatEngine} from 'react-chat-engine'
import './App.css';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';



function App() {

  if(!localStorage.getItem('username')) return <LoginForm/>
  return (
    <div>

      <ChatEngine
    height="100vh"
    projectID ="9f290de9-29cf-4eab-a29c-726183198dd3"
    userName = {localStorage.getItem('username')}
    userSecret= {localStorage.getItem('password')}
    renderChatFeed = {(chatAppProps)=> <ChatFeed {...chatAppProps}/>}
    />
    </div>
    
  );
}
export default App;
