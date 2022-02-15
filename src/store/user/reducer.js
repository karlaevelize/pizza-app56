const initialState = {
  name: 'Helva',
  id: 42,
  favorites: [
    67283,
    357311,
  ]
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "user/toggleFavorite": {
      console.log("action.payload", action.payload)
      
      const updatedFavorites = state.favorites.includes(action.payload)
        ? state.favorites.filter(id => id !== action.payload)
        : [...state.favorites, action.payload]

      console.log("updated", updatedFavorites)

      return {
        ...state,
        favorites: updatedFavorites
      }
    }
    default: {
      return state;
    }
  }
}