import style from "./Contact.module.css";
import { FaPhoneAlt } from "react-icons/fa";
import { IoHomeSharp } from "react-icons/io5";
import { BiWorld } from "react-icons/bi";

const Contact = () => {
  return (
    <section className="min-h-screen px-32 container mx-auto">
      <h2 className={style.heading}>
        <hr className={style.hr} />
        Let's Build Something Together
      </h2>

      <div className="my-16 min-h-screen w-full flex contact_us">
        <div className="basis-1/2 p-8 items-center flex">
          <div className="w-11/12 mx-auto flex-col gap-6 flex">
            <div >
              <span className="text-2xl capitalize font-bold leading-6">
                get in touch with us
              </span>
              <p className="text-gray-500 text-sm mt-4">
                Google Maps API provides a powerful set of tools for integrating
                maps and location-based services into your React.js
                applications. In this article, I will explore how to get started
                with Google Maps API in a React.js project and build a simple
                map application.
              </p>
            </div>

            <div className="detail_container flex gap-4 p-4">
              <div className="details items-center justify-between gap-4 flex">

                <div className="address flex-col flex text-center leading-5 text-xs gap-5">
                  <div className="items-center justify-center flex">
                    <span className="icon_wrapper border border-solid w-10 h-10 transform rotate-45 p-2 items-center justify-center flex border-black">
                      <IoHomeSharp className="transform -rotate-45" size={14} />
                    </span>
                  </div>
                  <div>
                    <span>218 kiri-kiri Road, Olodi Apapa </span>
                    <span> Ajegunle Lagos, Nigeria</span>
                  </div>
                </div>

                <div className="phone flex-col flex text-center leading-5 text-xs gap-5">
                  <div className="items-center justify-center flex">
                    <span className="icon_wrapper border border-solid w-10 h-10 transform rotate-45 p-2 items-center justify-center flex border-black">
                      <FaPhoneAlt className="transform -rotate-45" size={14} />
                    </span>
                  </div>
                  <div>
                    <span>+234-903-956-1136</span>
                    <span> +234-813-960-3633</span>
                  </div>
                </div>

                <div className="email-website flex-col flex text-center leading-5 text-xs gap-5">
                  <div className="items-center justify-center flex">
                    <span className="icon_wrapper border border-solid w-10 h-10 transform rotate-45 p-2 items-center justify-center flex border-black">
                      <BiWorld className="transform -rotate-45" size={14} />
                    </span>
                  </div>
                  <div>
                    <span>www.website.com </span>
                    <span> chimaobi01@gmail.com</span>
                  </div>
                </div>

              </div>
            </div>

            <div className="send_message gap-2 flex-col flex">
              <span className="font-semibold capitalize text-lg">
                send message
              </span>
              <form className="flex-col flex gap-4">
                <div className="grid gap-4 grid-cols-2 ">
                  <input className=" p-2 bg-gray-200 outline-none" />
                  <input className=" p-2 bg-gray-200 outline-none" />
                </div>
                <div>
                  <textarea className="w-full bg-gray-200 outline-none ps-2.5"></textarea>
                </div>
                <div className="items-center justify-center flex relative bottom-2">
                  <button type="submit" className="p-2 px-4 items-center justify-center flex capitalize bg-gray-300 rounded-md hover:bg-gray-400">
                    send
                  </button>
                </div>
              </form>
            </div>

          </div>
        </div>

        <div className="basis-1/2">
          <img  src={"/images/map.png"} className="w-full h-full object-cover opacity-60 " />
        </div>
      </div>
    </section>
  );
};

export default Contact;
