import Footer from "../components/Footer";
import FeatureSection from "../components/FeatureSection";
import TaskHero from "../components/TaskHero";
import MainSection from "../components/MainSection";
import NavBar from "../components/NavBar";

export default function Landing(){
    return(
        <div>
            <NavBar/>
            <TaskHero/>
            <FeatureSection/>
            <MainSection/>
            <Footer/>
        </div>

    )
}