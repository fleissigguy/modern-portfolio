import { motion } from "framer-motion";
import { useState } from "react";
import CountUp from "react-countup";
import {
  FaCss3,
  FaFigma,
  FaHardHat,
  FaHtml5,
  FaJs,
  FaLaravel,
  FaNodeJs,
  FaReact,
  FaSass,
  FaVuejs,
  FaWordpress,
} from "react-icons/fa";
import {
  SiAdobephotoshop,
  SiAdobexd,
  SiAliexpress,
  SiCloudfoundry,
  SiDevexpress,
  SiDjango,
  SiEthereum,
  SiExpress,
  SiExpressvpn,
  SiFramer,
  SiGo,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiPostgresql,
  SiRust,
  SiSolidity,
  SiTypescript,
  SiWeb3Dotjs,
} from "react-icons/si";

import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";
import { fadeIn } from "../../variants";

//  data
export const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Frontend Skills",
        icons: [
          FaHtml5,
          FaCss3,
          FaSass,
          FaJs,
          SiTypescript,
          FaReact,
          SiNextdotjs,
          SiFramer,
          FaWordpress,
          FaVuejs,
        ],
      },
      {
        title: "Backend Skills",
        icons: [
          FaNodeJs,
          SiExpress,
          FaLaravel,
          SiDjango,
        ],
      },
      {
        title: "Database Skills",
        icons: [
          SiMysql,
          SiPostgresql,
          SiMongodb,
        ],
      },
      {
        title: "Blockchain Skills",
        icons: [
          SiSolidity,
          SiRust,
          SiGo,
          SiWeb3Dotjs,
          SiEthereum,
          FaHardHat,          
        ]
      }
    ],
  },
  {
    title: "Services",
    info: [
      {
        title: "Blockchain development",
        stage: "Smart Contract Development, Decentralized Application (dApp) Development, Blockchain Integration, Tokenomics and ICO/IDO/STO Development, Blockchain Consulting, Blockchain Security Audits, NFT Development",
      },
      {
        title: "Full Stack development",
        stage: "Web development, API Development and Integration, Database Design and Management",
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "Freelancer",
        stage: "2024/4 - present",
      },
      {
        title: "Blockchain Developer - Edmonton, Canada",
        stage: "2022/3 - 2024/4",
      },
      {
        title: "Full Stack Developer - Carnot, Japan",
        stage: "2019/7 - 2021/11",
      },
    ],
  },
  {
    title: "education",
    info: [
      {
        title: "Bachelor Degree in Information Technology (Osaka Institute of Technology, Japan)",
        stage: "2015/04 – 2019/03",
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />

      {/* avatar img */}
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[170px]"
      >
        <Avatar />
      </motion.div>

      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        {/* text */}
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            Captivating <span className="text-accent">stories</span> birth
            magnificent designs.
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
           Five years ago, I began freelancing as a blockchain and full stack developer. Since then, I've done remote work for companies, consulted for startups, and collaborated on digital products for both business and consumer use. Each project has been a unique story, weaving together the complexities of blockchain technology and full stack development to create magnificent designs. My journey is driven by the captivating narratives behind every project, transforming innovative ideas into impactful, functional, and visually stunning solutions.
          </motion.p>

          {/* counters */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-x-6">
              {/* experience */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={5} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Years of experience.
                </div>
              </div>

              {/* clients */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={134} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Satisfied clients.
                </div>
              </div>

              {/* projects */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={189} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Finished projects.
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* info */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemI) => (
              <div
                key={itemI}
                className={`${
                  index === itemI &&
                  "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                onClick={() => setIndex(itemI)}
              >
                {item.title}
              </div>
            ))}
          </div>

          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemI) => (
              <div
                key={itemI}
                className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-center text-white/60"
              >
                {/* title */}
                <div className="font-light mb-2 md:mb-0">{item.title}</div>
                <div className="hidden md:flex">-</div>
                <div>{item.stage}</div>

                <div className="flex gap-x-4">
                  {/* icons */}
                  {item.icons?.map((Icon, iconI) => (
                    <div key={iconI} className="text-2xl text-white">
                      <Icon />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
