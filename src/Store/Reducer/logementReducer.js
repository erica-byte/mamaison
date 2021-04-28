
const initialState = { favoritesLog: [] };
function toggleactionReducer(state = initialState, action) {
let nextState
switch (action.type) {
case 'TOGGLE_FAVORITE':
const favoriteLogIndex = state.favoritesLog.findIndex(item => item.id === action.value.id)
if (favoriteLogIndex !== -1) {
// Le logement est déjà dans les favoris, on le supprime de la liste
nextState = {
    ...state,
    favoritesLog: state.favoritesLog.filter( (item, index) => index !== favoriteLogIndex)
  }
}
else {
// Le logement n'est pas dans les favoris, on l'ajoute à la liste
nextState = {
    ...state,
    favoritesLog: [...state.favoritesLog, action.value]
  }
}
return nextState || state
default:
return state
}
}
export default toggleactionReducer;