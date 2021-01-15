
// Setting up filters default object
const filters = {
    searchText : '',
    hideCompleted : false
}


// getFilters
const getFilters = () => filters

// setFilters
const setFilters = ({searchText, hideCompleted}) => {  //destructured
    if(typeof searchText === 'string'){
        filters.searchText = searchText
    }
    if(typeof hideCompleted === "boolean"){
        filters.hideCompleted = hideCompleted
    }
}


// setting up the exports
export {getFilters, setFilters}