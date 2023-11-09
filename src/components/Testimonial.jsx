import React from "react";
import { Carousel } from "flowbite-react";
import { AiFillStar } from "react-icons/ai";
import { GrPrevious, GrNext } from "react-icons/gr";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    rating: 5,
    city: "Washington",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    name: "Jane Smith",
    rating: 5,
    city: "New York",
    content:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    name: "Alice Johnson",
    rating: 5,
    city: "Australia",
    content:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
  },
];

const Testimonial = () => {
  return (
    <div
      id="testimonial"
      className="max-w-screen-xl mx-auto h-56 sm:h-64 xl:h-80 2xl:h-96">
      <div className="text-center text-4xl font-bold">Testimonial</div>
      <div className="text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit temporibus
        rem reiciendis.
      </div>
      <Carousel
        leftControl={<GrPrevious className="h-10 w-10" />}
        rightControl={<GrNext className="h-10 w-10" />}
        indicators={false}>
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="flex flex-col sm:flex-row items-center justify-center h-full p-4">
            <img
              className="w-10 h-10 object-cover rounded-full mb-3 sm:mr-3 sm:mb-0"
              src={`https://www.rollingstone.com/wp-content/uploads/2023/03/jisoo.jpg?w=1581&h=1054&crop=1`}
              alt={testimonial.name}
            />
            <div>
              <div className="flex justify-center lg:justify-start">
                {[...Array(5)].map((_, index) => (
                  <AiFillStar key={index} className="text-[#F9CC00] mx-1" />
                ))}
              </div>
              <div>{testimonial.content}</div>
              <div className="font-bold">
                {testimonial.name}, {testimonial.city}
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Testimonial;
