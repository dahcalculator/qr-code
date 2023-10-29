import React from 'react'


async function getCases() {

  const res = await fetch('http://localhost:4000/cases');

  return res.json();
}



const cases = await getCases();


const CasePage = () => {
  return (
    <div>
       {
           cases.map((c)=>(
            
        <article className="space-y-4  p-4">
            <div className="capitalize">
                <div className="font-bold"> title: {c.title}</div>
                <div> <span className="font-bold"> Date:</span> 2nd match 2029</div>
                <div> <span className="font-bold"> case:</span> 1172 </div>
            </div>
            <div>
                image
            </div>
            <div>
           {c.body}
            </div>
        </article>
         ))}
    </div>
  )
}

export default CasePage