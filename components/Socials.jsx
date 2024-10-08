import Link from "next/link";

import {
  RiTelegramLine,
  RiSkypeLine,
  RiDiscordLine,
  RiGithubLine,
} from "react-icons/ri";

export const socialData = [
  {
    name: "Telegram",
    link: "https://youtube.com",
    Icon: RiTelegramLine,
  },
  {
    name: "Skype",
    link: "https://instagram.com",
    Icon: RiSkypeLine,
  },
  {
    name: "Discord",
    link: "https://discord.com",
    Icon: RiDiscordLine,
  },
  {
    name: "Github",
    link: "https://github.com/fleissigguy",
    Icon: RiGithubLine,
  },
];

const Socials = () => {
  return (
    <>
      <div className="flex items-center gap-x-5 text-lg">
      {socialData.map((social, i) => (
        <Link
          key={i}
          title={social.name}
          href={social.link}
          target="_blank"
          rel="noreferrer noopener"
          className={`${
            social.name === "Github"
              ? "bg-accent rounded-full p-[5px] hover:text-white"
              : "hover:text-accent"
          } transition-all duration-300`}
        >
          <social.Icon aria-hidden />
          <span className="sr-only">{social.name}</span>
        </Link>
      ))}
    </div>
    </>
  );
};

export default Socials;
