import img from "@assets/img/heroNew.png";
import Button from "@components/layouts/Button";


const Hero = () => {
  return (
    <div className=" h-screen bg-black text-white flex flex-col md:flex-row justify-center items-center md:gap-8">
      {/* content section  */}
      <div className=" w-full md:w-2/4 text-center md:text-start mt-16 space-y-4">
        <h1 className=" text-4xl lg:text-7xl font-bold leading-tight">
          Authentic <span className="text-yellow-500">Pizzas</span> Timeless
          Flavors
        </h1>
        <p className=" text-sm lg:text-base">
        <strong>Savor Every Slice! 🍕</strong><br />
        Craving the perfect pizza? We have got you covered! From classic margherita to bold, cheesy creations, our pizzas are made fresh with premium ingredients and baked to perfection.<br />

        🧀 Melty Cheese, Crispy Crust<br />
        🍅 Farm-Fresh Toppings<br />
        🚚 Fast Delivery to Your Doorstep<br />

        Order now and experience a slice of happiness!<br />
        </p>
        <Button title="Read More" />
      </div>

      {/* img section  */}
      <div className=" mt-14">
        <img className="animate-spin-slow w-56 lg:w-96" src={img} alt="img" />
      </div>
    </div>
  );
};

export default Hero;