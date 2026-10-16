import { Fragment } from "react";
export function Weather({ data }) {
  return (
    <div>
      <h1>Weather app</h1>
      <div>
        {data.map((d, index) => (
          <Fragment key={d.id || index}>
            <h2>
              <strong>City:{d.city}</strong>
            </h2>
            <p>temperature:{d.temperature}C</p>
            <p>condition:{d.condition}</p>
          </Fragment>
        ))}
      </div>
    </div>
  );
}
