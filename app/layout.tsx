import { cn } from '@/lib/utils/utils';
import { SiteHeader } from '@/components/site-header';
import localFont from 'next/font/local';
import '@/styles/globals.css';

const myFont = localFont({
  src: './fonts/PretendardVariable.woff2',
  display: 'swap'
});
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
interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang='en' suppressHydrationWarning>
        <head />
        <body
          className={cn(
            'min-h-screen bg-background font-sans antialiased',
            myFont.className
          )}
        >
          <div className='relative flex min-h-screen flex-col'>
            <SiteHeader />
            <div className='flex-1'>{children}</div>
          </div>
        </body>
      </html>
    </>
  );
}
