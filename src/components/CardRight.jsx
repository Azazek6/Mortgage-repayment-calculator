import { useSelector } from "react-redux";
import { Separator } from "@/components/ui/separator";
import { emptyIcon } from "../assets/icons/icons";

const CardRight = () => {
  const mortgage = useSelector((state) => state.mortgages.value);

  console.log(mortgage);
  return (
    <>
      {mortgage > 0 ? (
        <div className="md:w-[50%] flex flex-col py-10 px-4 md:px-8 gap-3 bg-[#122f3f] xs:rounded-b-2xl md:rounded-b-none md:rounded-bl-[5rem] md:rounded-r-2xl">
          <h1 className="font-[PlusJakartaBold] text-[hsl(0,0%,100%)] text-lg">
            Your results
          </h1>
          <p className="text-[hsl(203,41%,72%)] text-base">
            Your results are shown below based on the information you provided.
            To adjust the results, edit the form and click “calculate
            repayments” again.
          </p>
          <div className="w-[100%] flex justify-center mt-4">
            <div className="w-[100%] px-4 py-5 rounded-lg border-t-4 flex flex-col bg-[#0d2330] border-t-[hsl(61,70%,52%)] gap-3">
              <h3 className="text-[hsl(203,41%,72%)] text-lg">
                Your monthly repayments
              </h3>
              <span className="font-[PlusJakartaBold] text-[hsl(61,70%,52%)] text-4xl">
                £1,797.75
              </span>
              <Separator className="my-2 bg-[#243a47]" />
              <h3 className="text-[hsl(203,41%,72%)] text-lg">
                Total you&apos;ll repay over the term
              </h3>
              <span className="font-[PlusJakartaBold] text-[hsl(0,0%,100%)] text-2xl">
                £539,322.94
              </span>
            </div>
          </div>
        </div>
      ) : (
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
      )}
    </>
  );
};

export default CardRight;
