import { BookOpenIcon, GithubIcon, MailIcon, PhoneIcon } from "lucide-react";
import { ReactNode } from "react";
import { profileText } from "../../constants/profileConstant";

export default function Profile() {
  return (
    <section
      id="profile"
      // className="bg-white rounded-xl shadow-lg overflow-hidden"
    >
      <h2 className="profile__title">
        About Me <em>저는 이런 사람이에요!</em>
      </h2>
      <div className="profile__inner">
        {/* Profile Image Column */}
        <div className="profile__wrapper ">
          <img className="profile__img" src="#" alt="profile image" />

          <h1 className="profile__name">{profileText.name}</h1>
          <p className="profile__dev">{profileText.title}</p>
          <div className="profile__contact__wrapper">
            <ContactItem
              icon={<MailIcon size={18} />}
              text={profileText.email}
            />
            <a
              href={profileText.github}
              target="_blank"
              style={{ padding: 0, display: "inline-block" }}
            >
              <ContactItem icon={<GithubIcon size={18} />} text={"바로가기"} />
            </a>
            <ContactItem
              icon={<PhoneIcon size={18} />}
              text={profileText.phone}
            />
            <ContactItem
              icon={<BookOpenIcon size={18} />}
              text={profileText.education}
            />
          </div>
        </div>
        {/* About Column */}
        <About />
      </div>
    </section>
  );
}

const About = () => {
  return (
    <div className="profile__about">
      <div className="profile__intro">
        <h2>자기소개</h2>
        <div></div>
        <p>{profileText.about}</p>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">기술 스택</h2>
        <div className="w-20 h-1 bg-blue-500 mb-4"></div>
        <div className="flex flex-wrap gap-2">
          {[
            "React",
            "TypeScript",
            "JavaScript",
            "HTML5",
            "CSS3",
            "Tailwind CSS",
            "Git",
          ].map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const ContactItem = ({ icon, text }: { icon: ReactNode; text: string }) => {
  return (
    <div className="profile__contact__item">
      <div>{icon}</div>
      <span>{text}</span>
    </div>
  );
};
