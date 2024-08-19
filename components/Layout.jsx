import { Sora } from "next/font/google";
import Head from "next/head";

import Header from "../components/Header";
import Nav from "../components/Nav";
import TopLeftImg from "../components/TopLeftImg";

// setup font
const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

const Layout = ({ children }) => {
  return (
    <main
      className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative`}
    >
      {/* metadata */}
      <Head>
        <title>Ono Saburo</title>
        <meta
          name="description"
          content="Ono Saburo is a Full-stack web developer with 6+ years of experience."
        />
        <meta
          name="keywords"
          content="react, next, nextjs, html, css, javascript, js, modern-ui, modern-ux, portfolio, framer-motion, 3d-website, particle-effect, vue, sass, nuxt, php, laravel, python, Django, C++, C#, react native, express, node, mongo DB, seinor, Frontend, backend, blockchain, web, devlopment, smart contract, DeFi, Dao, Wallet, Dex, Swap, stake, consensus, Pow, Pos, Solidity, solana, rust, web3, ethereum, NFT, ERC20, ERC721, contract, IOC, APY, swap, uniswap, transaction, trade, token, senior, developer, dev, best, top, full stack, wordpress, api,"
        />
        <meta name="author" content="Ono Saburo" />
        <meta name="theme-color" content="#f13024" />
      </Head>

      <TopLeftImg />
      <Nav />
      <Header />

      {/* main content */}

      {children}
    </main>
  );
};

export default Layout;
