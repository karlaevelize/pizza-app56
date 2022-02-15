import { useSelector, useDispatch } from "react-redux"
import { selectPizzas } from "../store/pizzas/selectors"
import { selectUser } from "../store/user/selector"
import { toggleFavorite } from "../store/user/actions"
import AddPizzaForm from "./AddPizzaForm"

//TODO
//1. Display a list of pizzas
//Step 1. Define a selector in the state
//Step 2. Import the selector in the component
//Step 3. Import useSelector
//Step 4. Pass selector to useSelector/Console.log the selected data
//Step 5. Map the data

//2. Have a form to add pizzas

export default function PizzaList(){

  const pizzas = useSelector(selectPizzas)
  // console.log("pizzas", pizzas)

  const user = useSelector(selectUser)
  // console.log("user", user)

  const dispatch = useDispatch()

  return (
    <div>
      <h1>Pizza List</h1>
      <h3>Welcome {user.name}, here is our list:</h3>
      <AddPizzaForm/>
      {!pizzas 
        ? "Loading"
        : pizzas.map(pizza => {
          return (
            <div>
              <h2>{pizza.name}</h2>
              <p>
                <button onClick={() => dispatch(toggleFavorite(pizza.id))}>{user.favorites.includes(pizza.id) ? "♥" : "♡"}</button>
              </p>
              <img style={{width: 200}} src={pizza.image}/>
              <p>{pizza.description}</p>
            </div>
          )
        })}
    </div>
  )
}