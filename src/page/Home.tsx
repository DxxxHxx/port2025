import Main from "../components/Main";
import Intro from "../components/Intro";
import Skill from "../components/Skill";
import Site from "../components/Site";
import Port from "../components/Port";
import Header from "../components/Header";
import ContactContainer from "../components/contact/ContactContainer";

export default function Home() {
  return (
    <>
      {/* <Skip /> */}
      <Header />
      <Main>
        <Intro />
        <Skill />
        <Site />
        <Port />
        <ContactContainer />
      </Main>
    </>
  );
}
