import { Star, Quote } from "lucide-react";

const ReviewsSection = () => {
  const reviews = [
    {
      name: "Rajesh Kumar",
      location: "Mumbai",
      rating: 5,
      text: "Excellent service! The driver was very professional and the car was spotlessly clean. Made my Aurangabad to Mumbai journey very comfortable.",
    },
    {
      name: "Priya Sharma",
      location: "Pune",
      rating: 5,
      text: "Very punctual and reliable. Booked for a family trip and we had a wonderful experience. Highly recommended for long-distance travel!",
    },
    {
      name: "Amit Patel",
      location: "Nashik",
      rating: 5,
      text: "Safe driving and affordable pricing. The Tata Altroz was very comfortable for our 6-hour journey. Will definitely book again.",
    },
    {
      name: "Sneha Deshmukh",
      location: "Aurangabad",
      rating: 5,
      text: "Best travel service in Aurangabad! The driver is friendly and knows all the routes well. Always my first choice for outstation trips.",
    },
    {
      name: "Mohammed Shaikh",
      location: "Nagpur",
      rating: 5,
      text: "Traveled with family including elderly parents. Very smooth and comfortable ride. The driver took extra care of our comfort.",
    },
    {
      name: "Kavita Joshi",
      location: "Shirdi",
      rating: 5,
      text: "Used their service for Shirdi darshan trip. On-time pickup, clean car, and courteous behavior. 10/10 would recommend!",
    },
  ];

  return (
    <section id="reviews" className="py-20 md:py-28 bg-card">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium mb-4">
            Customer Reviews
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our <span className="text-primary">Customers Say</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Don't just take our word for it. Here's what our satisfied customers 
            have to say about their travel experience with us.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-background rounded-2xl p-6 shadow-soft hover:shadow-card transition-shadow border border-border"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-amber text-amber"
                  />
                ))}
              </div>
              <div className="relative mb-4">
                <Quote className="w-8 h-8 text-primary/20 absolute -top-2 -left-2" />
                <p className="text-muted-foreground leading-relaxed pl-4">
                  {review.text}
                </p>
              </div>
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-semibold">
                    {review.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">{review.name}</p>
                  <p className="text-sm text-muted-foreground">{review.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
