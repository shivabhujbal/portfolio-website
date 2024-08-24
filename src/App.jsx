// src/App.js
import './App.css';
import Main2 from './components/Main2';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProjectDetails from './components/ProjectDetails';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Main2 />} />
          <Route path="/project/:id" element={<ProjectDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
