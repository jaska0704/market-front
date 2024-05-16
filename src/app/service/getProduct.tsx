interface Product {
  count: number;
  next: string;
  previous: string;
  results: {
    id: number;
    image: string;
    title: string;
    price: string;
    is_available: boolean;
    category: number;
    is_new: boolean;
  }[];
}

export const getProduct = async (): Promise<Product> => {
  try {
    const res = await fetch("http://135.181.108.207/product/");
    const data = res.json();

    return data;
  } catch (error) {
    throw new Error("Error fetching data");
  }
};
