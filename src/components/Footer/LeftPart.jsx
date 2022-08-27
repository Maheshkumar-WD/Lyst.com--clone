import React from "react";
import StarHalfRoundedIcon from "@mui/icons-material/StarHalfRounded";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import StarRounded from "@mui/icons-material/StarRounded";
import {
  Box,
  Flex,
  Image,
  Heading,
  Text,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";
import OpenAppStoreModel from "./FooterUtils";

function RatingStars() {
  return (
    <>
      <StarRounded
        className={styles.RatingStars}
      />
      <StarRounded
        className={styles.RatingStars}
      />
      <StarRounded
        className={styles.RatingStars}
      />
      <StarRounded
        className={styles.RatingStars}
      />
      <StarHalfRoundedIcon
        className={styles.RatingStars}
      />
    </>
  );
}

function LeftPart() {
  return (
    <div className={styles.leftSection}>
      <Flex alignItems={"center"}>
        <StarRounded className={styles.RatingStars} />
        <Heading size="md">Trustpoilet</Heading>
      </Flex>
      <RatingStars />
      <Box>
        <Text>
          Trust Score <span className={styles.boldText}>4.4</span>
        </Text>
        <Text>
          <span className={styles.boldText}>2837</span> reviews
        </Text>
        <Box>
          <Link to="/">
            <FacebookRoundedIcon />
          </Link>
        </Box>
        <OpenAppStoreModel />
      </Box>
    </div>
  );
}

export default LeftPart;
