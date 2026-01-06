import { Car, Heart, Users, Briefcase, MapPin, Info } from "lucide-react";

const CarOptionsSection = () => {
  const vehicles = [
    "Toyota Innova Crysta",
    "Kia Carens",
    "Maruti Ertiga",
    "Swift Dzire (Diesel)",
    "Toyota Etios (Diesel)",
  ];

  const specialServices = [
    {
      icon: Heart,
      title: "Wedding & Event Car Rental",
      description: "Shaadi / Special Occasions",
    },
    {
      icon: Users,
      title: "Family Trips",
      description: "Comfortable travel for the whole family",
    },
    {
      icon: Briefcase,
      title: "Business Travel",
      description: "Professional and punctual service",
    },
    {
      icon: MapPin,
      title: "Outstation & Long-Distance Travel",
      description: "Reliable intercity journeys",
    },
  ];

  return (
    <section id="car-options" className="py-20 md:py-28 bg-secondary/30">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium mb-4">
            Our Fleet
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Available Car Options <span className="text-accent">(On Request)</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            We provide different car options based on availability and customer requirements 
            for long-distance travel, one-way trips, family journeys, and special occasions.
          </p>
        </div>

        {/* Vehicle Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
          {vehicles.map((vehicle, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 shadow-soft border border-border hover:border-accent/30 hover:shadow-card transition-all duration-300 text-center group"
            >
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                <Car className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-semibold text-foreground text-sm md:text-base">
                {vehicle}
              </h3>
            </div>
          ))}
        </div>

        {/* Special Services Sub-section */}
        <div className="bg-card rounded-2xl p-8 shadow-soft border border-border mb-8">
          <h3 className="text-xl font-bold text-foreground mb-6 text-center">
            Special Services
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specialServices.map((service, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center p-4 rounded-xl hover:bg-secondary/50 transition-colors"
              >
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                  <service.icon className="w-7 h-7 text-accent" />
                </div>
                <h4 className="font-semibold text-foreground mb-1">
                  {service.title}
                </h4>
                <p className="text-muted-foreground text-sm">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Availability Note */}
        <div className="flex items-start gap-3 bg-accent/10 rounded-xl p-4 max-w-2xl mx-auto">
          <Info className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
          <p className="text-sm text-muted-foreground">
            <span className="font-medium text-foreground">Please note:</span> All vehicles 
            are available on request and subject to availability. We arrange vehicles from 
            trusted partners to ensure quality and reliability for your journey.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CarOptionsSection;
