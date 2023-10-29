import Card from "../components/Card"
import CardS from "../components/CardS"
import CardT from "../components/CardT"

const page = () => {
  return (
    <div className="flex-col  ">
      <div>
        <Card/>
      </div>
      <div>
        <CardS />
      </div>
      <div>
        <CardT/>
      </div>
      
    </div>
  )
}

export default page