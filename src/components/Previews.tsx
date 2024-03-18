function Previews({
  currentViz,
  setCurrentViz,
  visualizations,
}: {
  currentViz: number;
  setCurrentViz: React.Dispatch<React.SetStateAction<number>>;
  visualizations: {
    chart: JSX.Element;
    title: string;
    description: string;
  }[];
}) {
  console.count("Previews render");
  
  return (
    <section className="preview-container">
      {visualizations.map((item, idx) => (
        <button
          key={item.title + idx}
          // hey! did you know you could use the data attribute to apply conditional styles? ;)
          data-highlighted={currentViz === idx}
          className="preview-selector"
          onClick={() => setCurrentViz(idx)}
        >
          <div className="chart-preview">{item.chart}</div>
        </button>
      ))}
    </section>
  );
}

export { Previews };
