import Categories from "./categories";
import CourseSectionMain from "./courseSectionMain";
import { scrollToHandler } from "../../store/scrollTo";
export default function CategoriesMain() {

    return (
        <div>
            <section id="catagories">
                <ul>
                    <Categories title="JEE" onClick={(e) => { scrollToHandler(console.log(e)) }}></Categories>
                    <Categories title="NEET"></Categories>
                    <Categories title="NCERT"></Categories>
                    <Categories title="UPSC"></Categories>
                    <Categories title="WEB-DEV"></Categories>
                    <Categories title="GAME-DEV"></Categories>
                </ul>
            </section>
            <section style={{ height: '100vh', width: '100%' }}>

            </section>
            <section>
                <CourseSectionMain id='JEE' title="JEE" />
                <CourseSectionMain title="NEET" />
            </section>
        </div>
    );
}