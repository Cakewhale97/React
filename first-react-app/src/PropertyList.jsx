import PropertyListItems from "./PropertyListItems";
import "./PropertyList.css";
export default function PropertyList({ properties }) {
  return (
    <div className="PropertyList">
      {properties.map((p) => {
        return <PropertyListItems {...p} key={p.id} />;
      })}
    </div>
  );
}
