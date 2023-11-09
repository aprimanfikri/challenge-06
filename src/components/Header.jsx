import React, { useState } from "react";
import { Link } from "react-scroll";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const navigation = [
  { name: "Our Services", href: "#", current: false, to: "service" },
  { name: "Why Us", href: "#", current: false, to: "why-us" },
  { name: "Testimonial", href: "#", current: false, to: "testimonial" },
  { name: "FAQ", href: "#", current: false, to: "faq" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <div className="bg-white mx-auto max-w-7xl px-3 sm:px-8 lg:px-8 z-10 relative">
      <div className="relative flex h-16 items-center justify-between">
        <div className="p-4 bg-[#0D28A6] px-12"></div>
        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <div className="hidden sm:ml-6 sm:block">
            <div className="flex space-x-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.to}
                  className={classNames(
                    item.current ? "text-black" : "text-black",
                    "rounded-md px-3 py-2 text-sm font-medium cursor-pointer"
                  )}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}>
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <button className="hidden sm:ml-6 sm:block bg-[#5CB85F] p-2 w-120 rounded-sm text-white font-medium">
            Register
          </button>
        </div>
        <AiOutlineMenu
          onClick={toggleDrawer}
          className="text-black text-xl md:hidden h-6 w-6"
        />
      </div>
      {isDrawerOpen && (
        <div
          onClick={closeDrawer}
          className="fixed top-0 left-0 h-full w-full backdrop-brightness-50 lg:hidden">
          <div className="fixed top-0 right-0 h-full w-1/2 bg-white shadow-lg">
            <div className="p-4 flex justify-end">
              <span className="text-black text-base font-bold absolute inset-y-0 left-3 top-4">
                BCR
              </span>
              <AiOutlineClose
                onClick={toggleDrawer}
                className="text-black text-xl md:hidden h-6 w-6"
              />
            </div>
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                className={classNames(
                  item.current ? "text-black" : "text-black",
                  "block rounded-md px-3 py-2 text-base font-medium"
                )}
                spy={true}
                smooth={true}
                duration={500}
                onClick={closeDrawer}>
                {item.name}
              </Link>
            ))}
            <button className="mx-3 my-2 bg-[#5CB85F] p-2 w-120 rounded-sm text-white font-medium">
              Register
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
