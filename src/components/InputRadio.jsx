/* eslint-disable react/prop-types */
const InputRadio = ({ title, name, value, selectedValue, onRadioChange }) => {
  const isSelected = selectedValue === value;
  const handleRadioChange = () => {
    onRadioChange({ target: { name, value } });
  };

  return (
    <div
      className={`flex items-center space-x-3 border rounded-md p-4 cursor-pointer ${
        isSelected
          ? "border-[hsl(61,70%,52%)] bg-[hsl(61,70%,90%)]"
          : "border-[hsl(200,24%,40%)]"
      }`}
      onClick={handleRadioChange}
    >
      <input
        type="radio"
        name={name}
        value={value}
        id={`${name}-${value}`}
        className="hidden"
        checked={isSelected}
        onChange={handleRadioChange}
      />
      <label
        htmlFor={`${name}-${value}`}
        className="flex items-center space-x-3 cursor-pointer w-full"
      >
        <span
          className={`w-4 h-4 inline-block border  rounded-full relative ${
            isSelected
              ? "border-[hsl(61,70%,52%)]"
              : "bg-white border-[#586163]"
          } transition duration-300 ease-in-out`}
        >
          {isSelected && (
            <span className="w-2 h-2 bg-[hsl(61,70%,52%)] rounded-full absolute inset-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
          )}
        </span>
        <span className="font-[PlusJakartaBold] text-sm text-[hsl(202,55%,16%)]">
          {title}
        </span>
      </label>
    </div>
  );
};

export default InputRadio;
