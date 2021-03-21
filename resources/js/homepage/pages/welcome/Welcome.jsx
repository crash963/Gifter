import BotSection from "./components/BotSection";
import TopSection from "./components/TopSection";
import ReviewSlider from "./components/ReviewSlider";

function Welcome() {
    async function fetchCurrentUser() {
        const response = await fetch("/api/current-user");
        if (response.status == 200) {
        }
    }

    return (
        <section className="welcome__page">
            <TopSection />
            <BotSection />
            <ReviewSlider />
        </section>
    );
}
export default Welcome;
