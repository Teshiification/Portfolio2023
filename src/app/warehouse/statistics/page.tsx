import { Card } from "@/components/ui";

const Statistics = () => {
  return (
    <div className="h-screen w-screen bg-vicious-black flex gap-10 justify-around place-items-center p-10 md:p-20 overflow-hidden">
      <div className="flex gap-10 place-items-center select-none">
        <Card color={"red"} width={20} height={20}>
          <button className="text-xl md:text-3xl font-semibold mx-auto my-auto">
            -
          </button>
        </Card>
        <Card color={"orange"}>
          <label className="absolute place-self-center top-0 uppercase">
            Shisha
          </label>
          <label className="text-6xl mx-auto my-auto">0</label>
          <label className="absolute place-self-center bottom-0 uppercase">
            Head counter
          </label>
        </Card>
        <Card color={"teal"} width={20} height={20}>
          <button className="text-xl md:text-3xl font-semibold mx-auto my-auto">
            +
          </button>
        </Card>
      </div>
    </div>
  );
};

export default Statistics;
