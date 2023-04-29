import logo from './logo.svg';
import './App.css';
import {Logo} from '../src/components/Logo.js'
import { Paragraph } from './components/Paragraph';
import { Links } from './components/Link';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Logo/>
      <Paragraph/>
      <Links/>
      </header>
    </div>
  );
}

export default App;
