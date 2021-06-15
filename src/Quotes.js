import { React, useState } from "react";
import { Link } from "react-router-dom";
import quotes from "./quotes.json";
import "./style.css";

function Quotes() {
  const values = Object.values(quotes);
  const randomValue1 = values[parseInt(Math.random() * values.length)];
  const randomValue2 = values[parseInt(Math.random() * values.length)];
  const randomValue3 = values[parseInt(Math.random() * values.length)];
  const randomValue4 = values[parseInt(Math.random() * values.length)];
  const randomValue5 = values[parseInt(Math.random() * values.length)];
  const randomValue6 = values[parseInt(Math.random() * values.length)];
  const randomValue7 = values[parseInt(Math.random() * values.length)];
  const [state1, setState1] = useState(randomValue1);
  const [state2, setState2] = useState(randomValue2);
  const [state3, setState3] = useState(randomValue3);
  const [state4, setState4] = useState(randomValue4);
  const [state5, setState5] = useState(randomValue5);
  const [state6, setState6] = useState(randomValue6);
  const [state7, setState7] = useState(randomValue7);

  const author1 = state1.author;
  const quote1 = state1.quote;
  const author2 = state2.author;
  const quote2 = state2.quote;
  const author3 = state3.author;
  const quote3 = state3.quote;
  const author4 = state4.author;
  const quote4 = state4.quote;
  const author5 = state5.author;
  const quote5 = state5.quote;
  const author6 = state6.author;
  const quote6 = state6.quote;
  const author7 = state7.author;
  const quote7 = state7.quote;
  return (
    <div className="App">
      <div>
        <h2>Quotes of the Day</h2>
        <h1 className="myRandomQuote">
          {quote1} <br /> {author1}{" "}
        </h1>
        <h1 className="myRandomQuoteEven">
          {quote2} <br /> {author2}{" "}
        </h1>
        <h1 className="myRandomQuote">
          {quote3} <br /> {author3}{" "}
        </h1>
        <h1 className="myRandomQuoteEven">
          {quote4} <br /> {author4}{" "}
        </h1>
        <h1 className="myRandomQuote">
          {quote5} <br /> {author5}{" "}
        </h1>
        <h1 className="myRandomQuoteEven">
          {quote6} <br /> {author6}{" "}
        </h1>
        <h1 className="myRandomQuote">
          {quote7} <br /> {author7}{" "}
        </h1>
      </div>
      <br />
      <br />
      <Link className="back" to="/">
        Back
      </Link>
    </div>
  );
}
export default Quotes;
