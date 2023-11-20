import React from 'react'
import { Button } from '../ui/button'
import { useRouter } from 'next/router'
import PageNotFound from '@/app/not-found';

const TopBar = () => {
 
  return (
    <div className='p-5'>
          <div className="flex items-center justify-between space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Welcome to College Hub!</h2>
            <div className="flex items-center space-x-2">
              <Button>Explore</Button>
            </div>
          </div>
    </div>
  )
}

export default TopBar