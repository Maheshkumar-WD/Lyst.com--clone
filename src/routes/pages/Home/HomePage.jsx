import { Box, Image } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import OpenAppStoreModel from "../../../components/Footer/FooterUtils";
import styles from "./Home.module.css";
function HomePage() {
  return (
    <div style={{ backgroundColor: "white", height: "1200px" }}>
      <Box className={styles.bannerSection}>
        <Link to="/">
          <Image
            width={"100%"}
            src="https://cdna.lystit.com/cms/ENG_header_XL_9f9e2af236_615828663f.jpg"
          />
        </Link>
      </Box>
    </div>
  );
}

export default HomePage;
