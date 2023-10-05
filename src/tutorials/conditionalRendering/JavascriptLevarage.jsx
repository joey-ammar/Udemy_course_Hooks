import { people } from "../../data";
import JavascriptLevarageTwo from "./JavascriptLevarageTwo";

const JavascriptLevarage = () => {
  return (
    <div>
      <JavascriptLevarageTwo {...people} />
    </div>
  );
};
export default JavascriptLevarage;
