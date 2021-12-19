import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/Home';
import Question from './components/Question';
import Quiz from './components/Quiz';

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
          <Route path="/home" element={<Home />}>
          </Route>
          <Route path="/question" element={<Question />}>
          </Route>
          <Route path="/quiz" element={<Quiz />}>
          </Route>
          <Route exact path="/" element={<Home />}>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
