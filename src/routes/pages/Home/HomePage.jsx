import { Box, Image } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import Bag from "../../../components/ProductComponent/Bag/Bag";
import Jewellery from "../../../components/ProductComponent/jewellery/Jewellery";
import Shirts from "../../../components/ProductComponent/Shirts/Shirts";
import styles from "./Home.module.css";
function HomePage() {
  return (
    <div
      style={{ backgroundColor: "white", height: "auto", padding: "24px 0" }}
    >
      <Box className={styles.bannerSection}>
        <Link to="/">
          <Image
            width={"100%"}
            src="https://cdna.lystit.com/cms/ENG_header_XL_9f9e2af236_615828663f.jpg"
          />
        </Link>
      </Box>
      <Shirts />
      <Jewellery />
      <Bag />
    </div>
  );
}

export default HomePage;
