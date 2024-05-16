import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { remove, toggleAnmount } from '@/redux/reduser/reduser';

interface typeProducts {
  cartProduct: {
    id: number,
    is_available: boolean,
    title: string,
    images: {
      image: string,
      image_id: number,
    }[],
    product: number,
    attribute_value: [],
    other_detail: string,
    price_with_discount: null,
    quantity: number,
    price: string,
    userCount: number,
    userPrice: number,
  }[];
  totalPrice: number;
}

const Cart = () => {
     const { cartProduct, totalPrice }: typeProducts = useSelector(
    (state: RootState) => state.reduser
  );
  const dispatch = useDispatch();

  const Increment = (id: number) => {
    dispatch(toggleAnmount({ id, type: "add" }));
  };
  const Decrement = (id: number) => {
    dispatch(toggleAnmount({ id, type: "remove" }));
  };

  return (
    <div>
         {cartProduct?.map((item) => (
                    <div key={item.id} className="flex justify-between items-center border-t-2 py-3 px-4">
                      <img
                        className="w-[50px] h-[50px] border-2 border-orange-500 rounded-full"
                        src={item.images[0].image}
                        alt="image"
                      />
                      <div>
                        <h1 className="text-[12px] font-semibold">
                          {item.title}
                        </h1>
                        <div className="flex justify-between items-center">
                          <div>
                            <button
                              onClick={() => Decrement(item.id)}
                              className="text-[12px] px-2 py-1 rounded-lg bg-amber-500"
                              disabled={item.userCount === 0}
                            >
                              -
                            </button>
                            <span className="text-[12px] px-2">
                              {item.userCount}
                            </span>
                            <button
                              onClick={() => Increment(item.id)}
                              className="text-[12px] px-2 py-1 rounded-lg bg-amber-500"
                              disabled={item.userCount === item.quantity}
                            >
                              +
                            </button>
                          </div>
                          <div>
                            <p className="text-[12px]">{item.userPrice} $</p>
                          </div>
                        </div>
                      </div>
                      <button onClick={() => dispatch(remove(item))}>X</button>
                    </div>
                  ))}
                  <div className="w-full flex justify-between items-center border-t-2 py-3 px-4 absolute bottom-0 left-0">
                    <h2 className="text-[26px] font-bold">Subtotal:</h2>
                    <p className="text-[24px] font-semibold text-orange-400">
                      ${totalPrice}
                    </p>
                  </div> 
    </div>
  )
}
export default Cart
