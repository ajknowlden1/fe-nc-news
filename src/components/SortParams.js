const SortParams = (props) => {
  return (
    <span className="sort-params">
      <h3>Sort by</h3>
      <form>
        <select
          onBlur={(event) => props.setSort(event.target.value)}
          className="sort-by"
        >
          <option>Date created</option>

          <option>Votes</option>
          <option>Comment count</option>
        </select>
        <h3>Order</h3>
        <select
          onBlur={(event) => props.setOrder(event.target.value)}
          className="order"
        >
          <option>Ascending</option>
          <option>Descending</option>
        </select>
      </form>
    </span>
  );
};

export default SortParams;
