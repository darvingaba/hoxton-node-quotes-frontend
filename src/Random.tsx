import { useEffect, useState } from "react";
type Qoute = {
  id: number;
  text: string;
  firstName: string;
  lastName: string;
  age: string;
  image: string;
};
export function Random() {
  let [randomQuote, setRandomQuote] = useState({} as Qoute);
  console.log(randomQuote)

  useEffect(() => {
    fetch("http://localhost:3001/")
      .then((resp) => resp.json())
      .then((resp) => setRandomQuote(resp));
  }, []);
  return (
    <div className="quote">
      <p>{randomQuote.text}</p>
      <h2>{randomQuote.firstName}</h2>
    </div>
  );
}
