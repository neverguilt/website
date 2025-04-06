import { getListPage } from "@/lib/contentParser";
import { RegularPage } from "@/types";
import SeoMeta from "@/partials/SeoMeta";
import { PageHeader } from "@/components/PageHeader"
import ContactForm from "@/partials/ContactForm";
import Faq from "@/partials/Faq";
const Contact = () => {
  const data: RegularPage = getListPage("contact/_index.md");
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
      <PageHeader title="Contact Us" description="Have questions or need assistance? We're here to help." />

      <ContactForm />
      <Faq />
    </>
  );
};

export default Contact;
