import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";
const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box">
    <p className="font-medium sm:text-xl text-center">{text}</p>
    <Link to={link} className="neo-brutalism-white neo-btn">
      {btnText} <img src={arrow} className="w-4 h-4 object-contain" />
    </Link>
  </div>
);
const renderContent = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
      Hi, I am <span className="font-semibold">Dharan</span>
      <br />A Software Engineer from India
    </h1>
  ),
  2: (
    <InfoBox
      text="Skilled in wide variety of technologies"
      link="/about"
      btnText={"learn more"}
    />
  ),
  3: (
    <InfoBox
      text="Done so many projects for upskilling , so that i can showcase my projects"
      link="/projects"
      btnText={"Visit my portfolio"}
    />
  ),
  4: (
    <InfoBox
      text="You can contact me anytime take your sweet time to think "
      link="/contact"
      btnText={"let's chat"}
    />
  ),
};

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo;
