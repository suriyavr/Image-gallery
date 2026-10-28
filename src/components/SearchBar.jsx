function SearchBar({ query, onChange }) {
  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => onChange(e.target.value)}
      />
      <span>🔍</span>
    </div>
  );
}

export default SearchBar;