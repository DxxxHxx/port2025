import Main from "../components/Main";
import Skill from "../components/Skill";
import ContactContainer from "../components/contact/ContactContainer";
import Profile from "../components/profile/Profile";
import Landing from "../components/landing/Landing";
import ImproveListContainer from "../components/improve/list/ImproveListContainer";

export default function Home() {
  return (
    <Main>
      <Landing />
      <Profile />
      <Skill />
      <ImproveListContainer />
      <ContactContainer />
    </Main>
  );
}
