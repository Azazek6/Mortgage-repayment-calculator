import CardLeft from "./components/CardLeft";
import CardRight from "./components/CardRight";

const App = () => {
  return (
    <div className="sm:h-screen flex flex-col sm:justify-center sm:items-center xs:m-[3%] sm:m-[10%]">
      <div className="flex flex-col md:flex-row p-0  bg-[hsl(0,0%,100%)] xs:rounded-t-2xl md:rounded-t-none md:rounded-l-2xl">
        <CardLeft />
        <CardRight />
      </div>
      <div className="attribution mt-5">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a href="https://www.frontendmentor.io/profile/Azazek6" target="_blank">
          @Azazek6
        </a>
        .
      </div>
    </div>
  );
};

export default App;
