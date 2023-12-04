import Link from 'next/link';

export function SiteHeader() {
  return (
    <header className='sticky top-0 z-50 w-full border-b bg-[#F5F5F5] backdrop-blur supports-[backdrop-filter]:bg-background/60'>
      <div className='container flex h-14 items-center'>
        <div className='flex flex-1 items-center justify-between space-x-2 md:justify-end'>
          <nav className='mt-2 flex items-center px-2 font-[700] text-[#3863F6] text-[20px]'>
            수출입 대시보드
          </nav>
        </div>
      </div>
    </header>
  );
}
