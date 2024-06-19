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
      <input
        type="search"
        role="searchbox"
        placeholder="Search for..."
        className="search-input"
        value={searchQuery}
        onChange={handleInputChange}
      />
    </form>
  );
};

export default SearchBar;
