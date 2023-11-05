import data from "@/app/data/data";
import InfrastructureCard from "./InfrastructureCard";

const InfrastructureMain = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-white">
      <div className="mt-40 mb-20">
        <h1 className="font-poppins font-semibold text-[44px] text-[#242331] text-center leading-[55px]">
          Self serve infrastructure platform for
          <span className="text-[#0C5BC6]"> scaling teams</span>
        </h1>
      </div>

      <div className="grid grid-rows-2 grid-cols-2 gap-32 mb-40">
        {data.map((item) => {
          return (
            <InfrastructureCard
              id={item.id}
              image={item.image}
              title={item.title}
              subtitle={item.subtitle}
            />
          );
        })}
      </div>
    </div>
  );
};

export default InfrastructureMain;
