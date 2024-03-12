# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

npm run dev - to start the server

function App() {
return (
<>
{/_ <Pokemon /> _/}
{/_ <Greeter name="Jassin" from="Sweden"/> _/}
{/_ // Quotes for String and everything else will be passed through {}. _/}
{/_ <Die numSides = {20}/>
<Die numSides = {6} />
<Die numSides = {10} /> _/}
{/_  
 <ListPicker values={[1, 2, 3]} />
<ListPicker values={['a', 'b', 'c']} /> _/}

   <DoubleDice />
   <DoubleDice />
   <DoubleDice />

</>

       <div>
      <Slots val1="🍒" val2="🍒" val3="🍒" />
      <Slots val1="🍒" val2="🍊" val3="🍒" />
    </div>




Onsdag 28 Feb 
- PropTypes -- You import it and then set it up like this
import PropTypes from "prop-types";

ShoppingList.propTypes = {
    items: PropTypes.string,
    quantity: PropTypes.number,
    completed: PropTypes.bool,
};  

State 
- Data specific to an instance of a component. CAN CHANGE.

What goes in a state?
- Data fetched from an API. 
- Form information
- A variable that decides whether something is showing or hidden.
- Ask yourself: Will this ever change? If so, it should go in a state somewhere!
