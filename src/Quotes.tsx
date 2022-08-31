import { Link } from "react-router-dom";

type Props={
    quotes:Qoute[]
}
type Qoute={
    id:number,
    text:string,
    firstName:string
    lastName:string
    age:string
    image:string
}

export function Quotes({quotes}:Props){
    return (
      <>
        <Link to={"/random"}>
          <button>Random Quote</button>
        </Link>
        <ul>
          {quotes.map((quote) => (
            <li className="quote" key={quote.id}>
              <p>{quote.text}</p>
              <img className="quoteImg" src={quote.image} alt="" />
              <div className="name">
                <h2>{quote.firstName}</h2>
                <h2>{quote.lastName}</h2>
              </div>
              <p>Age : {quote.age}</p>
            </li>
          ))}
        </ul>
      </>
    );
}