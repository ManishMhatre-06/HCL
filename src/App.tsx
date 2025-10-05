import { useState } from 'react';
import { MainPage } from './components/MainPage';
import { HelpPage } from './components/HelpPage';
import { Navigation } from './components/Navigation';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'main' | 'help'>('main');

  return (
    <div className="min-h-screen bg-background">
      <Navigation currentPage={currentPage} onPageChange={setCurrentPage} />
      {currentPage === 'main' ? <MainPage /> : <HelpPage />}
    </div>
  );
}