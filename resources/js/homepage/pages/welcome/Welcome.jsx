import BotSection from "./components/BotSection";
import TopSection from "./components/TopSection";
import ReviewSlider from "./components/ReviewSlider";

function Welcome() {
    return (
        <section className="welcome__page">
            <TopSection />
            <BotSection />
            <ReviewSlider />
        </section>
    );
}
export default Welcome;
