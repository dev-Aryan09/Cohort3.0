import { useState } from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";

const footerLinks = [
  {
    title: "Tea Varieties",
    links: ["Whole Leaf Tea Sachets", "Pure Matcha", "Tea Lattes", "Iced Tea"],
  },
  {
    title: "Collections",
    links: [
      "Matcha",
      "Chai",
      "Organic Tea",
      "Naked Tea Sachets",
      "Black Tea",
      "Green Tea",
      "Herbal Tea",
      "Caffeine-Free",
      "Gift & Samplers",
    ],
  },
  {
    title: "Lattes",
    links: [
      "Nice Matcha",
      "Barista Matcha",
      "Nice Chai",
      "Barista Chai",
      "Two Roots Golden Latte",
    ],
  },
  {
    title: "Learn",
    links: ["Our Story", "Our Spirit", "FAQ", "Reviews"],
  },
  {
    title: "Tea Journal",
    links: ["All Articles", "Tea 101", "Recipes", "Sustainability"],
  },
  {
    title: "Support",
    links: [
      "Contact",
      "My Account",
      "Loyal-Tea",
      "Shipping & Returns",
      "Privacy Policy",
      "Terms & Conditions",
    ],
  },
  {
    title: "Cafe & Wholesale Partners",
    links: [
      "Cafe & Wholesale Partners",
      "Wholesale Login",
      "Product and Media Files",
      "Displays & Starter Kits",
      "Brew Guide",
      "Wholesale Catalog",
    ],
  },
];

const Footer = () => {
  const [faq, setFaq] = useState(null);

  return (
    <footer className="bg-[#C8DDFB] pt-16 pb-10">
      {/* Newsletter */}
      <div className="max-w-5xl mx-auto px-6">
        <h5 className="uppercase font-black text-4xl tracking-wide">
          STEEP WITH US
        </h5>

        <p className="font-serif  md:text-5xl text-4xl text-gray-700 mt-5 max-w-3xl leading-tight">
          Get news stories, brewing tips, and special offers straight to your
          inbox.
        </p>

        <div className="flex flex-col md:flex-row gap-4 mt-10">
          <input
            type="email"
            placeholder="name@email.com"
            className="flex-1  py-4 rounded-2xl border border-black px-6 text-xl outline-none bg-white"
          />

          <button className="bg-[#2E2A64] text-white px-12 rounded-full text-xl h-16 hover:bg-black transition">
            Submit
          </button>
        </div>

        {/* Social Icons */}

        <div className="flex justify-end gap-5 mt-10">
          {[<FaFacebookF />, <FaInstagram />, <FaLinkedinIn />].map(
            (icon, i) => (
              <div
                key={i}
                className="w-14 h-14 rounded-full border border-black flex items-center justify-center text-2xl cursor-pointer hover:bg-[#2E2A64] hover:text-white transition"
              >
                {icon}
              </div>
            ),
          )}
        </div>
      </div>

      {/* Footer Links */}

      {/* Desktop */}
      <div className=" md:block hidden max-w-[1850px] mx-auto mt-16 px-8">
        <div className="bg-[#2E2A64] rounded-2xl p-10">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-10">
            {footerLinks.map((item) => (
              <div key={item.title}>
                <h3 className="text-white text-xl font-medium font-serif mb-6">
                  {item.title}
                </h3>

                <ul className="space-y-2">
                  {item.links.map((link) => (
                    <li
                      key={link}
                      className="text-gray-300 hover:text-white cursor-pointer text-md transition"
                    >
                      {link}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className=" md:hidden block  max-w-[1850px] mx-auto mt-16 px-3 ">
        <div className="bg-[#2E2A64] rounded-2xl p-5">
          <div className="grid gap-5 ">
            {footerLinks.map((item, i) => (
              <div key={item.title}>
                <div className="border-b pb-2  border-gray-400 ">
                  <h3
                    onClick={() => setFaq(faq == i ? null : i)}
                    className="  text-xl text-white  cursor-pointer     font-semibold  flex justify-between items-center px-1 "
                  >
                    {item.title}

                    <span
                      className={`bg-[#c8ddfb] rounded-full flex justify-center items-center h-7 w-7 text-[#2e2a64] transition-transform duration-300
                                                 ${
                                                   faq === i
                                                     ? "rotate-0  bg-[#fdc700] text-white "
                                                     : "rotate-180  "
                                                 }`}
                    >
                      <IoIosArrowUp />
                    </span>
                  </h3>

                  <ul
                    className={`origin-top flex flex-col gap-2 px-2 overflow-hidden transition-all duration-400 ${
                      faq === i
                        ? "max-h-96  scale-y-100 opacity-100"
                        : "scale-y-0 opacity-0 max-h-0 "
                    }`}
                  >
                    {item.links.map((link) => (
                      <li
                        key={link}
                        className="text-gray-300 hover:text-white cursor-pointer text-md transition"
                      >
                        {link}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
