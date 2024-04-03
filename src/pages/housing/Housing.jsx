import { useParams } from "react-router-dom"

export default function Housing() {
  let id = useParams().id
  return (
    <div>Housing {id}</div>
  )
}
