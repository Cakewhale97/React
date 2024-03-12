import "./styles/Container.css";
import "./styles/Header.css";
import "./styles/City.css";
import Header from "./Header";
import City from "./City";
import Class from "./Class";
import FormData from "./FormData";




export default function Container() {
  return (
    <div className="Container">
      <Header />
        <City />
        <Class />
        <FormData />
       

    </div>
  );
}
