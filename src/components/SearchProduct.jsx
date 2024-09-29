const searchProduct = ({
  filterText,
  setFilterText,
  companySearch,
  setCompanySearch,
}) => {
  return (
    <form>
      <input
        type="text"
        value={filterText}
        placeholder="Search..."
        onChange={(e) => setFilterText(e.target.value)}
      />
      <br />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <label htmlFor="company" style={{ marginRight: "3px" }}>
          Search company :
        </label>
        <input
          type="checkbox"
          id="company"
          value={companySearch}
          onChange={() => setCompanySearch(!companySearch)}
          style={{ alignSelf: "flex-end" }}
        />
      </div>
    </form>
  );
};
export default searchProduct;
