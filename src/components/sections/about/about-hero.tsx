import { Button } from "@/components/ui/button";
import { CountUp } from "@/components/ui/countup";

export default function AboutHeroSection() {
  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=400&fit=crop",
      alt: "MY AIO Team at Conference",
    },
    {
      src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=400&fit=crop",
      alt: "MY AIO Team Presentation",
    },
    {
      src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=400&fit=crop",
      alt: "MY AIO Event Booth",
    },
  ];

  return (
    <section className="bg-black py-[200px] px-4">
      <div className="max-w-6xl mx-auto">
        {/* Badge */}
        <div className="flex justify-center mb-12">
          <Button
            variant="outline"
            className="border border-gray-600 text-gray-300  rounded-full px-6 py-2 bg-transparent"
          >
            About MY AIO
          </Button>
        </div>

        {/* Heading */}
        <div className="text-center mb-8">
          <h2 className="text-[64px] font-normal tracking-[-0.09em] leading-tight mb-4">
            <span className="text-gray-300 block">
              It started with the idea to
            </span>
            <span className="block bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              help businesses.
            </span>
          </h2>
        </div>

        {/* Description */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <p className="text-gray-400 text-lg leading-relaxed">
            We built MY AIO because everything else was a mess. Too many tools,
            Too much fluff. So we stripped it down, powered it up with AI, and
            made an all-in-one platform that actually works for every type of
            business.
          </p>
        </div>

        {/* Image Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-2xl group"
              style={{ height: "386px" }}
            >
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
            </div>
          ))}
        </div>

        {/* Trust Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[2px] text-center">
          <div className="space-y-2">
            <h3 className="text-[40px] font-light text-white">
              <CountUp value={700} suffix="+" />
            </h3>
            <p className="text-gray-400 text-[20px] font-medium">
              Businesses Empowered
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-[40px] font-light text-white">
              <CountUp value={10} suffix="+" />
            </h3>
            <p className="text-gray-400 text-[20px] font-medium">
              AI Models Trained On
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-[40px] font-light text-white">
              <CountUp value={75} suffix="%" />
            </h3>
            <p className="text-gray-400 text-[20px] font-medium">
              Efficiency Boost
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
