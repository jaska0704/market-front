import { Button } from "@/components/ui/button";
import { RootState } from "@/redux/store";
import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";
import { FaRegHeart, FaRegUser } from "react-icons/fa6";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useSelector } from "react-redux";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FcGoogle } from "react-icons/fc";
import { Input } from "@/components/ui/input";

interface typeProducts {
  cartProduct: {
    id: number;
    is_available: boolean;
    title: string;
    images: {
      image: string;
      image_id: number;
    }[];
    product: number;
    attribute_value: [];
    other_detail: string;
    price_with_discount: null;
    quantity: number;
    price: string;
    userCount: number;
    userPrice: number;
  }[];
}

const Favorite: React.FC<{
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  open: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  show: boolean;
}> = ({ setOpen, open, setShow, show }) => {
  const { cartProduct }: typeProducts = useSelector(
    (state: RootState) => state.reduser
  );
  const { likedProduct } = useSelector((state: RootState) => state.like);
  const { data } = useSession();

  const auth = () => {
    signIn("google", { redirect: true, callbackUrl: "/" });
  };

  return (
    <div className="fixed bottom-0 right-0 border-t-2 pt-2 w-full flex justify-around dark:bg-black bg-white lg:border-none lg:static  lg:w-[20%] lg:gap-6 lg:items-center">
      <div className="flex flex-col justify-center items-center">
        {data?.user ? (
          <Dialog>
            <DialogTrigger asChild>
              <img
                className="w-7 h-7 lg:w-9 lg:h-8 rounded-full"
                src={String(data?.user?.image)}
                alt="icon"
              />
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <div className="grid gap-4 py-4">
                <img
                  className="w-7 h-7 lg:w-10 lg:h-10 rounded-full"
                  src={String(data?.user?.image)}
                  alt="icon"
                />
                <p className="text-xl text-orange-400">{data?.user?.name}</p>
                <p className="font-semibold ">
                  We are glad to see you on our site!
                </p>
              </div>
              <DialogFooter className="flex justify-between">
                <Button
                  variant="outline"
                  onClick={() => signOut()}
                  type="submit"
                >
                  Exit Profile
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        ) : (
          <Dialog>
            <DialogTrigger asChild>
              <button>
                <FaRegUser className="w-7 h-7 lg:w-9 lg:h-7" color="gray" />
              </button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Sign Up</DialogTitle>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Input
                    id="phone"
                    placeholder="Phone number"
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Input
                    id="password"
                    type="password"
                    placeholder="Password"
                    className="col-span-3"
                  />
                </div>
              </div>
              <DialogFooter className="flex justify-between">
                <Button type="submit">Save</Button>
                <Button type="submit" onClick={auth}>
                  <FcGoogle />
                  Sign up with Google
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        )}
        <p className="text-[12px] text-gray-400 lg:text-[10px] 2xl:text-[14px]">
          My account
        </p>
      </div>
      <div className="flex flex-col justify-center items-center relative">
        <button onClick={() => setShow(!show)}>
          <FaRegHeart className="w-7 h-7 lg:w-9 lg:h-8" color="gray" />
        </button>
        <p className="text-[12px] text-gray-400 lg:text-[10px] 2xl:text-[14px]">
          Liked
        </p>
        <p className="absolute top-0 right-0 text-[12px] text-white w-5 h-5 rounded-full bg-orange-500 grid place-content-center lg:text-[10px] 2xl:text-[14px] ">
          {likedProduct.length}
        </p>
      </div>
      <div className="flex flex-col justify-center items-center relative">
        <button onClick={() => setOpen(!open)}>
          <MdOutlineShoppingCart
            className="w-7 h-7 lg:w-9 lg:h-8"
            color="gray"
          />
        </button>
        <p className="text-[12px] text-gray-400 lg:text-[10px] 2xl:text-[14px]">
          My Cart
        </p>
        <p className="absolute top-0 right-0 text-[12px] text-white w-5 h-5 rounded-full bg-orange-500 grid place-content-center lg:text-[10px] 2xl:text-[14px] ">
          {cartProduct.length}
        </p>
      </div>
    </div>
  );
};

export default Favorite;
