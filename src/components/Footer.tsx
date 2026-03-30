

export function Footer() {
  return (
    <footer className="bg-brand-950 text-brand-100 py-12 mt-20 border-t border-brand-800">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        
        {/* Brand */}
        <div>
          <h2 className="font-serif text-2xl mb-2 text-white">Láurea Ateliê</h2>
          <p className="text-sm text-brand-300">
            Eternizando momentos com delicadeza e amor.<br />
            Porta-alianças exclusivos para o seu grande dia.
          </p>
        </div>

        {/* Socials */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="font-medium uppercase tracking-widest text-brand-400 text-xs mb-4">Nossas Redes</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
            <li><a href="#" className="hover:text-white transition-colors">WhatsApp</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Pinterest</a></li>
          </ul>
        </div>

        {/* Developer Credit */}
        <div className="flex flex-col items-center md:items-end justify-center md:justify-end h-full">
          <p className="text-xs text-brand-400 mt-auto">
            Desenvolvido por{' '}
            <a 
              href="https://github.com/Viniciusm0" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-medium text-brand-200 hover:text-white underline decoration-brand-600 underline-offset-4 transition-all"
            >
              Viniciusm0
            </a>
          </p>
        </div>

      </div>
    </footer>
  );
}
