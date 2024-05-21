"use server";

interface Category {
  id: number;
  title: string;
  image: string;
  children: {
    id: number;
    title: string;
    image: string;
  }[];
}
[];

export const getCategoryId = async (id: string): Promise<Category> => {
  try {
    const res = await fetch(`http://135.181.108.207/category/${id}`, {
      next: { revalidate: 10 },
    });
    const data = res.json();

    return data;
  } catch (error) {
    throw new Error("Error fetching data");
  }
};
