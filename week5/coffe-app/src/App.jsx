import AppRouter from './Router/Routes'
import './App.css'
import { ThemeProvider } from "./component/Toggle/Toggle";

function App() {
  return (
    <ThemeProvider>
    <div className="App">
      <AppRouter />
    </div>
    </ThemeProvider>
  )


}

export default App
