// state argument isn't application state, only state piece reducer is responsible for.
// state is set to null go prevent undefined being passed into reducers since redux will throw an error
export default function(state=null, action) {
  switch (action.type) {
  case 'BOOK_SELECTED':
    return action.payload;
  }
  return state;
}
