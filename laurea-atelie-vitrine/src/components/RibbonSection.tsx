import { mockRibbonColors } from '../service/mockRibbonColors';

export function RibbonSection() {
  return (
    <section id="lacos" className="my-20 max-w-7xl mx-auto px-6">
      <div className="bg-brand-50 rounded-3xl p-10 mt-12 text-center border border-brand-100 shadow-sm relative overflow-hidden">
        
        <div className="absolute top-0 right-0 p-8 opacity-5">
           <svg width="120" height="120" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 22C12 22 20 18 20 12C20 6 12 2 12 2C12 2 4 6 4 12C4 18 12 22 12 22Z" />
           </svg>
        </div>

        <h2 className="font-serif text-3xl text-brand-900 mb-4">Escolha o seu Laço de Cetim</h2>
        <p className="text-brand-600 mb-8 max-w-2xl mx-auto leading-relaxed">
          O toque final para o seu porta-alianças. Selecione a cor da fita de cetim que melhor harmoniza com a paleta do seu casamento.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          {mockRibbonColors.map(ribbon => (
            <div 
              key={ribbon.name}
              className="flex items-center gap-3 px-6 py-3 bg-white border border-brand-200 rounded-full text-brand-800 font-medium hover:bg-brand-100 hover:border-brand-300 transition-all cursor-default shadow-sm hover:-translate-y-1"
            >
              <div 
                className="w-4 h-4 rounded-full border border-gray-300 shadow-inner"
                style={{ backgroundColor: ribbon.hex }}
              />
              {ribbon.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
