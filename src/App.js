import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Homepage from "./pages/Homepage/Homepage";
function App() {
  return (
    <BrowserRouter>
      <main>
        <Navbar />
        <Switch>
          <Route path="/" component={Homepage} exact />
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export default App;
