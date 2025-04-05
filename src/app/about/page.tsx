import ImageFallback from "@/helpers/ImageFallback";
import MDXContent from "@/helpers/MDXContent";
import { getListPage } from "@/lib/contentParser";
import { markdownify } from "@/lib/utils/textConverter";
import SeoMeta from "@/partials/SeoMeta";
import Timeline from "@/partials/Timeline";
import CallToAction from "@/partials/CallToAction";

import Image from "next/image";
import { RegularPage } from "@/types";

const About = () => {
  const data: RegularPage = getListPage("about/_index.md");
  const { frontmatter, content } = data;
  const { title, meta_title, description, image } = frontmatter;

  return (
    <>
      <SeoMeta
        title={title}
        meta_title={meta_title}
        description={description}
        image={image}
      />
      <section className="section  pt-8">
        {/* Background image */}
        <div className="container">
          <div className=" relative">
            <div className="text-center ">
              <div className="justify-center items-center flex relative ">
                <div
                  className="items-start inline-flex relative pointer-events-auto aos-init aos-animate"
                  data-aos="fade-up"
                >
                  <Image
                    className="opacity-70 max-w-full h-auto block align-middle"
                    src="/images/works/works-2.webp"
                    width="768"
                    height="432"
                    alt="About Never Guilt hero"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-secondary"
                    aria-hidden="true"
                  ></div>
                </div>
                <div
                  className="absolute bottom-space_m pointer-events-auto aos-init aos-animate"
                  data-aos="fade-down"
                >
                  <h1 className="text-text text-[2.5rem] md:text-[4rem] lg:text-[5.5rem] leading-[1.18] md:leading-[1.16] lg:leading-[1.11] font-black -tracking-[0.02em]">
                    Established on <span className="text-primary">1999</span>
                  </h1>
                </div>
                <div
                  className="absolute bottom-0 -mb-[2rem] h-[4rem] w-[0.125rem] bg-primary"
                  aria-hidden="true"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Timeline />
      <CallToAction />
    </>
  );
};

export default About;
