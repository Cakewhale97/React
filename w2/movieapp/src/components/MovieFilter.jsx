import FilterApi from "./FilterApi";
import "../styles/MovieFilter.css";

export default function MovieFilter() {
  return (
    <div className="MovieFilterContainer">
      <div className="Filtered">
        <FilterApi />
      </div>
    </div>
  );
}
