import "./App.css";
import "./Die.css";
import "./PropertyList.css";
import Die from "./Die";
import "./Pokemon.css";
import Pokemon from "./Pokemon";
import Greeter from "./Greeter";
import ListPicker from "./ListPicker";
import DoubleDice from "./DoubleDice";
import Slots from "./Slots";
import ShoppingList from "./ShoppingList";
import PropertyList from "./PropertyList";
import Clicker from "./Clicker";
import Form from "./Form";
import Counter from "./Counter";
import Toggler from "./Toggler";
import ToggleCounter from "./ToggleCounter";

// const data = [
//   {item: "eggs", quantity: 12, completed: true},
//   {item: "milk", quantity: 1, completed: false},
//   {item: "bread", quantity: 2, completed: false},
//   {item: "cheese", quantity: 5, completed: false},
// ];

const properties = [
  { id: 129031, name: "Desert Yurt", rating: 4.9, price: 150 },
  { id: 129331, name: "Lone Mountain Cabin", rating: 4.8, price: 250 },
  { id: 129032, name: "Cactus Retreat", rating: 4.75, price: 300 },
  { id: 129033, name: "Redwood Treehouse Escape", rating: 4.9, price: 120 },
  { id: 129034, name: "Oceanview Condo", rating: 4.7, price: 140 },
  { id: 129035, name: "Gold Miner Campground", rating: 4.69, price: 96 },
];

function App() {
  return (
    <div>
      {/* <PropertyList properties={properties} />
      <Clicker message="Hello World" buttonText="Click Me" />
      <Form /> */}

      <Counter />

      <Toggler />

      <ToggleCounter />
    </div>
  );
}

export default App;

//https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png
