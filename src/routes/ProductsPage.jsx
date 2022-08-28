import {
  Box,
  Grid,
  Flex,
  GridItem,
  Heading,
  Image,
  Stack,
  Text,
  Select,
} from "@chakra-ui/react";
import { LinkIcon } from "@chakra-ui/icons";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ProductsPage() {
  let [data, setData] = useState([]);
  let [srtPrice, setSrtPrice] = useState("");
  let [category, setCategory] = useState("");
  let q = useParams();
  const handlePriceSort = (e) => {
    let value = e.target.value;
    setSrtPrice(value);
  };
  const handleCategory = (e) => {
    let value = e.target.value;
    setCategory(value);
  };

  useEffect(() => {
    let qurl = `https://lyst-db-constructweek.herokuapp.com/prdoucts/?gender=${q.searchBy}&_sort=price&_order=${srtPrice}`;
    if (category === "") {
      qurl = `https://lyst-db-constructweek.herokuapp.com/prdoucts/?gender=${q.searchBy}&_sort=price&_order=${srtPrice}`;
    } else {
      qurl = `https://lyst-db-constructweek.herokuapp.com/prdoucts/?category=${category}&gender=${q.searchBy}&_sort=price&_order=${srtPrice}`;
    }
    axios
      .get(`${qurl}`)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, [q, srtPrice, category]);
  return (
    <>
      <Flex justifyContent={"space-between"}>
        <Heading size="xl" marginBottom="24px">
          {q.searchBy === "female" ? "WOMENS" : "MENS"} PRODUCTS
        </Heading>
        <Flex alignItems="center">
          <Text fontSize={"18px"}>Sort by Price:</Text>
          <Select
            onChange={(e) => handlePriceSort(e)}
            value={srtPrice}
            width={"200px"}
          >
            <option>sort by price</option>
            <option value={"DESC"}>high to low</option>
            <option value={"ASC"}>low to high</option>
          </Select>
          <Text fontSize={"18px"}>filter by category:</Text>
          <Select
            onChange={(e) => handleCategory(e)}
            value={category}
            width={"200px"}
          >
            <option value="">sort by category</option>
            <option value={"shirt"}>Shirts</option>
            <option value={"tshirt"}>T-Shirt</option>
            <option value={"footwear"}>Footwear</option>
          </Select>
        </Flex>
      </Flex>
      <Grid
        height={"1200px"}
        templateColumns="repeat(4, 1fr)"
        gap={"12px"}
        overflowY="scroll"
      >
        {data.map((prod) => {
          return (
            <GridItem key={prod.id} height="350px" backgroundColor="white">
              <Box>
                <Image margin={"auto"} src={prod.image} alt={prod.name} />
              </Box>
              <Heading marginTop="24px" marginLeft="24px" size={"md"}>
                {prod.name}
              </Heading>
              <Text marginLeft="24px" fontSize="18px">
                $ {prod.price}
              </Text>
              <Text marginLeft="24px" fontSize="18px">
                <LinkIcon fontSize={"sm"} /> {prod.brand}
              </Text>
            </GridItem>
          );
        })}
      </Grid>
    </>
  );
}
