import { Button } from './ui/button';

interface NavigationProps {
  currentPage: 'main' | 'help';
  onPageChange: (page: 'main' | 'help') => void;
}

export function Navigation({ currentPage, onPageChange }: NavigationProps) {
  return (
    <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold">HCL</span>
          </div>
          <span className="text-xl font-medium">Human Centric Language</span>
        </div>
        
        <div className="flex items-center space-x-4">
          <Button
            variant={currentPage === 'main' ? 'default' : 'ghost'}
            onClick={() => onPageChange('main')}
            className={currentPage === 'main' ? 'bg-blue-600 hover:bg-blue-700' : ''}
          >
            Home
          </Button>
          <Button
            variant={currentPage === 'help' ? 'default' : 'ghost'}
            onClick={() => onPageChange('help')}
            className={currentPage === 'help' ? 'bg-blue-600 hover:bg-blue-700' : ''}
          >
            Documentation
          </Button>
        </div>
      </div>
    </nav>
  );
}