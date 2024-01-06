import Img1 from "../store/img1.avif";
import "./card.css";
export default function Card(props) {
  return (
    <div id="card-detail">
      <span id="card-title">
        <img src={props.image || Img1} alt={props.title} style={{ minWidth: '25vw' }} />
      </span>
      <span id="card-list">
        <h1>{props.title.split(" ").splice(0, 15).join(" ") || 'This Course Contains:'}</h1>
        <p>
          {props.description.replace(/<[^>]+>/g, "").split(" ").splice(0, 75).join(" ") || 'This Course Contains: ...'}
        </p>
      </span>
    </div>
  );
}
