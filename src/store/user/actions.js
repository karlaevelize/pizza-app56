export const toggleFavorite = (id) => {
  console.log("id", id)
  return {
    type: "user/toggleFavorite",
    payload: id
  }
}