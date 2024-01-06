import Img1 from "../store/img1.avif";
import "./card.css";
export default function Card() {
  return (
    <div id="card-detail">
      <span id="card-title">
        <img src={Img1} alt="" />
      </span>
      <span id="card-list">
        <h1>This Course Contains:</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus quia provident dolores? Labore debitis fuga blanditiis
          provident possimus, quae rerum repellat minima beatae tenetur
          consequatur harum ab totam repellendus laborum!
        </p>
      </span>
    </div>
  );
}
