import "./SearchBar.css"
const SearchBar = () => {
    return(
        <form className="search-form">
            <select name="filter-options" id="class-filter">
                <option value="class-1">Class 1</option>
                <option value="class-2">Class 2</option>
                <option value="class-3">Class 3</option>
            </select>
<<<<<<< HEAD
        <input type="search" role="searchbox" placeholder="Search for..." className="search-input"/>
=======
        <input type="search" placeholder="Search for..." className="search-input"/>
>>>>>>> main
        <button type="submit">SUBMIT</button>  
        </form>
    )
} 

export default SearchBar;