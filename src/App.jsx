import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import DailyLearning from './DailyLearning';
import LessonPage from './LessonPage'; // 새로 만든 레슨 페이지 컴포넌트
import { LevelProvider } from './LevelTabs';

export default function App() {
  return (
    <LevelProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/daily" element={<DailyLearning />} />
          <Route path="/lesson/:level/:day" element={<LessonPage />} /> {/* 추가된 라우트 */}
        </Routes>
      </Router>
    </LevelProvider>
  );
}
