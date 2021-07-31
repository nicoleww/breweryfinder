

function Search({handleRange, searchBarClass, handleUserInput,handleSearch}) {
    return(
        <div className="Search">
            <div className="region">
                <p>Search by:</p>
                <div className="search-btns">
                    <button onClick={() => {handleRange("state")}}>State</button>
                    <button onClick={() => {handleRange("city")}}>City</button>
                </div>
            </div>
            <div className={searchBarClass}>
                <form onSubmit={handleSearch}>
                    <input type="text" onChange={handleUserInput} />
                    <button>Enter</button>
                </form>
            </div>
        </div>
    )
}

export default Search;