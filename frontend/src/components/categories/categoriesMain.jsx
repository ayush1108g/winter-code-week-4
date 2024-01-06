import Categories from "./categories";
import CourseSectionMain from "./courseSectionMain";
import { useRef } from "react";
export default function CategoriesMain() {
    const JEE = useRef(null);

    const scrollintoView = (ref) => {
        ref.current.scrollIntoView({ behavior: "smooth" });
    }

    return (
        <>
            <section id="catagories">
                <ul>
                    <Categories title="JEE" onClick={() => { scrollintoView(JEE) }}></Categories>
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
                <CourseSectionMain ref={JEE} title="JEE" />
                <CourseSectionMain title="NEET" />
            </section>
        </>
    );
}