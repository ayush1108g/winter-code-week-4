import "bootstrap/dist/css/bootstrap.min.css";
import "./footer.css";
import { scrollToHandler } from "../../store/scrollTo";
export default function A() {

  return (<div className="footer-category">
    <div className="container">
      {/* <h2 className="footer-category-title">Brand directory</h2> */}
      <div className="footer-category-box">
        <h3 className="category-box-title">Books :</h3>
        <li className="footerCategoryLink" onClick={() => { scrollToHandler('NCERT', 100) }}>NCERT &nbsp;|</li>
        <li className="footerCategoryLink"> &nbsp; Banking &nbsp; |</li>
        <li className="footerCategoryLink"> &nbsp; SSC &nbsp; |</li>
        <li className="footerCategoryLink" onClick={() => { scrollToHandler('GATE', 100) }}> &nbsp; GATE &nbsp; |</li>
        <li className="footerCategoryLink" onClick={() => { scrollToHandler('UPSC', 100) }}> &nbsp; UPSC &nbsp; |</li>
        <li className="footerCategoryLink" onClick={() => { scrollToHandler('NEET', 100) }}> &nbsp; NEET &nbsp; |</li>
        <li className="footerCategoryLink" onClick={() => { scrollToHandler('JEE', 100) }}> &nbsp; IIT-JEE &nbsp;</li>
      </div>

      <div className="footer-category-box">
        <h3 className="category-box-title">Notes :</h3>

        <li className="footerCategoryLink"> &nbsp; Physics &nbsp; |</li>
        <li className="footerCategoryLink"> &nbsp; Chemistry &nbsp; |</li>
        <li className="footerCategoryLink"> &nbsp; Biology &nbsp; |</li>
        <li className="footerCategoryLink"> &nbsp; Maths &nbsp; |</li>
        <li className="footerCategoryLink"> &nbsp; Class 12th &nbsp; |</li>
        <li className="footerCategoryLink"> &nbsp; Class 11th &nbsp; |</li>
        <li className="footerCategoryLink"> &nbsp; Zoology &nbsp; |</li>
        <li className="footerCategoryLink"> &nbsp; Geography &nbsp; |</li>
        <li className="footerCategoryLink"> &nbsp; Botany &nbsp;</li>
      </div>

      <div className="footer-category-box">
        <h3 className="category-box-title">Exams :</h3>

        <li className="footerCategoryLink" onClick={() => { scrollToHandler('JEE', 100) }}>&nbsp; IIT-JEE&nbsp; |</li>
        <li className="footerCategoryLink" onClick={() => { scrollToHandler('NEET', 100) }}>&nbsp; NEET &nbsp; |</li>
        <li className="footerCategoryLink">&nbsp; NDA &nbsp; |</li>
        <li className="footerCategoryLink">&nbsp; Banking &nbsp; |</li>
        <li className="footerCategoryLink" onClick={() => { scrollToHandler('UPSC', 100) }}>&nbsp;UPSC &nbsp; |</li>
        <li className="footerCategoryLink">&nbsp; KVPY &nbsp; |</li>
        <li className="footerCategoryLink">&nbsp; SSC &nbsp; |</li>
        <li className="footerCategoryLink">&nbsp; Railway&nbsp; |</li>
        <li className="footerCategoryLink">&nbsp; Defence &nbsp; |</li>
        <li className="footerCategoryLink">&nbsp; WBJEE &nbsp;</li>
      </div>

      <div className="footer-category-box">
        <h3 className="category-box-title" onClick={() => { scrollToHandler('catagories', 100) }}>Courses :</h3>

        <li className="footerCategoryLink" onClick={() => { scrollToHandler('JEE', 100) }}>&nbsp; IIT-JEE &nbsp;|</li>
        <li className="footerCategoryLink" onClick={() => { scrollToHandler('NEET', 100) }}>&nbsp; NEET&nbsp;|</li>
        <li className="footerCategoryLink" onClick={() => { scrollToHandler('NCERT', 100) }}>&nbsp; NCERT&nbsp;|</li>
        <li className="footerCategoryLink" onClick={() => { scrollToHandler('UPSC', 100) }}>&nbsp; UPSC&nbsp;|</li>
        <li className="footerCategoryLink" onClick={() => { scrollToHandler('WEB-DEV', 100) }}>&nbsp; Web Dev&nbsp;|</li>
        <li className="footerCategoryLink" onClick={() => { scrollToHandler('GAME-DEV', 100) }}>&nbsp; Game Dev&nbsp;</li>
      </div>
    </div>
  </div>);
}