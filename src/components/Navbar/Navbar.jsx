import { Box, Flex, Icon, Text, Input, Link, Button } from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import React from "react";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <Box>
      <Flex className={styles.navbar_top_links}>
        <Link>IN-US$</Link>
        <Link>Help</Link>
        <Link>Sign in</Link>
        <Button className={styles.navbar_top_join_btn}>JOIN</Button>
      </Flex>
      <Flex className={styles.navbar_main}>
        <Box>
          <Text className={styles.navbar_Logo}>LYST</Text>
        </Box>
        <Box className={styles.navbar_links}>
          <Link>Womens</Link>
          <Link>Mens</Link>
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
