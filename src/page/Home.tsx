import Main from "../components/Main";
import Skill from "../components/Skill";
import ContactContainer from "../components/contact/ContactContainer";
import Profile from "../components/profile/Profile";
import Landing from "../components/landing/Landing";
import ImproveCarousel from "../components/carousel/Carousel";
import ProjectIntro from "../components/projectIntro/ProjectIntro";

export default function Home() {
  return (
    <Main>
      <Landing />
      <Profile />
      <Skill />
      <ProjectIntro />
      <ImproveCarousel />
      <ContactContainer />
    </Main>
  );
}
