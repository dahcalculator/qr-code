"use client";

import Link from "next/link"
import { usePathname } from "next/navigation"
import {} from "react-icons/rx"

const header = () => {
    
const pathname = usePathname();
    const navList = [
        {label: 'dashboard',
        url: `/dashboard`
    },
        {label: 'case',
        url: `/case`
    },
        {label: 'evidence',
        url: `/evidence`
    },
        {label: 'report',
        url: `/report`
    },

    ]
  return (
    <div>
        <ul className="h-10 flex  py-10">
            <li className=" flex-col mx-10  ">
                <div className="font-bold ">
                    School Cadet Unit
                </div>
                <div className="text-sm text-zinc-400">
                    cadet updates
                </div>
            </li>
            
        </ul>
    </div>
  )
}


export default header