import { useEffect } from "react";
import { useState } from "react"

const getQuote = () => {
    const response = fetch("http://quotes.stormconsultancy.co.uk/random.json")
    .then(response => response.json())
    .then(json => {
        return json;
    })
    
    return response;
}

const Quote = () => {   
    
    let [ quote, setQuote ] = useState({});

    useEffect(() => {

        (async function fetchQuote() {

            let quote = await getQuote();
            setQuote(quote);

        })();
    }, []);

    return (
        <div className="Quote">
            <p>
                {quote.quote}
            </p>
            <strong>
                <p>
                    {quote.author}
                </p>
            </strong>
        </div>
    )
}

export default Quote;