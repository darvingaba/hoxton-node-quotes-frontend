import { Link } from "react-router-dom";

type Props={
    quotes:Qoute[]
}
type Qoute={
    id:number,
    text:string,
    author:string
}

export function Quotes({quotes}:Props){
    return (
      <>
        <Link to={"/random"}>
          <button>Random Quote</button>
        </Link>
        <ul>
          {quotes.map((quote) => (
            <li className="quote"key={quote.id}>
              <p>{quote.text}</p>
              <h2>{quote.author}</h2>
            </li>
          ))}
        </ul>
      </>
    );
}