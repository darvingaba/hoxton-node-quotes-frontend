import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";


type Props={
    quotes:Qoute[],
    deleteQuote:()=>void
}
type Qoute={
    id:number,
    text:string,
    firstName:string
    lastName:string
    age:string
    image:string
}



export function Quotes(){
  let [quotes, setQuotes] = useState<Qoute[]>([]);
  let [quote,setQuote]=useState<Qoute>({} as Qoute)
  // console.log(quote)
  // console.log(quotes);
  const param = useParams();
  console.log(param)

  useEffect(() => {
    fetch("http://localhost:3001/")
      .then((resp) => resp.json())
      .then((resp) => setQuotes(resp));
  }, []);

  // function deleteQuote() {
  //   fetch(`http://localhost:3001/${params.id}`, {
  //     method: "DELETE",
  //   })
  //     .then((resp) => resp.json())
  //     .then((resp) => setQuotes(resp));
  // }
  function deleteQuote() {
    fetch(`http://localhost:3001/${param.id}`)
      .then((resp) => resp.json())
      .then((resp) => console.log(resp))
  }

    return (
      <>
        <Link to={"/randomQuotes"}>
          <button>Random Quote</button>
        </Link>
        <ul>
          {quotes.map((quote) => (
            <li className="quote" key={quote.id}>
              <button
                onClick={() => {
                  fetch(`http://localhost:3001/${quote.id}`, {
                    method: "DELETE",
                  })
                    .then((resp) => resp.json())
                    .then((resp) => setQuotes(resp));
                }}
                className="xButton"
              >
                X
              </button>
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