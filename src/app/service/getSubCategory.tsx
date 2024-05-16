interface SubCategory {
    count: number;
    next: string;
    previous: string;
    results: {
        id: number;
        title: string;
        image: string;
    }[];
}

export const getSubCategory = async (): Promise<SubCategory> => {
  try {
    const res = await fetch("http://135.181.108.207/api/subcategory/", {
      next: { revalidate: 360 },
    });
    const data = res.json();

    return data;
  } catch (error) {
    throw new Error("Error fetching data");
  }
};
