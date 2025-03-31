import React from "react";
import { GithubIcon, MailIcon, PhoneIcon, BookOpenIcon } from "lucide-react";
import { profileText } from "../../constants/profileConstant";
import { motion } from "framer-motion";

const varinat = {
  initial: {
    y: 50,
    opacity: 0,
  },
  inView: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, staggerChildren: 0.1 },
  },
};
export default function Profile() {
  return (
    <section id="about" className="profile-section">
      <h2 className="profile-heading">
        About Me <em>저는 이런 사람이에요!</em>
      </h2>
      <motion.div
        variants={varinat}
        initial="initial"
        whileInView="inView"
        className="profile-container"
      >
        {/* Header Section */}
        <motion.div variants={varinat} className="profile-header">
          <h1 className="profile-name">{profileText.name}</h1>
          <p className="profile-title">{profileText.title}</p>
        </motion.div>
        {/* Contact Information */}
        <motion.div variants={varinat} className="contact-grid">
          <ContactItem
            icon={<MailIcon size={20} />}
            text={profileText.email}
            label="이메일"
          />
          <a href={profileText.github} target="_blank">
            <ContactItem
              icon={<GithubIcon size={20} />}
              text={"바로가기"}
              label="깃허브"
            />
          </a>
          <ContactItem
            icon={<PhoneIcon size={20} />}
            text={profileText.phone}
            label="연락처"
          />
          <ContactItem
            icon={<BookOpenIcon size={20} />}
            text={profileText.education}
            label="학력"
          />
        </motion.div>
        {/* About Section */}
        <motion.div variants={varinat} className="about-section">
          <h2 className="section-title">자기소개</h2>
          <div
            dangerouslySetInnerHTML={{ __html: profileText.about }}
            className="about-text"
          />
        </motion.div>
        {/* Skills Section */}
      </motion.div>
    </section>
  );
}
function ContactItem({
  icon,
  text,
  label,
}: {
  icon: React.ReactNode;
  text: string;
  label: string;
}) {
  return (
    <div className="contact-item">
      <div className="contact-icon">{icon}</div>
      <div className="contact-info">
        <p className="contact-label">{label}</p>
        <p className="contact-text">{text}</p>
      </div>
    </div>
  );
}
