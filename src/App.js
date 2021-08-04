import Logo from './components/Logo';
import Message from './components/Message';
import MsgInput from './components/MsgInput';

import './App.scss';


function App() {
  return (
    <main id="container">

      <div id="banner">
        <Logo />
      </div>

      <div id="thread-container">
        <ul>
          <li><Message isOwn={true} msg="dsjfnsdjk nsdn dsjkf" /></li>
          <li>
            <Message isOwn={false} msg="hello world" />
          </li>
          <li><Message isOwn={true} msg="aa snd dlsand sdndsfnsdnf sdfsdfnsldfsdl" /></li>
          <li><Message isOwn={false} msg="hello world" /></li>
          <li><Message isOwn={true} msg="sa dasd as d" /></li>
          <li><Message isOwn={true} msg="sa dasd" /></li>
          <li><Message isOwn={true} msg="aa snd dlsand sdndsfnsdnf sdfsdfnsldfsdl" /></li>
          <li><Message isOwn={false} msg="hello world" /></li>
          <li><Message isOwn={true} msg="sa dasd as d" /></li>
          <li><Message isOwn={true} msg="sa dasd" /></li>
          <li><Message isOwn={false} msg="aa snd dlsand sdndsfnsdnf sdfsdfnsldfsdl" /></li>
          <li><Message isOwn={false} msg="hello world" /></li>
          <li><Message isOwn={true} msg="sa dasd as d" /></li>
          <li><Message isOwn={true} msg="sa dasd" /></li>
          <li><Message isOwn={true} msg="aa snd dlsand sdndsfnsdnf sdfsdfnsldfsdl" /></li>
          <li><Message isOwn={false} msg="hello world" /></li>
          <li><Message isOwn={true} msg="sa dasd as d" /></li>
          <li><Message isOwn={true} msg="sa dasd" /></li>
        </ul>
      </div>

      <div id="msg-input-container">
        <MsgInput />
      </div>
    </main>
  );
}

export default App;
