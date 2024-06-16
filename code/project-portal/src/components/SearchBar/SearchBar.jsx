import './SearchBar.css';

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <select name="filter-options" id="class-filter">
        <option value="class-1">Class 1</option>
        <option value="class-2">Class 2</option>
        <option value="class-3">Class 3</option>
      </select>
      <input
        type="search"
        role="searchbox"
        placeholder="Search for..."
        className="search-input"
        value={searchQuery}
        onChange={handleInputChange}
      />
      <button type="submit">SUBMIT</button>
    </form>
  );
};

export default SearchBar;
