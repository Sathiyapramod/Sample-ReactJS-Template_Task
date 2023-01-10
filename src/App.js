import Card1 from "./Card1.js";
import Card2 from "./Card2.js";
import Card3 from "./Card3.js";
import './App.css';

function App() {
  console.log(Card2);
  return (
    <div className="App">
      <div className="mx-auto p-3 container-md box-container">
        <div className="container d-flex justify-content-center flex-row flex-wrap gap-3 mt-3 p-3">
          <Card1 />
          <Card2 />
          <Card3 />
        </div>
      </div>
    </div>
  );
}
export default App;
