"use server";

interface Category {
  count: number;
  next: null;
  previous: null;
  results: {
    id: number;
    title: string;
    image: string;
    children: {
      id: number;
      title: string;
      image: string;
    }[];
  }[];
}

export const getCategory = async (): Promise<Category> => {
  try {
    const res = await fetch("http://135.181.108.207/category/",{next: {revalidate: 10}});
    const data = res.json();

    return data;
  } catch (error) {
    throw new Error("Error fetching data");
  }
};
