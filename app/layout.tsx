import './globals.css';
import Nav from './nav';
import { Suspense } from 'react';

export const metadata = {
  other: {
    'naver-site-verification': 'fb81877931af0f87f442ec824be75afabd9cc378'
  },
  openGraph: {
    title: '수출입현황 대시보드',
    description: '관세청 수출입데이터를 한눈에'
  },
  title: '수출입현황 대시보드',
  description: '관세청 수출입데이터를 한눈에'
};

export default async function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='ko' className='h-full bg-gray-50'>
      <body className='h-full'>
        <Suspense>
          <Nav />
        </Suspense>
        {children}
      </body>
    </html>
  );
}
