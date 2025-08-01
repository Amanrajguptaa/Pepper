import React from "react";
import HeroSection from "../components/HeroSection";
import LabelledSection from "../components/LabelledSection";
import HeroCardSection from "../components/HeroCardSection";
import CarouselSection from "../components/CarouselSection";
import PlaceSection from "../components/PlaceSection";
import Accordian from "../components/Accordian";
import NewsLetter from "../components/NewsLetter";

const labelledSectionData = [
  {
    image:
      "https://framerusercontent.com/images/bo5PFGtg1mLU0lWO3J9CWKVAcM.png?scale-down-to=1024",
  },
  {
    image:
      "https://framerusercontent.com/images/Q2rEr3IGpX893CKsEuhm5IGMKk.png?scale-down-to=1024",
  },
  {
    image:
      "https://framerusercontent.com/images/O35ad4eRtufs0gpp6JZXayT5IM.png?scale-down-to=1024",
  },
];

const newLabelledSectionData = [
  {
    image:
      "https://framerusercontent.com/images/pRzalLce4KvcQSggYuXBvUC174.png?scale-down-to=1024",
  },
  {
    image:
      "https://framerusercontent.com/images/Ru7hW8Qi1bQ8fHES0Gh6mmxA.png?scale-down-to=1024",
  },
  {
    image:
      "https://framerusercontent.com/images/h1Hhi9tTURbTtNpS1UYhUefZ2o.png?scale-down-to=1024",
  },
];

const Home = () => {
  return (
    <div>
      <HeroSection />
      <LabelledSection data={labelledSectionData} />
      <HeroCardSection />
      <div className="mt-52">
        <LabelledSection data={newLabelledSectionData} />
      </div>
      <PlaceSection/>
      <Accordian/>
      <CarouselSection />
      <NewsLetter/>
    </div>
  );
};

export default Home;
