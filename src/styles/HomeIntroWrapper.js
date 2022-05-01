import styled from "styled-components";
import { motion } from "framer-motion";

export const HomeIntroWrapper = styled(motion.section)`
  padding: 5vmax 10vw;
  height: 130vh;
  display: flex;
  flex-wrap: wrap;
  color: var(--primary-text);
  transition: var(--default-transition);

  .text {
    display: flex;
    flex-direction: column;
    gap: 5vh;
    max-width: 800px;
  }

  .main-text {
  }

  .paragraph {
    padding: 0 2vw;
  }

  .piece {
    min-width: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
