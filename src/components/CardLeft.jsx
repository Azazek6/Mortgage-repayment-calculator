import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  resultCalculate,
  resultPaymentMonth,
  resetAll,
} from "../features/mortgages/MortgagesSlice";
import Input from "./Input";
import Button from "./Button";
import InputRadio from "./InputRadio";
import { calculatorIcon } from "../assets/icons/icons";

const CardForm = () => {
  const dispatch = useDispatch();

  const [errorState, setErrorState] = useState(false);
  const [mortgage, setMortgage] = useState({
    amount: "",
    term: "",
    rate: "",
    type: "",
  });

  const clear = () => {
    setMortgage({
      amount: "",
      term: "",
      rate: "",
      type: "",
    });
    dispatch(resetAll());
  };

  const handleChange = ({ target: { name, value } }) => {
    setMortgage({ ...mortgage, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      mortgage.amount == "" ||
      mortgage.term == "" ||
      mortgage.rate == "" ||
      mortgage.type == ""
    ) {
      setErrorState(true);
      return;
    }

    if (mortgage.type == "Only") {
      alert("En construccion...!");
      return;
    }

    dispatch(resultCalculate(mortgage));
    dispatch(resultPaymentMonth(mortgage));
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="md:w-[50%] flex flex-col py-6 px-6 gap-5 "
    >
      <div className="flex flex-col xs:flex-row xs:items-center xs:justify-between gap-2">
        <h1 className="font-[PlusJakartaBold] text-xl text-[hsl(202,55%,16%)]">
          Mortgage Calculator
        </h1>
        <span
          className="text-sm underline text-[hsl(200,24%,40%)] hover:text-[hsl(202,55%,16%)] transition-all duration-300 ease-in-out cursor-pointer"
          onClick={clear}
        >
          Clear All
        </span>
      </div>
      <Input
        title="Mortgage Amount"
        icon="£"
        direction="left"
        handleChange={handleChange}
        name="amount"
        error={errorState && mortgage.amount == "" ? true : false}
        value={mortgage.amount}
      />
      <div className="w-[100%] flex flex-col xs:flex-row gap-5">
        <div className="w-[100%]">
          <Input
            title="Mortgage Term"
            icon="years"
            direction="right"
            handleChange={handleChange}
            name="term"
            error={errorState && mortgage.term == "" ? true : false}
            value={mortgage.term}
          />
        </div>
        <div className="w-[100%]">
          <Input
            title="Interest Rate"
            icon="%"
            direction="right"
            handleChange={handleChange}
            name="rate"
            error={errorState && mortgage.rate == "" ? true : false}
            value={mortgage.rate}
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <p className="font-[PlusJakartaMedium] text-[hsl(200,24%,40%)] text-sm">
          Mortgage Type
        </p>
        <div className="space-y-4">
          <InputRadio
            title="Repayment"
            name="type"
            value="Repayment"
            selectedValue={mortgage.type}
            onRadioChange={handleChange}
          />
          <InputRadio
            title="Interest Only"
            name="type"
            value="Only"
            selectedValue={mortgage.type}
            onRadioChange={handleChange}
          />
        </div>
        {errorState && mortgage.type == "" && (
          <span className="font-[PlusJakartaMedium] text-[hsl(4,69%,50%)] text-xs sm:text-sm">
            This field required
          </span>
        )}
        <Button title={"Calculate Repayments"} icon={calculatorIcon} />
      </div>
    </form>
  );
};

export default CardForm;
