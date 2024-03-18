// Main viz component is hiding the unselected charts using css
// for demo purposes so you can notice any of them are not re-rendered
// even when main viz component is re-rendered.
function MainViz({
  currentViz,
  visualizations,
}: {
  currentViz: number;
  visualizations: {
    chart: JSX.Element;
    title: string;
    description: string;
  }[];
}) {
  console.count("MainViz render");

  return (
    <section>
      {visualizations.map((item, idx) => (
        <section
          key={item.title + idx}
          // hey! did you know you could use the data attribute to apply conditional styles? ;)
          data-hidden={currentViz !== idx}
          className="chart-container"
        >
          <div className="chart">{item.chart}</div>
          <div className="chart-info">
            <h1>{item.title}</h1>
            <p>{item.description}</p>
          </div>
        </section>
      ))}
    </section>
  );
}

export { MainViz };
