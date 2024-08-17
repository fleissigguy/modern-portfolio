import { motion } from "framer-motion";

import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";
import { textFlag } from "cursor-effects";

import { fadeIn } from "../variants";

const Home = () => {
  return (
    <div className="bg-primary/60 h-full">
      {/* text */}
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
          {/* title */}
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1"
          >
            Senior Blockchain && <br /> Full Stack{" "}
            <span className="text-accent">Developer</span>
          </motion.h1>

          {/* subtitle */}
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16"
          >
            Highly skilled Blockchain developer with over 5 years of experience. My expertise lies in executing
            advanced blockchain projects, encompassing a wide range of areas such as ERC-20/ERC-721 tokenomics,
            DAO frameworks, liquidity pools, staking, NFT platforms, ICOs, launchpads, and play-to-earn games.
            Possess exceptional proficiency in Solidity and Python, actively contributing to the developer
            community and prioritizing the meticulous and secure development of smart contracts.
            Furthermore, my diverse background extends to the web field, enabling me to seamlessly integrate
            the power of blockchain with web technologies for a comprehensive and multifaceted approach.
          </motion.p>

          {/* btn */}
          <div className="flex justify-center xl:hidden relative">
            <ProjectsBtn />
          </div>
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
      {/* image */}
      <div className="w-[1280px] h-full absolute right-0 bottom-0">
        {/* bg img */}
        <div
          role="img"
          className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"
          aria-hidden
        />

        {/* particles */}
        <ParticlesContainer />

        {/* avatar */}
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: "easeInOut" }}
          className="w-full h-full max-w-[860px] max-h-[678px] absolute bottom-0 lg:bottom-[150px] lg:right-[7%]"
        >
          <Avatar />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
