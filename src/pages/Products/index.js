import { useParams } from "react-router-dom";
export default function Products() {
    const {id} = useParams();
  return (
    <div>
      produto é {id}
    </div>
  )
}
