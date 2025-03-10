 "use client";
 import Link from "next/link";
import { usePathname } from "next/navigation";


const LinkData=[
{name:"Performance",path:"/Performance"},
{name:"Reliability",path:"/Reliability"},
{name:"Scale",path:"/Scale"}

];


 function Header() {

 const pathName= usePathname()

  return(
    <div className=" absolute w-full z-10">
    <div className="flex justify-between container mx-auto text-white p-8 items-center">
      <Link className="text-4xl font-bold" href="/">
        Home
      </Link>
      <div className="text-2xl space-x-4">
        

        {LinkData.map(item=>(
<Link key={item.name} 
href={item.path}
className={pathName===item.path? "text-pink-400":""}
>{item.name}
</Link>
        ))}
      </div>
    </div>
    </div>

  )


}
export default Header