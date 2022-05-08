import React from 'react'
import Image from 'next/image'
import SidebarLink from './SidebarLink'
import { DotsHorizontalIcon, HomeIcon } from '@heroicons/react/solid'
import {
        HashtagIcon,
        BellIcon,
        InboxIcon,
        BookmarkIcon,
        ClipboardListIcon,
        UserIcon,
        DotsCircleHorizontalIcon
      } from "@heroicons/react/outline"

function Sidebar() {
  return (
    <div className="hidden sm:flex flex-col items-center xl:items-start xl:w-[340px] p-2 fixed h-full">
      {/* Kwetter logo */}
      <div className="flex items-center justify-center p-0 w-14 h-14 hoverAnimation xl:ml-24">
        <Image src="https://rb.gy/ogau5a" alt='' width={30} height={30}/>
      </div>

      {/* Sidebar buttons */}
      <div className="space-y-2.5 mt-4 mb-2.5 xl:ml-24">
        <SidebarLink text="Home" Icon={HomeIcon} active/>
        <SidebarLink text="Explore" Icon={HashtagIcon} active/>
        <SidebarLink text="Notifications" Icon={BellIcon} active/>
        <SidebarLink text="Messages" Icon={InboxIcon} active/>
        <SidebarLink text="Bookmarks" Icon={BookmarkIcon} active/>
        <SidebarLink text="Lists" Icon={ClipboardListIcon} active/>
        <SidebarLink text="Profile" Icon={UserIcon} active/>
        <SidebarLink text="More" Icon={DotsCircleHorizontalIcon} active/>
      </div>
      <buttton className="hidden xl:inline ml-auto bg-[#1d9bf0] text-white rounded-full w-56 h-[52px] text-lg font-bold shadow-md hover:bg-[#1a8cd8]">Tweet</buttton>

      {/* Sidebar user info */}
      <div className="text-[#d9d9d9] flex items-center justify-center hoverAnimation xl:ml-auto xl:-mr-5 mt-auto">
        <img src="https://www.nicepng.com/png/detail/79-795242_nicolas-cage-face-png-nicolas-cage.png" alt="" className="h-10 w-10 rounded-full xl:mr-2.5" />
        <div className="hidden leading-5 xl:inline">
          <h4 className="font-bold ">janmdp</h4>
          <p className="text-[#6e767d]">@janmdp</p>
        </div>
        <DotsHorizontalIcon className="hidden h-5 ml-10 xl:inline" />
      </div>
    </div>
  )
}

export default Sidebar