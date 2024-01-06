import Categories from "./categories";
import CourseSectionMain from "./courseSectionMain";
// import { scrollToHandler } from "../../store/scrollTo";
export default function CategoriesMain() {

    return (
        <div>
            <section id="catagories">
                <ul>
                    <Categories title="JEE"></Categories>
                    <Categories title="NEET"></Categories>
                    <Categories title="NCERT"></Categories>
                    <Categories title="UPSC"></Categories>
                    <Categories title="WEB-DEV"></Categories>
                    <Categories title="GAME-DEV"></Categories>
                </ul>
            </section>
            <section>
                <CourseSectionMain id='JEE' title="JEE" />
                <CourseSectionMain title="NEET" />
            </section>
        </div>
    );
}