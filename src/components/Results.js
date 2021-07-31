import React from "react";

function Results({resultsClass, results}) {
    return(
        <div className="Results">
            <div className={resultsClass}>
                {results.map(brewery => (
                    <div className="card">
                        <h2>{brewery.name}</h2>
                        <p>City: <span>{brewery.city}</span></p>
                        <p>State: <span>{brewery.state}</span></p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Results;