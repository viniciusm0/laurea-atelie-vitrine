import type { ProductSection, SubSection, ProductVariant } from '../type/product';
import { mockBaseColors } from './mockBaseColors';
import { mockWritingColors } from './mockWritingColors';
import { getImageForVariant, hasExactImage } from './mockImages';

export const mockProducts: ProductSection[] = mockBaseColors.map((baseGroup, groupIndex) => {
  
  const subSections: SubSection[] = baseGroup.shades.map((shade, shadeIndex) => {
    
    // Criamos as variantes de escritas SOMENTE SE tivermos imagem para elas
    const variants: ProductVariant[] = mockWritingColors
      .filter((writingColor) => hasExactImage(baseGroup.groupName, shade, writingColor))
      .map((writingColor, wIndex) => ({
        id: `prod-${groupIndex}-${shadeIndex}-${wIndex}`,
        writingColor: writingColor,
        imageUrl: getImageForVariant(baseGroup.groupName, shade, writingColor),
        title: `Escritas e Bordas em ${writingColor}`,
      }));

    return {
      shadeName: shade,
      variants
    };
  });

  return {
    groupName: baseGroup.groupName,
    description: `Opções exclusivas de porta-alianças na categoria de ${baseGroup.groupName}.`,
    subSections,
  };
});
