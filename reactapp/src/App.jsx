import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";
import catService from "./api/catService";

function App() {
  const [arrCats, setArrCats] = useState([]);
  async function getCats() {
    const response = await catService.getAll();
    setArrCats(response.data);
  }

  useEffect(() => {
    getCats();
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
      </div>
    </BrowserRouter>
  );
}

export default App;
