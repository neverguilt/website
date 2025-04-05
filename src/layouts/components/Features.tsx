import { ShieldCheck, Search, Upload, BadgeCheck } from "lucide-react";

const features = [
  {
    icon: <Upload className="h-10 w-10 text-primary" />,
    title: "Upload Your Documents",
    description: "Easily upload your court clearance documents through our secure portal."
  },
  {
    icon: <ShieldCheck className="h-10 w-10 text-primary" />,
    title: "Official Verification",
    description: "Our team verifies the authenticity of your documents with relevant authorities."
  },
  {
    icon: <BadgeCheck className="h-10 w-10 text-primary" />,
    title: "Get Verified Badge",
    description: "Receive an official verification badge that you can share with employers."
  },
  {
    icon: <Search className="h-10 w-10 text-primary" />,
    title: "Public Verification",
    description: "Allow employers and others to verify your status through our public search."
  }
];

const Features = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-text mb-4">
            How NeverGuilt Works
          </h2>
          <p className="text-text_200 max-w-3xl mx-auto">
            Our simple yet secure process helps you get your court clearance documents verified and makes the verification accessible to those who need to know.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-border transition-all hover:shadow-md hover:border-border/20">
              <div className="mb-4 bg-body inline-flex p-3 rounded-lg">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-text mb-2">
                {feature.title}
              </h3>
              <p className="text-text_200">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;