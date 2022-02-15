import { useState } from "react"
import { useDispatch } from "react-redux"
import { addPizza } from "../store/pizzas/actions"

//TODO
//Step 1. I need an action to add a new pizza
//Step 2. Action will have type and payload
//Step 3. Payload will be an object with name, description, image, bought

export default function AddPizzaForm(){

  const [ name, setName ] = useState("")
  const [ description, setDescription ] = useState("")
  const [ image, setImage ] = useState("")

  const dispatch = useDispatch()

  const submit = (event) => {
    event.preventDefault()
    // console.log(name, description, image)
    dispatch(addPizza(name, description, image))
  }

  return (
    <div>
      <form onSubmit={submit}>
        Name: <input value={name} onChange={(e) => setName(e.target.value)}/>
        Description: <input value={description} onChange={(e) => setDescription(e.target.value)}/>
        Image: <input value={image} onChange={(e) => setImage(e.target.value)}/>
        <button type="submit">Add Pizza</button>
      </form>
    </div>
  )
}