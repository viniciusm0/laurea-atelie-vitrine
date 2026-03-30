import { Search, Menu } from 'lucide-react';
import type { WritingColor } from '../type/product';
import { mockBaseColors } from '../service/mockBaseColors';
import { mockWritingColors } from '../service/mockWritingColors';

interface NavbarProps {
  selectedBaseColor: string;
  setSelectedBaseColor: (color: string) => void;
  selectedWritingColor: WritingColor | '';
  setSelectedWritingColor: (color: WritingColor | '') => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export function Navbar({
  selectedBaseColor,
  setSelectedBaseColor,
  selectedWritingColor,
  setSelectedWritingColor,
  searchQuery,
  setSearchQuery,
}: NavbarProps) {
  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-brand-200 shadow-sm py-4 px-6 md:px-10">
      <div className="max-w-7xl mx-auto flex flex-col gap-4">
        {/* Top: Logo & Title */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-brand-900 cursor-pointer">
            <span className="font-serif text-2xl font-semibold tracking-wide flex items-center gap-2">
              Láurea Ateliê
            </span>
          </div>
          
          <div className="hidden md:flex gap-6 text-brand-700 text-sm font-medium">
            <a href="#vitrine" className="hover:text-brand-900 transition-colors">Vitrine</a>
            <a href="#lacos" className="hover:text-brand-900 transition-colors">Laços</a>
          </div>
          <button className="md:hidden text-brand-900">
            <Menu size={24} />
          </button>
        </div>

        {/* Bottom: Filter System */}
        <div className="flex flex-col md:flex-row items-center gap-4 bg-brand-50 rounded-xl p-3 border border-brand-100">
          <span className="text-sm font-medium text-brand-700 flex-shrink-0">
            Filtre seu modelo:
          </span>
          
          <select 
            value={selectedBaseColor}
            onChange={(e) => setSelectedBaseColor(e.target.value)}
            className="w-full md:w-auto bg-white border border-brand-200 text-brand-700 text-sm rounded-lg focus:ring-brand-400 focus:border-brand-400 block p-2 outline-none"
          >
            <option value="">Todas as Cores de Base</option>
            {mockBaseColors.map(group => (
              <option key={group.groupName} value={group.groupName}>{group.groupName}</option>
            ))}
          </select>

          <select 
            value={selectedWritingColor}
            onChange={(e) => setSelectedWritingColor(e.target.value as WritingColor | '')}
            className="w-full md:w-auto bg-white border border-brand-200 text-brand-700 text-sm rounded-lg focus:ring-brand-400 focus:border-brand-400 block p-2 outline-none"
          >
            <option value="">Todas as Bordas/Escritas</option>
            {mockWritingColors.map(color => (
              <option key={color} value={color}>{color}</option>
            ))}
          </select>

          <div className="relative w-full md:flex-grow">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Search size={16} className="text-brand-400" />
            </div>
            <input 
              type="text" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-white border border-brand-200 text-brand-900 text-sm rounded-lg focus:ring-brand-400 focus:border-brand-400 block w-full pl-9 p-2 outline-none" 
              placeholder="Ex: rosa, prata..." 
            />
          </div>
        </div>
      </div>
    </nav>
  );
}
