'use client'

import { useState } from 'react'
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from '@/components/ui/navigation-menu'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'

import { buttonVariants } from '@/components/ui/button'
import { Menu } from 'lucide-react'
import { ModeToggleButton } from '@/components/ui/mode-toggle'
import { COMPANY_SHORT } from '@/lib/constants'

interface RouteProps {
  href: string
  label: string
}

const routeList: RouteProps[] = [
  {
    href: '#services',
    label: 'Services'
  },
  {
    href: '#choose',
    label: 'Choose Us'
  },
  {
    href: '#cases',
    label: 'Our Experience'
  },
  {
    href: '#reachus',
    label: 'About'
  },
  {
    href: '#contacts',
    label: 'Contacts'
  }
]

interface NavbarSectionProps {
  navigationMenu?: boolean
}

export default function NavbarSection({ navigationMenu = true }: NavbarSectionProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  return (
    <header className='sticky border-b-[1px] top-0 z-40 w-full bg-background dark:border-b-slate-700 dark:bg-background'>
      <NavigationMenu className='mx-auto'>
        <NavigationMenuList className='container h-14 px-4 w-screen flex justify-between '>
          <NavigationMenuItem className='font-bold flex'>
            <a rel='noreferrer noopener' href='/' className='ml-2 font-bold text-xl flex items-center'>
              {/* <LogoIcon /> */}
              {COMPANY_SHORT}
            </a>
          </NavigationMenuItem>

          {/* mobile */}
          {navigationMenu && (
            <span className='flex md:hidden'>
              <ModeToggleButton />

              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger className='px-2'>
                  <Menu className='flex md:hidden h-5 w-5' onClick={() => setIsOpen(true)}>
                    <span className='sr-only'>Menu Icon</span>
                  </Menu>
                </SheetTrigger>

                <SheetContent side={'left'}>
                  <SheetHeader>
                    <SheetTitle className='font-bold text-xl'>{COMPANY_SHORT}</SheetTitle>
                  </SheetHeader>
                  <nav className='flex flex-col justify-center items-center gap-2 mt-4'>
                    {routeList.map(({ href, label }: RouteProps) => (
                      <a
                        rel='noreferrer noopener'
                        key={label}
                        href={href}
                        onClick={() => setIsOpen(false)}
                        className={buttonVariants({ variant: 'ghost' })}
                      >
                        {label}
                      </a>
                    ))}
                  </nav>
                </SheetContent>
              </Sheet>
            </span>
          )}

          {/* desktop */}
          {navigationMenu && (
            <nav className='hidden md:flex gap-2'>
              {routeList.map((route: RouteProps, i) => (
                <a
                  rel='noreferrer noopener'
                  href={route.href}
                  key={i}
                  style={{ fontSize: '18px' }}
                  className={`${buttonVariants({
                    variant: 'ghost'
                  })}`}
                >
                  {route.label}
                </a>
              ))}
            </nav>
          )}

          <div className='hidden md:flex gap-2'>
            <ModeToggleButton />
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  )
}
