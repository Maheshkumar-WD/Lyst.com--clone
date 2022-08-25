import React from "react";
import LeftPart from "./LeftPart";
import styles from "./Footer.module.css";
import RightPart from "./RightPart";
import { Flex } from "@chakra-ui/react";
function FooterPage() {
  return (
    <Flex justifyContent="space-between" className={styles.footerSection}>
      <LeftPart />
      <RightPart />
    </Flex>
  );
}

export default FooterPage;
