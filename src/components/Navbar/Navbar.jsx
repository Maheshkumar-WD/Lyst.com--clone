import { Box, Flex, Icon, Text, Input, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Search2Icon } from "@chakra-ui/icons";
import React from "react";
import styles from "./Navbar.module.css";
function Navbar() {
  return (
    <Box className={styles.navbar}>
      <Flex className={styles.navbar_top_links}>
        <Link to="/">IN-US$</Link>
        <Link to="/">Help</Link>
        <Link to="/login">Sign in</Link>
        <Button className={styles.navbar_top_join_btn}>JOIN</Button>
      </Flex>
      <Flex className={styles.navbar_main}>
        <Box>
          <Text className={styles.navbar_Logo}>LYST</Text>
        </Box>
        <Box className={styles.navbar_links}>
          <Link to="/">Womens</Link>
          <Link to="/">Mens</Link>
        </Box>
        <Box className={styles.navbar_search}>
          <Input
            placeholder="SEARCH (E.G :VALENTINO DRESSES)"
            className={styles.input_search}
          />
          <Button className={styles.navbar_search_button}>
            <Icon as={Search2Icon} />
          </Button>
        </Box>
      </Flex>
    </Box>
  );
}

export default Navbar;
