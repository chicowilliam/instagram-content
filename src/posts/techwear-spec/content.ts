export const content = {
  code: 'KV-03',
  protocol: 'Kivo :// Protocolo',
  system: 'Sistema de proteção urbana',
  left: [
    { label: 'Modelo', value: '03', lines: ['Série: KV03-26A'] },
    { label: 'Classe', value: 'EXO', lines: ['Urbano / Tático'] },
  ],
  right: [
    { label: 'Edição', value: '26', lines: ['Outono / Inverno'] },
    { label: 'Versão', value: '3.1', lines: ['Camada térmica'] },
  ],
  meters: [
    { label: 'RES', value: 9 },
    { label: 'TRM', value: 7 },
    { label: 'FLX', value: 8 },
  ],
  tags: ['// Tecido selado', '// Malha reforçada', '// Costura fria'],
  barcodeSeed: 'KV03-26A-PINK',
  barcodeLabel: 'KV03 · 26A · 0417',
  footer: 'Equipar / Proteger / Evoluir',
  subject: undefined as string | undefined,
} as const
