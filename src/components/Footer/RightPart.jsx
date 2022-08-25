import { Box, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
function RightPart() {
  return (
    <div className={styles.rightSection}>
      <Flex gap={"80px"}>
        <Box className={styles.links}>
          <Heading paddingBottom="24px" size="md">
            INTERNATIONAL
          </Heading>
          <Link to="/"> Lyst - AU</Link>
          <Link to="/"> Lyst - CA</Link>
          <Link to="/"> Lyst - UK</Link>
          <Link to="/"> Lyst - Österreich</Link>
          <Link to="/"> Lyst - Schweiz</Link>
          <Link to="/"> Lyst - Deutschland</Link>
          <Link to="/"> Lyst - España</Link>
          <Link to="/"> Lyst - France</Link>
          <Link to="/"> Lyst - Italia</Link>
          <Link to="/"> Lyst - 日本</Link>
          <Link to="/"> Lyst - België</Link>
          <Link to="/"> Lyst - Nederland</Link>
        </Box>
        <Box className={styles.links}>
          <Heading paddingBottom="24px" size="md">
            HELP AND INFO
          </Heading>
          <Link to="/"> Help center</Link>
          <Link to="/"> About us</Link>
          <Link to="/"> Shipping policy</Link>
          <Link to="/"> Returns policy</Link>
          <Link to="/"> Payments</Link>
          <Link to="/"> Refund policy</Link>
          <Link to="/"> Developers</Link>
          <Link to="/"> Careers</Link>
          <Link to="/"> Contact</Link>
          <Link to="/"> Terms & conditions</Link>
          <Link to="/"> Privacy & cookie policy</Link>
          <Link to="/"> Intellectual property</Link>
          <Link to="/"> Categories</Link>
          <Link to="/"> Become a partner</Link>
          <Link to="/"> Lyst Insights</Link>
          <Link to="/"> Lyst News</Link>
          <Link to="/">right</Link>
        </Box>
      </Flex>
    </div>
  );
}

export default RightPart;
