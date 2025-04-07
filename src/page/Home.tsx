import Main from "../components/Main";
import Skill from "../components/Skill";
import ContactContainer from "../components/contact/ContactContainer";
import Profile from "../components/profile/Profile";
import Landing from "../components/landing/Landing";
import ProjectIntro from "../components/projectIntro/ProjectIntro";
import Challenge from "../components/challenge/Challenge";

export default function Home() {
  return (
    <Main>
      <Landing />
      <Profile />
      <Skill />
      <ProjectIntro />
      <Challenge />
      <ContactContainer />
    </Main>
  );
}
