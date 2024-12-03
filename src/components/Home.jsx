import React from "react";
import { BsQrCodeScan } from "react-icons/bs";
import { LuQuote } from "react-icons/lu";
import { Link } from "react-router-dom";

const menus = [
    {
      id: 1,
      src: <BsQrCodeScan size={150}/>,
      title: "Grep Info From QRCode",
      page: "/dev-util/GrepInfoFromQRCode",
    },
    {
      id: 2,
      src: <LuQuote size={150}/>,
      title: "Suround Value By Single Quote",
      page: "/dev-util/SuroundValueBySingleQuote",
    }
  ];

const Home = () => {

    return (
        <div>
          <div>
            <div
              data-aos="fade-down"
              data-aos-offset="100"
              className="flex justify-center gap-2 mt-[20vh]"
            >
              {menus.map(({ id, src, title, page }) => (
                <Link
                  to={page}
                  class="bg-white bg-opacity-5 rounded-2xl px-4 py-2 flex flex-col items-center group relative overflow-hidden transition duration-700 ease-in-out border-transparent border-2 hover:border-white dark:hover:bg-opacity-20 hover:bg-opacity-25 active:scale-105 active:duration-100"
                >
                  <span class="ease absolute right-0 -mt-12 h-72 w-8 translate-x-12 rotate-12 transform bg-white opacity-10 transition-all duration-500 group-hover:-translate-x-64"></span>
                  <span class="flex flex-col items-center gap-4">
                  {src}
                    <p className="text-center">{title}</p>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      );
    };

export default Home;