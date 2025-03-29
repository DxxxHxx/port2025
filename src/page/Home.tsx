import Main from "../components/Main";
import Skill from "../components/Skill";
import Site from "../components/Site";
import Port from "../components/Port";
import ContactContainer from "../components/contact/ContactContainer";
import Profile from "../components/profile/Profile";
import Landing from "../components/landing/Landing";

export default function Home() {
  return (
    <Main>
      <Landing />
      <Profile />
      <Skill />
      <Site />
      <Port />
      <ContactContainer />
    </Main>
  );
}
