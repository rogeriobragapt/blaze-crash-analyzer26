
import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Blaze Crash Analyzer',
  description: 'Sistema inteligente de análise para o jogo Crash da Blaze',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="bg-gray-900 text-white">{children}</body>
    </html>
  );
}
