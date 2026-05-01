"use client";
import Link from 'next/link'
import { usePathname } from 'next/navigation';
const links=[
  {
    name:"home",
    path:"/",
  },
  {
    name:"about",
    path:"/about",
  },
  {
    name:"services",
    path:"/services",
  },
  {
    name:"work",
    path:"/work",
  },
  {
    name:"contact",
    path:"/contact",
  }
]

const NavLinks = ({containerStyles} :any) => {
const pathname=usePathname();

  return (
    <ul className={containerStyles}>
      {links.map((link, i )=>
  {
    const isActive =pathname===link.path;
    const charLength=link.name.length;
    const lineWith=charLength >5 ?"after:w-[120%]" : "after:w-[90%]"
    return(
       <Link
        key={i}
        href={link.path}
       className={`relative text-lg uppercase text-white ${isActive && `after:content-[''] after:block after:absolute after:left-0 after:top-1/2 ${lineWith} after:h-1 after:bg-accent after:-translate-y-1/2 after:z-0 `}`}
        >
          <span className='relative z-10'>
            {link.name}
          </span>
          
        </Link>
    )
  })}
    </ul>
  )
}

export default NavLinks