import Img1 from "../store/img1.avif";
// import Button from '../UI/Button';
import "./course-detail.css";
export default function CourseDetail() {
  return (
    <>
      <div className="flex flex-row justify-center h-screen" id="course-detail">
        <span id="title">
          <img src={Img1} alt="" />
          <div id="price">
            <span>
              <h2>Title</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                architecto distinctio labore tenetur quaerat, deserunt
                reprehenderit amet earum asperiores deleniti alias vel quod
                pariatur at rem provident fugit hic autem!
              </p>


              <h1 id="instructor">Instructor</h1>
              <span id="about">
                <img src={Img1} alt="" />
                <h2>Name</h2>
              </span>
            </span>
            <span>
              <h2 className="price">Price</h2>
            </span>
          </div>
        </span>
        <span id="List">
          <h1>This Course Contains:</h1>
          <ul>
            <li>List elements</li>
            <li>List elements</li>
            <li>List elements</li>
            <li>List elements</li>
            <li>List elements</li>
            <li>List elements</li>
            <li>List elements</li>
          </ul>
          <button id="enroll-button">Enroll Course</button>
        </span>
      </div>
    </>
  );
}
