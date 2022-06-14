const SortParams = () => {
  return (
    <span className="sort-params">
      <h3>Sort by</h3>
      <select className="sort-by">
        <option>Date created</option>
        <option>Author</option>
        <option>Votes</option>
        <option>Comment count</option>
      </select>
      <h3>Order</h3>
      <select className="order">
        <option>Ascending</option>
        <option>Descending</option>
      </select>
    </span>
  );
};

export default SortParams;
