import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Chai from "./chai.jsx";

function FunApp(){
  return(
    <h3>function inside main</h3>
  )
}
// const ReactElement = {
//   type: 'a',
//   props: {
//       href: "https://www.google.com",
//       target: '_blank'
//   },
//   children: 'Click me to visit google'
// }  //it will not work cuz of syntax error

const AnotherReactElement = (
  <a href="https://www.google.com" target='_blank'>Visit google</a>
)

//a function according to react
const ReactElement = (
  'a', //tags
  {href: "https://www.google.com", target: '_blank'},
  'Visit Google Official'
)

createRoot(document.getElementById("root")).render(
  
    <App />
  
);
