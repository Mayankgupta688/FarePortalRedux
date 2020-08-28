export default function(state=[], action) {
    debugger;
    if(action.type === "SET_EMPLOYEE_LIST") {
        return action.payload;
    } 

    return state;
}