import Link from "next/link"


async function getCases() {

  const res = await fetch('http://localhost:4000/cases');

  await new Promise((resolve) => setTimeout(resolve, 3000))

  return res.json();
}




const page = async () => {
  
const cases = await getCases();

  return (
    <div className="w-full h-full">
        <div className="  flex-col flex gap-4 w-full h-full">
         {
           cases.map((c)=>(
            
        <div className="  rounded-md flex-row flex gap-20 justify-evenly capitalize w-full h-32 bg-white "  key={c.id}>
        
            <div className="h-full flex w-full flex-row items-center  justify-evenly p-4 "
           
            >
            <div className="text-xs  h-full w-full" > img </div>
            <div className="h-full w-full ">
            <div className="text-2xs  " > name : {c.title}</div>
            <div className="text-xs text-gray-400 font-bold"> case no: 1123</div>
            <div className="text-xs text-gray-400 font-bold"> date: may, 2nd 2019</div>
            </div>
            <div className="text-sm font-bold bg-white h-full w-full flex items-end  justify-end " > <Link className="hover:bg-blue-400 hover:text-white w-36 h-12 flex justify-center items-center rounded " href={`/cases/${c.id}`}> View</Link> </div>
            </div> 
           

        </div>   
         ))}
    </div>
    </div>
    

  )
}

export default page