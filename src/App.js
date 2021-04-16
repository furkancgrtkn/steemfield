import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
function App() {
  return (
    <BrowserRouter>
      <main>
        <Navbar />
        <Switch>
          {/* <Route path="/" component={HomePage} exact /> */}
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export default App;
