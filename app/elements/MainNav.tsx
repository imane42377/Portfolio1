"use client";
import { ArrowDownToLine } from 'lucide-react'
import Logo from './Logo'
import NavLinks from './NavLinks'
import { ThemeSwitcher } from '../switcher/theme-switcher'

const MainNav = () => {
  return (
    <nav className='w-full py-16'>
      <div className='flex flex-col h-full items-center justify-between'>
        <Logo />
        <NavLinks containerStyles="flex flex-col gap-6"/>
        <div className='mt-auto pb-2'>
          <ThemeSwitcher />

          </div> 
        
        <button className="btn btn-lg btn-tertiary xl:mb-16 mb-5">
            <div className="flex items-center justify-center gap-2">
              <span>Download CV</span>
              <ArrowDownToLine width={25} height={25} />
            </div>
          </button>
      </div>
       
    </nav>
  )
}

export default MainNav;