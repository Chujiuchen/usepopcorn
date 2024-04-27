import React from "react";
import ReactDOM from "react-dom/client";
// import { useState } from "react";
import "./index.css";
import App from "./App";
// import StarRating from "./StarRating";

// function Test() {
//   const [a, setA] = useState(0);
//   return (
//     <div>
//       <StarRating maxRating={10} size={90} onSetRating={setA} />
//       <span>this is a {a}</span>
//     </div>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <Test />
    <StarRating maxRating={20} />
    <StarRating maxRating={10} size={90} />
    <StarRating maxRating={10} size={20} />
    <StarRating
      maxRating={5}
      size={20}
      messages={["Terrible", "Bad", "Average", "Good", "Excellent"]}
      defaultRating={3}
    /> */}
  </React.StrictMode>
);
