import { useFilterContext } from "./FilterContext";

function Filter() {
  console.count("Filter render");

  const { filter, setFilter } = useFilterContext();

  return (
    <>
      <p>Select Filter:</p>
      <select value={filter} onChange={(e) => setFilter(e.target.value)}>
        <option value="">No filter</option>
        <option value="date">By Date</option>
        <option value="name">By Name</option>
        <option value="range">By Range</option>
      </select>
    </>
  );
}

export { Filter };
