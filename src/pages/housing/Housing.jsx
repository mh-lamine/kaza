import { useParams } from "react-router-dom"
import "./Housing.scss"
import houseList from "../../assets/houses.json"

export default function Housing() {
  // const [houses] = useState(houseList)
  const id = useParams().id
  const house = houseList.find(house => house.id == (id))

  return (
    <div>
      <h1>{house.title}</h1>
      <p>{house.description}</p>
      <img src={house.cover} alt={house.title} />
    </div>
  )
}
