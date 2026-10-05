import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import LeaderProfilePage from './pages/LeaderProfilePage.jsx';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/leader-profile" element={<LeaderProfilePage />} />
    </Routes>
  );
}

