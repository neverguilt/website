"use client";
import { useState } from "react";
import ButtonComponent from "@/shortcodes/Button";

const Timeline = () => {
  const [year, setYear] = useState("1999");

  return (
    <section className="section pt-8">
      <div className="container">
        <h2 className="text-text text-center pb-4 md:pb-8">
          Our timeline of works and growth
        </h2>
        <div className="flex items-start">
          {/* Timeline buttons */}
          <div className="relative mr-4 md:mr-12 lg:mr-32">
            <div className="absolute pointer-events-none ml-[4rem] my-[1.5rem] -z-10 inset-0">
              <div className="bg-secondary w-[.125rem] h-full inset-0 absolute"></div>
            </div>
            {["1999", "2005", "2010", "2015", "2020", "2024"].map((y) => (
              <button
                key={y}
                className={`font-medium text-left pr-[.5rem] text-text py-[.75rem] justify-between items-center flex cursor-pointer `}
                onClick={() => setYear(y)}
              >
                <span className="block overflow-hidden text-ellipsis whitespace-nowrap w-[3rem] ">
                  {y}
                </span>
                <span
                  className={`block rounded-full w-[.875rem] h-[.875rem] border-2 border-secondary ${year === y ? "bg-primary cu418" : "bg-secondary"}`}
                ></span>
              </button>
            ))}
          </div>

          {/* Articles */}
          <div className="flex-grow ">
            {year === "1999" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 ">
                <Article
                  paragraph="Never Guilt was established by N V Ramana in 1999. The company started with manual labor cutting, focusing on steel signage."
                  title="Never Guilt Established"
                />
                <Article
                  paragraph="In the same year of its establishment, Never Guilt launched its signature steel signage services, quickly gaining recognition in the industry."
                  title="Launch of Steel Signage Services"
                />
                <Article
                  paragraph="Despite being a new entrant in the market, Never Guilt attracted a significant number of customers due to its high-quality services and craftsmanship."
                  title="Gaining Initial Customers"
                />
              </div>
            )}
            {year === "2005" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 ">
                <Article
                  paragraph="By 2005, Never Guilt had gone into key steel type cutting works."
                  title="Key Steel Type Cutting Works"
                />
                <Article
                  paragraph="Never Guilt introduced steel products like gates, glass railings, and step railings."
                  title="Steel Products Introduction"
                />
              </div>
            )}
            {year === "2010" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 ">
                <Article
                  paragraph="Samba Murthy Road, Gandhinagar, Vijayawada, became a location hub for steel works manufacturers."
                  title="Steel Manufacturer Hub"
                />
                <Article
                  paragraph="We are proud that Ambica Steels is one of the first shops established there, providing easy access to people in Vijayawada for their steel works needs."
                  title="Pioneering Presence"
                />
              </div>
            )}
            {year === "2015" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 ">
                <Article
                  paragraph="Ambica Steels had to cope with the loss of their founder N V Ramana Garu, and his son N Chakri took over the business."
                  title="Leadership Transition"
                />
                <Article
                  paragraph="N Chakri adapted to new changes in the steel industry, understanding that manual labor meant less work in more time and less precision."
                  title="Adapting to Change"
                />
              </div>
            )}
            {year === "2020" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 ">
                <Article
                  paragraph="He bought several top-notch steel cutting, etching, and engraving machines to satisfy the growing demand."
                  title="Modernization with Advanced Machinery"
                />
                <Article
                  paragraph="To meet the evolving market needs, Ambica Steels also executed several design and digital advertising campaigns."
                  title="Strategic Design and Digital Ads"
                />
              </div>
            )}
            {year === "2024" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 ">
                <Article
                  paragraph="Due to increasing orders from long distances, N Chakri decided to implement a franchise system."
                  title="Franchise Implementation"
                />
                <Article
                  paragraph="This decision helped in reducing customer wait times for fixing and maintenance, addressing the issue of workers covering long distances."
                  title="Improved Customer Service"
                />
                <Article
                  paragraph="Ambica Steels established new franchises in Visakhapatnam and Guntur, ensuring quicker service and expanded reach."
                  title="Expansion to Visakhapatnam and Guntur"
                />
              </div>
            )}
          </div>
        </div>
        <div className="mt-8 mb:mt-16 flex justify-center items-center ">
          <ButtonComponent link="/franchise" label="Franchise Enquiry" />
        </div>
      </div>
    </section>
  );
};

const Article = ({
  title,
  paragraph,
}: {
  title: string;
  paragraph: string;
}) => (
  <article className="p-6 flex flex-col bg-secondary rounded-md">
    <header>
      <h3 className="mb-1 font-extrabold">{title}</h3>
    </header>
    <div className="text-gray-600 flex-grow ">
      <p>{paragraph}</p>
    </div>
    {/* <a
      className="text-primary font-medium items-center inline-flex mt-2 no-underline "
      href="#0"
    >
      <span>Learn more</span>
      <svg
        className="flex-shrink-0 w-3 h-3 ml-2"
        viewBox="0 0 12 12"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className="c4u31"
          d="M6.602 11l-.875-.864L9.33 6.534H0v-1.25h9.33L5.727 1.693l.875-.875 5.091 5.091z"
        ></path>
      </svg>
    </a> */}
  </article>
);

export default Timeline;
