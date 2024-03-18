import { useState } from "react";
import { MainViz } from "./MainViz";
import { Previews } from "./Previews";

function Dashboard({
  visualizations,
}: {
  visualizations: {
    chart: JSX.Element;
    title: string;
    description: string;
  }[];
}) {
  console.count("Dashboard render");

  const [currentViz, setCurrentViz] = useState(0);
  return (
    <section>
      <MainViz currentViz={currentViz} visualizations={visualizations} />
      <Previews
        currentViz={currentViz}
        setCurrentViz={setCurrentViz}
        visualizations={visualizations}
      />
    </section>
  );
}

export { Dashboard };