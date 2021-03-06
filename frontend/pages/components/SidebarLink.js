import React from 'react'

function SidebarLink({Icon, text, active, link}) {
  return (
    <div className={'text-[#d9d9d9] flex items-center justify-center xl:justify-start text-xl space-x-3 hoverAnimation'}>
        <Icon className="text-white h-7" />
        <a href={link} className="hidden xl:inline">{text}</a>
    </div>
  )
}

export default SidebarLink