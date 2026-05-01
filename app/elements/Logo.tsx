import Link from 'next/link'

const Logo = () => {
  return (
    <Link href='/' className='text-[28px] font-normal'>
      John<span className='text-accent mx-auto'>
        .
      </span>
    </Link>
  )
}
export default Logo