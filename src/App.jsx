import "./App.css";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import NavBar from "./componentes/NavBar/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer message="¡Bienvenido a Tienda Electrónica!" />
    </>
  );
}

export default App;
