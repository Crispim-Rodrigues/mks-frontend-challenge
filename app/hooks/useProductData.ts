import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { ProductResponse } from "../../types/ShopData";

const fetch = async () => {
  const res = await axios.get<ProductResponse>(
    "https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=ASC"
  );
  return res;
};

export function useProduct() {
  const query = useQuery({
    queryKey: ["ProductData"],
    queryFn: fetch,
  });
 

  return {
    ...query,
    data: query.data?.data.products
  };
}
