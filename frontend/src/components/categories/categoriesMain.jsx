import Categories from "./categories";
import CourseSectionMain from "./courseSectionMain";
import { useSelector } from "react-redux";
export default function CategoriesMain() {
    const isAuth = useSelector(state => state.auth.isAuthenticated);

    return (
        <div>
            <section id="catagories"
                style={{ backgroundImage: isAuth ? 'linear-gradient(to bottom, #09161f, #2470a2,#ffff)' : '' }}
            >
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

        </div>
    );
}