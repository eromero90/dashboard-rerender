import { ResponsiveBullet } from "@nivo/bullet";
import { data } from "./data/bullet";
import { useFilterContext } from "../FilterContext";

const BulletChart = () => {
  console.count("BulletChart");

  const { filter } = useFilterContext();

  return (
    <>
      <span>{filter ? `Using filter: ${filter}` : ""}</span>
      <ResponsiveBullet
        data={data}
        margin={{ top: 50, right: 90, bottom: 50, left: 90 }}
        spacing={46}
        titleAlign="start"
        titleOffsetX={-70}
        measureSize={0.2}
      />
    </>
  );
};

export { BulletChart };
