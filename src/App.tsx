import { Navigate, Route, Routes, useParams } from "react-router-dom";
import "./App.css";
import { Quotes } from "./Quotes";
import { Random } from "./Random";
type Qoute = {
  id: number;
  text: string;
  author: string;
};
type Quotes = {
  quotes: Qoute[];
};
function App() {
  
  return (
    <div className="App">
      <Routes>
        <Route index element={<Navigate to="/quotes" />} />
        <Route path="quotes" element={<Quotes />} />
        <Route path="randomQuotes" element={<Random />}></Route>
      </Routes>
    </div>
  );
}

export default App;
