import { ResponsiveCalendar } from "@nivo/calendar";
import { data } from "./data/calendar";
import { useFilterContext } from "../FilterContext";

const CalendarChart = () => {
  console.count("CalendarChart render");

  const { filter } = useFilterContext();

  return (
    <>
      <span>{filter ? `Using filter: ${filter}` : ""}</span>
      <ResponsiveCalendar
        data={data}
        from="2015-03-01"
        to="2016-07-12"
        emptyColor="#eeeeee"
        colors={["#61cdbb", "#97e3d5", "#e8c1a0", "#f47560"]}
        margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
        yearSpacing={40}
        monthBorderColor="#ffffff"
        dayBorderWidth={2}
        dayBorderColor="#ffffff"
        legends={[
          {
            anchor: "bottom-right",
            direction: "row",
            translateY: 36,
            itemCount: 4,
            itemWidth: 42,
            itemHeight: 36,
            itemsSpacing: 14,
            itemDirection: "right-to-left",
          },
        ]}
      />
    </>
  );
};

export { CalendarChart };
