import {
  Box,
  Grid,
  GridItem,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ProductsPage() {
  let [data, setData] = useState([]);
  let q = useParams();
  console.log(q);

  useEffect(() => {
    axios
      .get(
        `https://lyst-db-constructweek.herokuapp.com/prdoucts/?gender=${q.searchBy}`
      )
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, [q]);

  console.log(data);
  return (
    <>
      <Grid templateColumns="repeat(4, 1fr)" gap={"12px"}>
        {data.map((prod) => {
          return (
            <GridItem key={prod.id} height="350px" backgroundColor="white">
              <Box>
                <Image margin={"auto"} src={prod.image} alt={prod.name} />
              </Box>
              <Heading size={"md"}>{prod.name}</Heading>
              <Text></Text>
            </GridItem>
          );
        })}
      </Grid>
    </>
  );
}
