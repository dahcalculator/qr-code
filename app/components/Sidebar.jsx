"use client";

import Link from "next/link"
import { usePathname } from "next/navigation"
import {RxDashboard, RxFile, RxTable} from "react-icons/rx"
import {TbFileReport} from "react-icons/tb"

const Sidebar = () => {
    
const pathname = usePathname();
    const navList = [
        {label: 'dashboard',
        url: `/dashboard`,
        icon: 'RxDashboard'
        
    },
        {label: 'case',
        url: `/case`,
        icon: 'RxFile/'
    },
        {label: 'evidence',
        url: `/evidence`,
        icon: 'RxTable'
    },
        {label: 'report',
        url: `/report`,
        icon: 'TbFileReport'
    },
        {label: 'Logout',
        url: `/`,
        icon: 'RxDashboard'
    }

    ]
  return (
    <div>
        <ul className="h-full flex-col  justify-evenly  flex gap-5 text-xs capitalize ">
            {
                navList.map((a,i)=>(
                    
            
                <Link key={a.i} href={a.url} className={ pathname === `${a.url}` ? "w-full   bg-blue-300 font-bold" : "" }>
                
                <li   className=" h-6 gap-2 hover:bg-blue-200 hover:font-bold px-2 items-center flex rounded-md">
                 <i><RxDashboard/></i>
                 {a.label}
                 </li>
                </Link>
           
                ))
            }
        </ul>
    </div>
  )
}


export default Sidebar