interface types {
  count: number;
  next: null;
  previous: null;
  results: {
    id: 40;
    is_available: true;
    title: "bag";
    images: {
      image_id: string;
      image: string;
    }[];
    product: number;
    attribute_value: [];
    other_detail: string;
    price: string;
    price_with_discount: null;
    quantity: number;
  }[];
}

export const getProductVariant = async (): Promise<types> => {
  try {
    const res = await fetch(`http://135.181.108.207/product_variant/`, {
      next: { revalidate: 15 },
    });
    const data = await res.json();

    return data;
  } catch (error) {
    throw new Error("Error fetching data");
  }
};
