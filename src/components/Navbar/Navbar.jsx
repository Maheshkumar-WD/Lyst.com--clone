import {
  Box,
  Flex,
  Icon,
  Text,
  Input,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuGroup,
  MenuItem,
  MenuDivider,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Search2Icon } from "@chakra-ui/icons";
import React, { useContext } from "react";
import styles from "./Navbar.module.css";
import { AuthContext } from "../../context/AuthContext";
import { handleSignOut } from "./nav";
function Navbar() {
  let { isAuth, setIsAuth, user, setUser } = useContext(AuthContext);
  return (
    <Box className={styles.navbar}>
      <Flex className={styles.navbar_top_links}>
        <Link to="/">IN-US$</Link>
        <Link to="/">Help</Link>

        {isAuth ? (
          <Menu>
            <MenuButton as={Button} className={styles.profileBtn}>
              {user.name}
            </MenuButton>
            <MenuList>
              <MenuGroup title="Profile">
                <MenuItem>My Account</MenuItem>
                <MenuItem>Payments </MenuItem>
                <MenuItem className={styles.cartCountContainer}>
                  Cart{" "}
                  <span className={styles.cartCount}>{user.cart.length}</span>
                </MenuItem>
                <MenuItem>Orders </MenuItem>
              </MenuGroup>
              <MenuDivider />
              <MenuGroup title="Help">
                <MenuItem
                  className={styles.signoutbtn}
                  onClick={() => handleSignOut(setIsAuth, setUser)}
                >
                  SignOut
                </MenuItem>
              </MenuGroup>
            </MenuList>
          </Menu>
        ) : (
          <>
            <Link to="/signin">Sign in</Link>
            <Link to="/signup">
              <Button className={styles.navbar_top_join_btn}>JOIN</Button>
            </Link>
          </>
        )}
      </Flex>
      <Flex className={styles.navbar_main}>
        <Box>
          <Link to="/">
            {" "}
            <Text className={styles.navbar_Logo}>LYST</Text>
          </Link>
        </Box>
        <Box className={styles.navbar_links}>
          <Link to="/products/female">Womens</Link>
          <Link to="/products/male">Mens</Link>
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
