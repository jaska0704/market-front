interface Brand {
  count: number;
  next: null;
  previous: null;
  results: {
    id: number;
    title: string;
    image: string;
  }[];
}

export const getBrand = async (): Promise<Brand> => {
  try {
    const res = await fetch("http://135.181.108.207/brand/", {
      next: { revalidate: 360 },
    });
    const data = res.json();

    return data;
  } catch (error) {
    throw new Error("Error fetching data");
  }
};
