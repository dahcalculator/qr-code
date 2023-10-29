





async function getCase(id) {

  const res = await fetch('http://localhost:4000/cases/' + id, {
    next:{
      revalidate: 60
    }
  });

  return res.json();

}

const page = async ({params}) => {
  const caseDetails = await getCase(params.id);
  
  console.log(caseDetails)

  return (
    <div>
   
     <article className="space-y-4  p-4">
      <nav>{caseDetails.id}</nav>
         <div className="capitalize">
             <div className="font-bold"> title: {caseDetails.title}</div>
             <div> <span className="font-bold"> Date:</span> 2nd match 2029</div>
             <div> <span className="font-bold"> case:</span> 1172 </div>
         </div>

         <div>
             image
         </div>
         <div>
        {caseDetails.body}
         </div>
     </article>

 </div>
  )
}

export default page