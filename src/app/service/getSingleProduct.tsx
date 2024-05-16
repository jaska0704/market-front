interface types {
  id:number;
  is_available: true;
  title: string;
  images: {
    image_id: number;
    image: string;
  }[];
  product: number;
  attribute_value: [];
  other_detail: string;
  price: string;
  price_with_discount: null;
  quantity: number;
  userCount: number;
  userPrice: number;
}
[];

export const getSingleProduct = async (id: string): Promise<types> => {
  try {
    const res = await fetch(`http://135.181.108.207/product_variant/${id}`, {
      next: { revalidate: 15 },
    });
    const data = await res.json();

    return data;
  } catch (error) {
    throw new Error("Error fetching data");
  }
};
