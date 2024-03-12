
export default function PropertyListItems({ name, rating, price }) {
    return (
        <div className="PropertyListItems">
        <h2>{name}</h2>
        <h3>${price} a night</h3>
        <h4>{rating}⭐️</h4>
      </div>
    )
}