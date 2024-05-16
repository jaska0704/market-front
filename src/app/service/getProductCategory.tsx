interface SubCategory {
  count: number;
  next: null;
  previous: null;
  results: {
    id: number;
    is_available: boolean;
    title: string;
    images: { image: string; image_id: number }[];
    product: number;
    attribute_value: [];
    other_detail: string;
    price: string;
    price_with_discount: null;
    quantity: number;
    userCount: number;
    userPrice: number;
  }[];
}

export const getProductCategory = async (id: string): Promise<SubCategory> => {
  try {
    const res = await fetch(
      `http://135.181.108.207/product_variant/?product__category=${id}`, {next: { revalidate: 5 }}
    );
    const data = await res.json();

    return data;
  } catch (error) {
    throw new Error("Error fetching data");
  }
};
