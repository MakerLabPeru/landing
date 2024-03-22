import { SocialNav } from "~/components/SocialNav";
import Hero from "./Hero";
import Support from "./Support";
import About from "./About/index";
import LatestActivities from "./LatestActivities";

const Home = () => (
  <div>
    <div className="fixed right-0 z-50">
      <SocialNav />
    </div>

    <Hero />
    <Support />
    <About />
    {/*<LatestActivities />*/}
  </div>
);

export default Home;
