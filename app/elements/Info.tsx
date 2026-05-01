import { Cake, Mail, MapPin, Phone } from 'lucide-react'
import React from 'react'

const Info = () => {
  return (
    <div className='flex flex-col gap-6 md:gap-10'>
      <div className='flex flex-col md:flex-row gap-4'>

        <div className='w-70 flex items-start gap-4'> 
          <Cake className='text-2xl mt-1 text-accent' />
          <div>
             <p className='test-lg'>Date OF Birth</p>
        <p>20 Mars 2005</p>
          </div>
        </div>
       <div className='w-70 flex items-start gap-4'> 
          <Mail className='text-2xl mt-1 text-accent' />
          <div>
             <p className='test-lg'>Email Address</p>
        <p>imanemeliane18@gmail.com</p>
          </div>
        </div>
      </div>
       <div className='flex flex-col md:flex-row gap-4'>

        <div className='w-70 flex items-start gap-4'> 
          <Phone className='text-2xl mt-1 text-accent' />
          <div>
             <p className='test-lg'>Phone</p>
        <p>+212 6-70-95-22-18</p>
          </div>
        </div>
       <div className='w-70 flex items-start gap-4'> 
          <MapPin className='text-2xl mt-1 text-accent' />
          <div>
             <p className='test-lg'>Location</p>
        <p>Settat, Morocco</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Info