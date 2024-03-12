import "./styles/Radio.css"

export default function Class() {
  return (
    <div className="Radio">
      <input type="radio" id="dot1" name="dot" value="dot1" />
      <label htmlFor="dot1" className="dot">
        <p>1a class</p>
      </label>
      <input type="radio" id="dot2" name="dot" value="dot2" />
      <label htmlFor="dot2" className="dot">
        <p>2nd class</p>
      </label>
    </div>
  );
}
