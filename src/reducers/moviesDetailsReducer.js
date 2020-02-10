export default function(state = [], action) {
    if(action.type === "SET_MOVIES_LIST") {
        return action.payload;
    } 

    return state;
}