/* eslint-disable react/prop-types */
import { useState } from "react";
const Input = ({
  title,
  direction,
  icon,
  handleChange,
  name,
  value,
  error,
}) => {
  const [clickState, setClickState] = useState(false);
  const errorStyle = error
    ? "bg-[hsl(4,69%,50%)] text-[hsl(0,0%,100%)]"
    : "bg-[hsl(202,86%,94%)] text-[hsl(200,24%,40%)]";
  const inputErrorStyle = error
    ? "border-[hsl(4,69%,50%)]"
    : "border-[hsl(200,24%,40%)]";
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
            <span
              className={`font-[PlusJakartaBold] absolute left-0 inset-y-0 flex items-center pl-4 pr-3 ${errorStyle} border-l border-t border-b border-[hsl(200,24%,40%)] h-full px-2 rounded-l-sm text-sm ${
                clickState && "bg-[hsl(61,70%,52%)] border-[hsl(61,70%,52%)]"
              }`}
            >
              {icon}
            </span>
            <input
              type="number"
              onChange={handleChange}
              name={name}
              value={value}
              onClick={() => setClickState(true)}
              onBlur={() => setClickState(false)}
              className={`w-[100%] pl-12 border ${inputErrorStyle}  border-l-0 rounded-sm p-2 focus:outline-none ${
                clickState && "border-[hsl(61,70%,52%)]"
              }`}
            />
          </>
        ) : (
          <>
            <input
              type="number"
              onChange={handleChange}
              name={name}
              value={value}
              onClick={() => setClickState(true)}
              onBlur={() => setClickState(false)}
              className={`w-[100%] pr-12 border ${inputErrorStyle} border-r-0 rounded-sm p-2 focus:outline-none  ${
                clickState && "border-[hsl(61,70%,52%)]"
              }`}
            />
            <span
              className={`font-[PlusJakartaBold] absolute right-0 inset-y-0 flex items-center pr-4 pl-3 ${errorStyle} border-r border-t border-b border-[hsl(200,24%,40%)]  h-full px-2 rounded-r-sm text-sm ${
                clickState && "bg-[hsl(61,70%,52%)] border-[hsl(61,70%,52%)]"
              }`}
            >
              {icon}
            </span>
          </>
        )}
      </div>
      {error && (
        <span className="font-[PlusJakartaMedium] text-[hsl(4,69%,50%)] text-xs sm:text-sm">
          This field required
        </span>
      )}
    </div>
  );
};

export default Input;
