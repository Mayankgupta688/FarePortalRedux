export default function(state=[], action) {
    debugger;
    if(action.type === "SET_MOVIE_LIST") {
        return action.payload;
    } 

    return state;
}