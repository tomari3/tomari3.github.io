import React from "react";

import { motion } from "framer-motion";

import { TextLink } from "../../styles/TextLink";

const style = {
  display: "flex",
  gap: "1rem",
};

export const NavBar = () => {
  return (
    <motion.nav style={style}>
      <TextLink whileHover={{ x: 10 }}>about</TextLink>
      <TextLink whileHover={{ x: 10 }}>projects</TextLink>
      <TextLink whileHover={{ x: 10 }}>contact</TextLink>
      <TextLink whileHover={{ x: 10 }}>resume</TextLink>
    </motion.nav>
  );
};
