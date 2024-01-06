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
                <CourseSectionMain id='JEE' title="JEE" playlistid='PLxyGaR3hEy3j2EpdM6bvkA2Q87ey5j0sU' />
                <CourseSectionMain id='NEET' title="NEET" playlistid="PLktE8rb6pVnheLBgx6tNh8-mifuCj3BQA" />
                <CourseSectionMain id='NCERT' title="NCERT" playlistid="PLW9kB_HKs3_PpsMgy-OdGWT6UmWAKefBh" />
                <CourseSectionMain id='UPSC' title="UPSC" playlistid="PLpuxPG4TUOR4QlVSsxdH6ReoQxaQad-tM" />
                <CourseSectionMain id='WEB-DEV' title="WEB-DEV" playlistid="PLoYCgNOIyGAB_8_iq1cL8MVeun7cB6eNc" />
                <CourseSectionMain id='GAME-DEV' title="GAME-DEV" playlistid="PLdOT12odxrUrUExBUuM5KoN0fAnOdzH1L" />
            </section>
            <iframe
                title="123"
                width="1000"
                height="500"
                src="https://www.youtube.com/embed/videoseries?list=PLxyGaR3hEy3j2EpdM6bvkA2Q87ey5j0sU"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
            ></iframe>
        </div>
    );
}