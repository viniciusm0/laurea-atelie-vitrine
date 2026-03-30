import { useState, useMemo } from 'react';
import { Navbar } from '../components/Navbar';
import { ProductCard } from '../components/ProductCard';
import { RibbonSection } from '../components/RibbonSection';
import { Footer } from '../components/Footer';
import { mockProducts } from '../service/mockProducts';
import type { WritingColor } from '../type/product';

export function Home() {
  const [selectedBaseColor, setSelectedBaseColor] = useState<string>('');
  const [selectedWritingColor, setSelectedWritingColor] = useState<WritingColor | ''>('');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Toast State
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleInterestClick = (baseColor: string, shadeName: string, writingColor: string) => {
    const textToCopy = `Gostaria dessas cores\n- Base: ${baseColor} (${shadeName})\n- Escritas e bordas: ${writingColor}`;
    
    // Fallback or Native clipboard
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(textToCopy);
    } else {
      // Fallback pra navegadores inseguros/velhos (textarea)
      const textArea = document.createElement("textarea");
      textArea.value = textToCopy;
      textArea.style.position = "absolute";
      textArea.style.left = "-999999px";
      document.body.prepend(textArea);
      textArea.select();
      try {
        document.execCommand('copy');
      } catch (error) {
        console.error(error);
      } finally {
        textArea.remove();
      }
    }
    
    setToastMessage(`Opções de cores copiadas para a área de transferência!`);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  // Filtering Logic Hierarchy
  const filteredProductGroups = useMemo(() => {
    return mockProducts.map(group => {
      // Filtrar a Base (Group)
      if (selectedBaseColor && group.groupName !== selectedBaseColor) {
        return null;
      }

      const lowerQuery = searchQuery.toLowerCase();
      const matchSearchGroup = group.groupName.toLowerCase().includes(lowerQuery);

      // Filtrar SubSessões
      const filteredSubSections = group.subSections.map(sub => {
        const matchSearchShade = sub.shadeName.toLowerCase().includes(lowerQuery);

        // Filtrar Variantes
        const filteredVariants = sub.variants.filter(variant => {
          const matchWriting = selectedWritingColor ? variant.writingColor === selectedWritingColor : true;
          const matchSearchWriting = variant.writingColor.toLowerCase().includes(lowerQuery);
          
          return matchWriting && (matchSearchGroup || matchSearchShade || matchSearchWriting || !searchQuery);
        });

        if (filteredVariants.length === 0) return null;

        return {
          ...sub,
          variants: filteredVariants
        };
      }).filter(Boolean); // Remove empty shades

      if (filteredSubSections.length === 0) return null;

      return {
        ...group,
        subSections: filteredSubSections
      };
    }).filter(Boolean); // Remove empty groups
  }, [selectedBaseColor, selectedWritingColor, searchQuery]);

  return (
    <div className="min-h-screen flex flex-col pt-24 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] relative">
      <Navbar 
        selectedBaseColor={selectedBaseColor}
        setSelectedBaseColor={setSelectedBaseColor}
        selectedWritingColor={selectedWritingColor}
        setSelectedWritingColor={setSelectedWritingColor}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      <main className="flex-grow pt-10" id="vitrine">
        {/* Intro Section */}
        <section className="text-center px-6 mb-16 max-w-3xl mx-auto">
          <h1 className="font-serif text-4xl md:text-5xl text-brand-900 mb-6 leading-tight">
            Vitrine de Porta Alianças
          </h1>
          <p className="text-lg text-brand-700 leading-relaxed font-light">
            Bem-vindo à vitrine oficial da Láurea Ateliê. Desenvolvemos com muito amor cada peça.
            Utilize os filtros acima para encontrar a combinação perfeita de cores.
          </p>
        </section>

        {/* Catalog */}
        <section className="max-w-7xl mx-auto px-6 space-y-20">
          {filteredProductGroups.length === 0 ? (
            <div className="text-center py-20 bg-white/50 rounded-2xl border border-brand-200 backdrop-blur-sm">
              <p className="text-brand-500 font-medium text-lg">Nenhum porta aliança encontrado com esses filtros.</p>
              <button 
                onClick={() => {
                  setSelectedBaseColor('');
                  setSelectedWritingColor('');
                  setSearchQuery('');
                }}
                className="mt-4 text-brand-800 underline hover:text-brand-900"
              >
                Limpar Filtros
              </button>
            </div>
          ) : (
            filteredProductGroups.map(group => (
              <div key={group?.groupName} className="space-y-10">
                
                {/* Cabeçalho do Grupo */}
                <div className="border-b-2 border-brand-300 pb-2">
                  <h2 className="font-serif text-4xl text-brand-950">{group?.groupName}</h2>
                  <p className="text-sm text-brand-600 mt-1">{group?.description}</p>
                </div>
                
                {/* Tons (SubSeções) */}
                <div className="space-y-12 pl-2 md:pl-6">
                  {group?.subSections.map((sub: any) => (
                    <div key={sub.shadeName} className="space-y-4 bg-brand-50/50 p-4 md:p-6 rounded-2xl border border-brand-100">
                      <h3 className="font-serif text-2xl text-brand-800 border-l-4 border-brand-400 pl-3">
                        {sub.shadeName}:
                      </h3>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {sub.variants.map((variant: any) => (
                          <ProductCard 
                            key={variant.id} 
                            variant={variant} 
                            baseColor={group.groupName} 
                            shadeName={sub.shadeName}
                            onInterestClick={handleInterestClick}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            ))
          )}
        </section>

        <RibbonSection />
      </main>

      <Footer />

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2 bg-brand-900 text-white px-6 py-3 rounded-full shadow-2xl flex items-center gap-3 animate-bounce z-50 text-sm font-medium border border-brand-700">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-400">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
          {toastMessage}
        </div>
      )}
    </div>
  );
}
