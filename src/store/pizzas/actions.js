export const addPizza = (name, description, image) => {
  // console.log("items", name, description, image)
  return {
    type: "pizzas/addPizza",
    payload: { name, description, image }
  }
}