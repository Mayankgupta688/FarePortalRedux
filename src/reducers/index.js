import {combineReducers} from "redux";

import employees from "./employeeDetailsReducer";
import movies from "./moviesDetailsReducer";

export const rootReducer = combineReducers({
    employees: employees,
    movies: movies
})