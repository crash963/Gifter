import BotSection from "./components/BotSection";
import TopSection from "./components/TopSection";
import ReviewSlider from "./components/TopSection";

function Welcome() {
    return (
        <section class="welcome__page">
            <TopSection />
            <BotSection />
            <ReviewSlider />
        </section>
    );
}
export default Welcome;
