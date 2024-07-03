import { useState } from "react";
import Input from "./Input";
import Button from "./Button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { calculatorIcon } from "../assets/icons/icons";

const CardForm = () => {
  const [selectedValue, setSelectedValue] = useState("");
  return (
    <div className="flex flex-col py-6 px-6 gap-5 ">
      <div className="flex flex-col xs:flex-row xs:items-center xs:justify-between gap-2">
        <h1 className="font-[PlusJakartaBold] text-xl text-[hsl(202,55%,16%)]">
          Mortgage Calculator
        </h1>
        <span className="text-sm underline text-[hsl(200,24%,40%)] hover:text-[hsl(202,55%,16%)] transition-all duration-300 ease-in-out cursor-pointer">
          Clear All
        </span>
      </div>
      <Input title="Mortgage Amount" icon="£" direction="left" />
      <div className="w-[100%] flex flex-col xs:flex-row gap-5">
        <div className="w-[100%]">
          <Input title="Mortgage Term" icon="years" direction="right" />
        </div>
        <div className="w-[100%]">
          <Input title="Interest Rate" icon="%" direction="right" />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <p className="font-[PlusJakartaMedium] text-[hsl(200,24%,40%)] text-sm">
          Mortgage Type
        </p>
        <RadioGroup
          value={selectedValue}
          onChange={setSelectedValue}
          defaultValue="Repayment"
        >
          <div
            className={`flex items-center space-x-3 border  rounded-md p-4 ${
              selectedValue === "Repayment"
                ? "border-[hsl(61,70%,52%)]"
                : "border-[hsl(200,24%,40%)]"
            }`}
            onClick={() => setSelectedValue("Repayment")}
          >
            <RadioGroupItem value="Repayment" id="r1" />
            <Label htmlFor="r1">Repayment</Label>
          </div>
          <div
            className={`flex items-center space-x-3 border  rounded-md p-4 ${
              selectedValue === "Only"
                ? "border-[hsl(61,70%,52%)]"
                : "border-[hsl(200,24%,40%)]"
            }`}
            onClick={() => setSelectedValue("Only")}
          >
            <RadioGroupItem value="Only" id="r2" />
            <Label htmlFor="r2">Interest Only</Label>
          </div>
        </RadioGroup>
        <Button title={"Calculate Repayments"} icon={calculatorIcon} />
      </div>
    </div>
  );
};

export default CardForm;
