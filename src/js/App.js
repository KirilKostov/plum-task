import "../scss/app.scss";
import { Header } from "./components/Header";
import { BookingPanel } from "./components/BookingPanel";
import { Property } from "./components/Property";

function App() {
  return (
    <div className="App">
      <Header sideMenu search title="Plum Guide" />
      <BookingPanel />
      <Property />
    </div>
  );
}

export default App;
