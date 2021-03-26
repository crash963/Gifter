import BotSection from "./components/BotSection";
import TopSection from "./components/TopSection";
import ReviewSlider from "./components/ReviewSlider";
import { useEffect } from "react";

function Welcome() {
    async function fetchCurrentUser() {
        const response = await fetch("/api/current-user");
        const data = await response.json();
        console.log(data);
        if (data) {
            window.location.href = "/profile";
        }
    }

    useEffect(() => {
        fetchCurrentUser();
    }, []);

    return (
        <section className="welcome__page">
            <TopSection />
            <BotSection />
            <ReviewSlider />
        </section>
    );
}
export default Welcome;
