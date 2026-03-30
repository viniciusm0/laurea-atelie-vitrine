import azulBebeDourado from '../assets/azul_bebe_dourado.jpg';
import azulClaroPrata from '../assets/azul_claro_prata.jpg';
import azulEscuroPrata from '../assets/azul_escuro_prata.jpg';
import brancoPeroladoPrata from '../assets/base perolada com prata.jpeg';
import brancoLeiteDourado from '../assets/branco_leite_dourado.jpg';
import brancoPeroladoDourado from '../assets/branco_perolado_dourado.png';
import brancoPeroladoPreto from '../assets/branco_perolado_preto.jpg';
import brancoPeroladoRose from '../assets/branco_perolado_rose.jpg';
import champagne from '../assets/champagne.jpeg';
import lilasPeroladoPrata from '../assets/lilas_perolado_prata.jpg';
import verdeEsmeraldaPrata from '../assets/verde_esmeralda_perolado_prata.jpeg';
import verdeOlivaDourado from '../assets/verde_oliva_dourado.png';
import verdeEsmeraldaPeroladoDourado from '../assets/verde_perolado_dourado.jpeg';

export const productImages: Record<string, string> = {
  // Padrão da chave: 'Grupo-Tom-Escrita'

  // Azuis
  'Azuis-Bebê-Dourado': azulBebeDourado,
  'Azuis-Claro-Prata': azulClaroPrata,
  'Azuis-Escuro-Prata': azulEscuroPrata,

  // Verdes
  'Verdes-Esmeralda-Prata': verdeEsmeraldaPrata,
  'Verdes-Oliva-Dourado': verdeOlivaDourado,
  'Verdes-EsmeraldaPerolado-Dourado': verdeEsmeraldaPeroladoDourado,

  // Champagne
  'Champagne-Champagne-Dourado': champagne,

  // Roxos (Lilás)
  'Roxos-Roxo-Prata': lilasPeroladoPrata,

  // Brancos
  'Brancos-Perolado-Prata': brancoPeroladoPrata,
  'Brancos-Leite-Dourado': brancoLeiteDourado,
  'Brancos-Perolado-Dourado': brancoPeroladoDourado,
  'Brancos-Perolado-Preto': brancoPeroladoPreto,
  'Brancos-Perolado-Rosê': brancoPeroladoRose,

  // Imagem de Fallback genérica (placeholder)
  'default': 'https://images.unsplash.com/photo-1599687267812-35c05ff70ee9?auto=format&fit=crop&q=80&w=400&h=400'
};

export const hasExactImage = (groupName: string, shadeName: string, writingColor: string): boolean => {
  const key = `${groupName}-${shadeName}-${writingColor}`;
  return !!productImages[key];
};

export const getImageForVariant = (groupName: string, shadeName: string, writingColor: string): string => {
  const key1 = `${groupName}-${shadeName}-${writingColor}`;

  // Retorna a imagem exata se houver
  if (productImages[key1]) return productImages[key1];

  // Fallback para uma imagem qualquer do mesmo tom (ignorando a cor da escrita), se houver
  const fallbackTom = Object.keys(productImages).find(k => k.startsWith(`${groupName}-${shadeName}`));
  if (fallbackTom) return productImages[fallbackTom];

  // Fallback geral
  return productImages['default'];
};
