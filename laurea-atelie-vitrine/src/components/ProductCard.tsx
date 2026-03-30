import type { ProductVariant } from '../type/product';

interface ProductCardProps {
  variant: ProductVariant;
  baseColor: string;
  shadeName: string;
  onInterestClick: (base: string, shade: string, writing: string) => void;
}

export function ProductCard({ variant, baseColor, shadeName, onInterestClick }: ProductCardProps) {
  return (
    <div className="group glass-card overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col h-full bg-white">
      <div className="relative aspect-square overflow-hidden bg-brand-100 flex-shrink-0">
        <img 
          src={variant.imageUrl} 
          alt={variant.title}
          className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="p-5 flex flex-col flex-grow">
        <h3 className="font-serif text-brand-900 text-lg font-semibold line-clamp-2">
          {variant.title}
        </h3>
        <p className="text-sm text-brand-600 mt-1 flex-grow">
          Base: <span className="font-medium text-brand-800">{baseColor} - {shadeName}</span>
        </p>
        
        <button 
          onClick={() => onInterestClick(baseColor, shadeName, variant.writingColor)}
          className="mt-4 w-full bg-brand-900 text-white font-medium py-2 rounded-lg text-sm hover:bg-brand-800 transition-colors active:scale-95 touch-manipulation"
        >
          Tenho Interesse
        </button>
      </div>
    </div>
  );
}
