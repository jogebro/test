import './App.css';
import Main from './components/Main/main';
import Sidebar from './components/Sidebar/Sidebar';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
          <Sidebar/>
          <Main/>
      </div>
    </Router>
  );
}

export default App;
