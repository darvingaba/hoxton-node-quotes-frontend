import { useEffect, useState } from "react";
type Qoute = {
  id: number;
  text: string;
  author: string;
};
export function Random() {
  let [randomQuote, setRandomQuote] = useState({} as Qoute);
  // console.log(randomQuote)

  useEffect(() => {
    fetch("http://localhost:3001/random")
      .then((resp) => resp.json())
      .then((resp) => setRandomQuote(resp))
  }, [randomQuote])
  return (
    <div className="quote">
      <p>{randomQuote.text}</p>
      <h2>{randomQuote.author}</h2>
    </div>
  );
}
