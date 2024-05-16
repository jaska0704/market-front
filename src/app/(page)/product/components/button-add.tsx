"use client";
import { addProduct, remove } from "@/redux/reduser/reduser";
import { RootState } from "@/redux/store";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

interface typeProducts {
  data: {
    id: number;
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
  };
};

const ButtonAdd = (props: typeProducts) => {
  const dispatch = useDispatch();
  const { cartProduct } = useSelector((state: RootState) => state.reduser);
  const cartId = cartProduct.find((item: any) => item.id == props.data.id);

  const AddProduct = () => {
    dispatch(addProduct(props.data));
  };
  const removeProduct = () => {
    dispatch(remove(props.data));
  };

  return (
    <div>
      {cartId ? (
        <button
          onClick={() => removeProduct()}
          className="bg-red-400 text-white px-12 py-2 rounded-3xl outline-none sm:py-2 md:px-16"
        >
          Remove
        </button>
      ) : (
        <button
          onClick={() => AddProduct()}
          className="bg-orange-400 text-white px-8 py-2 rounded-3xl outline-none sm:py-2 sm:px-3 md:px-16"
        >
          +Add to cart
        </button>
      )}
    </div>
  );
};

export default ButtonAdd;
