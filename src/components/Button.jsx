/* eslint-disable react/prop-types */
const Button = ({ title, icon }) => {
  return (
    <button className="w-[100%] xs:w-[60%] md:w-[86%] font-[PlusJakartaBold] bg-[hsl(61,70%,52%)] rounded-full py-4 mt-4 text-[hsl(202,55%,16%)] flex items-center justify-center gap-3 hover:opacity-75 transition-all duration-300 ease-in-out">
      {icon}
      {title}
    </button>
  );
};

export default Button;
