import {
  AreaBumpChart,
  BulletChart,
  CalendarChart,
  Dashboard,
  Filter,
  FilterContextProvider,
  MarimekkoChart,
  ParallelCoordinatesChart,
  SwarmPlotChart,
} from "./components";

import "./App.css";

function App() {
  const visualizations = [
    {
      chart: <BulletChart />,
      title: "Bullet Chart",
      description:
        "Bullet chart supporting multiple ranges/measures/markers. You can fully customize this chart using custom components via rangeComponent, measureComponent and markerComponent properties.",
    },
    {
      chart: <AreaBumpChart />,
      title: "Area Bump Chart",
      description:
        "The AreaBump chart is similar to the Bump chart, but instead of only showing the ranking over time, it also shows the values on the y-axis.",
    },
    {
      chart: <CalendarChart />,
      title: "Calendar Chart",
      description:
        "This chart shows daily changes of the Dow Jones Industrial Average from 2000 to 2020. The responsive alternative of this component is ResponsiveCalendar, it also offers a canvas implementations, see CalendarCanvas.",
    },
    {
      chart: <MarimekkoChart />,
      title: "Marimekko Chart",
      description:
        "The Marimekko component is somewhat similar to a bar chart, but it allows you to use an extra dimension to compute the thickness of each bar. It also shares some behavior of the Stream chart regarding the way we can configure the offset.",
    },
    {
      chart: <ParallelCoordinatesChart />,
      title: "Parallel Coordinates Chart",
      description:
        "Parallel coordinates chart, supports continuous numerical variables and discrete values. There is a variation around the ParallelCoordinates component. Well suited for large data sets as it does not impact DOM tree depth, however you'll lose the isomorphic ability and transitions.",
    },
    {
      chart: <SwarmPlotChart />,
      title: "Swarm Plot Chart",
      description:
        "A swarm plot component which can also be used to make a beeswarm plot when using a single group. This chart can display 2 data dimensions, a categorical one: groups, and a quantitative one: values. This example uses 3 dimensions, the grouping is done by the group property while the value is determined by the price property, node size is dynamic and depends on the volume property.",
    },
  ];

  return (
    <main className="layout">
      <FilterContextProvider>
        <Filter />
        <Dashboard visualizations={visualizations} />
      </FilterContextProvider>
    </main>
  );
}

export default App;
