import { emptyIcon } from "../assets/icons/icons";

const CardRight = () => {
  return (
    <div className="flex flex-col py-10 px-4 gap-3 bg-[hsl(202,55%,16%)] items-center md:justify-center xs:rounded-b-2xl md:rounded-b-none md:rounded-bl-[5rem] md:rounded-r-2xl">
      {emptyIcon}
      <h1 className="font-[PlusJakartaBold] text-[hsl(0,0%,100%)] text-lg text-center">
        Results shown here
      </h1>
      <p className="w-[98%] text-[hsl(203,41%,72%)] text-sm text-center">
        Complete the form and click “calculate repayments” to see what your
        monthly repayments would be.
      </p>
    </div>
  );
};

export default CardRight;
