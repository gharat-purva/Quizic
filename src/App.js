import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Quizic from './Quizic';
import Header from './components/Header';
import './styles.css';

const App = () => {
  return (
    <Router>
      <div className="container">
        <Header />
        <div className="content">
          <div className="navigation">
            <nav>
              <ul className="horizontal-nav">
                <li><Link to="/math">Math</Link></li>
                <li><Link to="/logic">Logic</Link></li>
                <li><Link to="/verbal">Verbal</Link></li>
                <li><Link to="/spatial">Spatial</Link></li>
                <li><Link to="/memory">Memory</Link></li>
              </ul>
            </nav>
          </div>
          <div className="quiz-area">
            <Routes>
              <Route path="/math" element={<Quizic dataFile="/math-questions.json" />} />
              <Route path="/logic" element={<Quizic dataFile="/logic-questions.json" />} />
              <Route path="/verbal" element={<Quizic dataFile="/verbal-questions.json" />} />
              <Route path="/spatial" element={<Quizic dataFile="/spatial-questions.json" />} />
              <Route path="/memory" element={<Quizic dataFile="/memory-questions.json" />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
