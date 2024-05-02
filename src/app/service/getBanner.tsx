"use server";

interface Banner {
  count: 5;
  next: null;
  previous: null;
  results: {
    id: number;
    image: string;
    title: string;
    description: string;
  }[];
}

export const getBanner = async (): Promise<Banner> => {
  try {
    const res = await fetch("http://135.181.108.207/banner/");
    const data = res.json();

    return data;
  } catch (error) {
    throw new Error("Error fetching data");
  }
};
