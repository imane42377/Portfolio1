"use client";
import Logo from './Logo'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { ArrowDownToLine, Logs } from 'lucide-react'
import NavLinks from './NavLinks'
import Socials from './Socials'
import { ThemeSwitcher } from '../switcher/theme-switcher';

const Header = () => {
    return (
        <header className='xl:hidden absolute z-40 left-0 top-0 right-0 pb-10'>

            <div className="container mx-auto pb-10">
                <div>
                    {/* logo */}
                    <div className='flex items-center justify-between py-6'>
                        <Logo />
                        <div className='ml-auto pr-5'>
                            <ThemeSwitcher />
                        </div>
                        
                        <Sheet>
                            <SheetTrigger className='cursor-pointer text-[30px] text-ring'>
                                <Logs />
                            </SheetTrigger>
                            <SheetContent className='bg-primary border border-none flex flex-col justify-between items-center pt-16 pb-20'
                                side='left'>
                                <SheetHeader>
                                    <SheetTitle>
                                        <Logo />
                                    </SheetTitle>
                                    <SheetDescription className='sr-only'>
                                        Navigation menu
                                    </SheetDescription>
                                </SheetHeader>
                                <NavLinks containerStyles="flex flex-col gap-8 max-w-[100px]" />
                                <div>
                                    <button className="btn btn-lg btn-tertiary xl:mb-16 mb-5">
                                        <div className="flex items-center justify-center gap-2">
                                            <span>Download CV</span>
                                            <ArrowDownToLine width={25} height={25} />
                                        </div>
                                    </button>
                                    <Socials styles="flex gap-4"
                                        iconS=" flex items-center justify-center rounded-full cursor-pointer bg-accent text-white hover:bg-accent-hover transition w-[40px] text-[20px] p-2"
                                    />
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header