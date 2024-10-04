'use client'

import Image from 'next/image'
import { useUser } from '@clerk/nextjs'

import DashboardItems from './dashboard-items'
import UserPlan from './user-plan'

const DashboardSidebar = () => {
  const { user } = useUser()
  return (
    <div className="p-2">
      <div className="p-2 flex items-center bg-[]  border border-[#cecaca] shadow-sm rounded">
        <span className="text-2xl">
          <Image src={'/logo.png'} alt="logo" width={'40'} height={'40'} />
        </span>
        <h5 className="pl-2 pt-1 ">{user?.firstName}&apos;s Newsletter</h5>
      </div>
      <div>
        <DashboardItems />
        <UserPlan />
        <DashboardItems buttonContent={true} />
      </div>
    </div>
  )
}

export default DashboardSidebar
