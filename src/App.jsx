import CardLeft from "./components/CardLeft";
import CardRight from "./components/CardRight";

const App = () => {
  return (
    <div className="sm:h-screen flex flex-col sm:justify-center sm:items-center xs:m-[3%]">
      <div className="flex flex-col md:flex-row p-0  bg-[hsl(0,0%,100%)] xs:rounded-t-2xl md:rounded-t-none md:rounded-l-2xl">
        <CardLeft />
        <CardRight />
      </div>
    </div>
  );
};

export default App;
