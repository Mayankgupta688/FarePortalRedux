export function setEmployeeList(employeeList) {
    return {
        type: "SET_EMPLOYEE_LIST",
        payload: employeeList
    }
}

export function addMovies(movieList) {
    return {
        type: "SET_MOVIE_LIST",
        payload: movieList
    }
}