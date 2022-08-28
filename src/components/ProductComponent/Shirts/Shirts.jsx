import { Box, Container, Flex, Heading, Image } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function getdata() {
  return axios.get(
    "https://lyst-db-constructweek.herokuapp.com/prdoucts?category=shirt"
  );
}

function Shirts() {
  let [data, setData] = useState([]);
  useEffect(() => {
    getdata()
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);
  console.log(data);
  return (
    <>
      <Heading size={"lg"} margin="32px 0 0 140px">
        Shirts
      </Heading>
      <Box width={"90%"} margin="auto" marginTop="24px" borderRadius="24px">
        <Flex gap={"24px"} justifyContent="center" padding={"24px 24px"}>
          {data?.map((prod, i) => {
            if (i < 4) {
              return;
            }
            console.log(prod);
            return (
              <Box width="240px" height={"300px"} boxShadow={"0 0 4px gray"}>
                <Link to="">
                  <Image
                    height={"250px"}
                    width={"90%"}
                    src={prod.image}
                    alt={prod.id}
                  />
                </Link>
              </Box>
            );
          })}
        </Flex>
      </Box>
    </>
  );
}

export default Shirts;
