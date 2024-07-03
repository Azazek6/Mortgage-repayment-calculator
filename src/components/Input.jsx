/* eslint-disable react/prop-types */
const Input = ({ title, direction, icon }) => {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor=""
        className="font-[PlusJakartaMedium] text-[hsl(200,24%,40%)] text-sm"
      >
        {title}
      </label>
      <div className="w-[100%] relative">
        {direction === "left" ? (
          <>
            <span className="font-[PlusJakartaBold] absolute left-0 inset-y-0 flex items-center pl-4 pr-3 bg-[hsl(202,86%,94%)] border-l border-t border-b border-[hsl(200,24%,40%)] text-[hsl(200,24%,40%)] h-full px-2 rounded-l-sm text-sm">
              {icon}
            </span>
            <input
              type="number"
              className="w-[100%] pl-12 border border-[hsl(200,24%,40%)] border-l-0 rounded-sm p-2 focus:outline-none"
            />
          </>
        ) : (
          <>
            <input
              type="number"
              className="w-[100%] pr-12 border border-[hsl(200,24%,40%)] border-r-0 rounded-sm p-2 focus:outline-none"
            />
            <span className="font-[PlusJakartaBold] absolute right-0 inset-y-0 flex items-center pr-4 pl-3 bg-[hsl(202,86%,94%)] border-r border-t border-b border-[hsl(200,24%,40%)] text-[hsl(200,24%,40%)] h-full px-2 rounded-r-sm text-sm">
              {icon}
            </span>
          </>
        )}
      </div>
    </div>
  );
};

export default Input;
