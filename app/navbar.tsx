'use client';

import { Fragment } from 'react';
import { usePathname } from 'next/navigation';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { signIn, signOut } from 'next-auth/react';

import Image from 'next/image';

const notionNoticeUrl =
  'https://davidswork82.notion.site/Project-Eye-af57263f42ea445ca4528f559bacb945?pvs=4';

const navigation = [
  { name: '지도', href: '/' },
  { name: '표', href: '/tableview' }
];

const noticeItem = {
  name: '업데이트',
  href: notionNoticeUrl,
  target: '_blank'
};

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar({ user }: { user: any }) {
  const pathname = usePathname();

  return (
    <Disclosure as='nav' className='bg-white shadow-sm'>
      {({ open }) => (
        <>
          <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
            <div className='flex h-16 justify-between'>
              <div className='flex w-full'>
                <div className='flex flex-shrink-0 items-center'>
                  <div className="h-[60px] w-[60px] overflow-hidden'">
                    <svg
                      width='100%'
                      height='100%'
                      viewBox='0 0 159 111'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <g filter='url(#filter0_d_150_2)'>
                        <path
                          d='M59 55C59 69.3594 47.5833 81 33.5 81C19.4167 81 8 69.3594 8 55C8 40.6406 19.4167 29 33.5 29C47.5833 29 59 40.6406 59 55Z'
                          fill='white'
                        />
                        <path
                          d='M33.5 83C48.7243 83 61 70.4272 61 55C61 39.5728 48.7243 27 33.5 27C18.2757 27 6 39.5728 6 55C6 70.4272 18.2757 83 33.5 83Z'
                          stroke='black'
                          stroke-width='4'
                        />
                      </g>
                      <path
                        d='M40.0323 -4.23016e-08L40.0323 27.5C40.0323 38.2394 40.0323 44.2606 40.0323 55C40.2212 65.7394 40.3272 71.7606 40.5161 82.5C40.7051 93.2394 40.811 99.2606 41 110M26 -5.36064e-07C26 42.9577 26 67.0423 26 110'
                        stroke='black'
                        stroke-width='4'
                      />
                      <path
                        d='M92.0391 69H75.5938V40.4453H92.0391V45.4062H81.6484V51.6758H91.3164V56.6367H81.6484V64H92.0391V69ZM106.902 52.2031L112.859 40.4453H119.383L109.91 57.8867V69H103.895V58.082L94.4219 40.4453H100.984L106.902 52.2031ZM139.422 69H122.977V40.4453H139.422V45.4062H129.031V51.6758H138.699V56.6367H129.031V64H139.422V69Z'
                        fill='black'
                      />
                      <defs>
                        <filter
                          id='filter0_d_150_2'
                          x='0'
                          y='25'
                          width='67'
                          height='68'
                          filterUnits='userSpaceOnUse'
                          color-interpolation-filters='sRGB'
                        >
                          <feFlood
                            flood-opacity='0'
                            result='BackgroundImageFix'
                          />
                          <feColorMatrix
                            in='SourceAlpha'
                            type='matrix'
                            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                            result='hardAlpha'
                          />
                          <feOffset dy='4' />
                          <feGaussianBlur stdDeviation='2' />
                          <feComposite in2='hardAlpha' operator='out' />
                          <feColorMatrix
                            type='matrix'
                            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0'
                          />
                          <feBlend
                            mode='normal'
                            in2='BackgroundImageFix'
                            result='effect1_dropShadow_150_2'
                          />
                          <feBlend
                            mode='normal'
                            in='SourceGraphic'
                            in2='effect1_dropShadow_150_2'
                            result='shape'
                          />
                        </filter>
                      </defs>
                    </svg>
                  </div>
                </div>
                <div className='justify-center flex items-center font-[600] mx-4 w-full md:w-[200px]'>
                  아파트 실거래 감시눈
                </div>
                <div className='flex justify-between items-center md:w-full'>
                  <div className='hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8'>
                    {navigation.map(item => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          pathname === item.href
                            ? 'border-slate-500 text-gray-900'
                            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
                          'inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium'
                        )}
                        aria-current={
                          pathname === item.href ? 'page' : undefined
                        }
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <div className='hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8'>
                    <a
                      key={noticeItem.name}
                      href={noticeItem.href}
                      className={classNames(
                        pathname === noticeItem.href
                          ? 'border-slate-500 text-gray-900'
                          : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
                        'inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium'
                      )}
                      aria-current={
                        pathname === noticeItem.href ? 'page' : undefined
                      }
                    >
                      {noticeItem.name}
                    </a>
                  </div>
                </div>
              </div>

              <div className='hidden sm:ml-6 sm:flex sm:items-center'>
                <Menu as='div' className='relative ml-3'>
                  <div>
                    <Menu.Button className='flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2'>
                      <span className='sr-only'>Open user menu</span>
                      <Image
                        className='h-8 w-8 rounded-full'
                        src={user?.image || '/images/placeholder.png'}
                        height={32}
                        width={32}
                        alt={`${user?.name || 'placeholder'} avatar`}
                      />
                    </Menu.Button>
                  </div>

                  <Transition
                    as={Fragment}
                    enter='transition ease-out duration-200'
                    enterFrom='transform opacity-0 scale-95'
                    enterTo='transform opacity-100 scale-100'
                    leave='transition ease-in duration-75'
                    leaveFrom='transform opacity-100 scale-100'
                    leaveTo='transform opacity-0 scale-95'
                  >
                    <Menu.Items className='absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
                      {user ? (
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              className={classNames(
                                active ? 'bg-gray-100' : '',
                                'flex w-full px-4 py-2 text-sm text-gray-700'
                              )}
                              onClick={() => signOut()}
                            >
                              Sign out
                            </button>
                          )}
                        </Menu.Item>
                      ) : (
                        <Menu.Item>
                          {({ active }) => (
                            <div>
                              <button
                                className={classNames(
                                  active ? 'bg-gray-100' : '',
                                  'flex w-full px-4 py-2 text-sm text-gray-700'
                                )}
                                // onClick={() => signIn('github')}
                              >
                                로그인(준비중)
                              </button>
                              <a
                                href='https://blacksheepwall.xyz'
                                className='flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                                target='_blank'
                                rel='noopener noreferrer'
                              >
                                Company
                              </a>
                              <a
                                href='https://davidswork82.notion.site/Donation-showmethemoney-3911d00f82a8436c9cc1328ad0a17b40?pvs=4'
                                className='flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                                target='_blank'
                                rel='noopener noreferrer'
                              >
                                Donate
                              </a>
                            </div>
                          )}
                        </Menu.Item>
                      )}
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
              <div className='-mr-2 px-4 flex items-center sm:hidden'>
                <Disclosure.Button className='inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2'>
                  <span className='sr-only'>Open main menu</span>
                  {open ? (
                    <XMarkIcon className='block h-6 w-6' aria-hidden='true' />
                  ) : (
                    <Bars3Icon className='block h-6 w-6' aria-hidden='true' />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className='sm:hidden'>
            <div className='ml-4 space-y-1 pt-2 pb-3 flex justify-between'>
              <div className='flex'>
                {navigation.map(item => {
                  console.log('Rendering item:', item); // Debugging line
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        pathname === item.href
                          ? 'border-slate-500 text-gray-900'
                          : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
                        'inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium'
                      )}
                      aria-current={pathname === item.href ? 'page' : undefined}
                    >
                      {item.name}
                    </a>
                  );
                })}
              </div>
              <div className='mr-4 flex justify-center items-center'>
                <a
                  key={noticeItem.name}
                  href={noticeItem.href}
                  className={classNames(
                    pathname === noticeItem.href
                      ? 'border-slate-500 text-gray-900'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
                    'inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium'
                  )}
                  aria-current={
                    pathname === noticeItem.href ? 'page' : undefined
                  }
                >
                  {noticeItem.name}
                </a>
              </div>
            </div>
            <div className='border-t border-gray-200 pt-4 pb-3'>
              {user ? (
                <>
                  <div className='flex items-center px-4'>
                    <div className='flex-shrink-0'>
                      <Image
                        className='h-8 w-8 rounded-full'
                        src={user.image}
                        height={32}
                        width={32}
                        alt={`${user.name} avatar`}
                      />
                    </div>
                    <div className='ml-3'>
                      <div className='text-base font-medium text-gray-800'>
                        {user.name}
                      </div>
                      <div className='text-sm font-medium text-gray-500'>
                        {user.email}
                      </div>
                    </div>
                  </div>
                  <div className='mt-3 space-y-1'>
                    <button
                      onClick={() => signOut()}
                      className='block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800'
                    >
                      Sign out
                    </button>
                  </div>
                </>
              ) : (
                <div className='mt-3 space-y-1'>
                  <button
                    // onClick={() => signIn('github')}
                    className='flex w-full px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800'
                  >
                    로그인(준비중)
                  </button>
                  <a
                    href='https://blacksheepwall.xyz'
                    className='block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Company
                  </a>
                  <a
                    href='https://davidswork82.notion.site/Donation-showmethemoney-3911d00f82a8436c9cc1328ad0a17b40?pvs=4'
                    className='block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Donate
                  </a>
                </div>
              )}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
