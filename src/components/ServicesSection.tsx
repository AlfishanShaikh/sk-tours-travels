import { MapPin, ArrowLeftRight, Compass, Route } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: MapPin,
      title: "Long-Distance Trips",
      description:
        "Comfortable travel across cities and states. Popular routes include Chhatrapati Sambhajinagar (Aurangabad) to Mumbai, Chhatrapati Sambhajinagar (Aurangabad) to Pune, and many more.",
    },
    {
      icon: ArrowLeftRight,
      title: "One-Way Travel",
      description:
        "Need a drop to your destination? Book a one-way trip without worrying about return fares. Simple and affordable.",
    },
    {
      icon: Route,
      title: "Round Trips",
      description:
        "Planning to return? Book a round trip for better rates and guaranteed pickup for your return journey.",
    },
    {
      icon: Compass,
      title: "Outstation Travel",
      description:
        "Perfect for weekend getaways, pilgrimages, business trips, or visiting family in other cities.",
    },
    {
      icon: Route,
      title: "Custom Routes",
      description:
        "Have a specific destination in mind? I can accommodate custom routes based on your travel needs.",
    },
  ];

  return (
    <section id="services" className="py-20 md:py-28 bg-background">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Long-Distance & One-Way <span className="text-accent">Travel Services</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Reliable outstation car service for city-to-city transfers and custom routes 
            across Maharashtra. Professional service with on-time pickup.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl p-8 shadow-soft hover:shadow-card transition-all duration-300 border border-border hover:border-accent/30"
            >
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                <service.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Popular Routes */}
        <div className="mt-16 bg-card rounded-2xl p-8 shadow-soft border border-border">
          <h3 className="text-xl font-bold text-foreground mb-6 text-center">
            Popular Routes in Maharashtra
            Popular Routes
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Chhatrapati Sambhajinagar (Aurangabad) → Mumbai",
              "Chhatrapati Sambhajinagar (Aurangabad) → Pune",
              "Mumbai → Nashik",
              "Pune → Shirdi",
              "Chhatrapati Sambhajinagar (Aurangabad) → Nagpur",
              "Mumbai → Lonavala",
            ].map((route, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-secondary rounded-full text-secondary-foreground text-sm font-medium"
              >
                {route}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
