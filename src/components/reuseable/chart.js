import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const BarChart = ({ data }) => {
  const chartRef = useRef();

  useEffect(() => {
    // Set dimensions
    const width = 300;
    const height = 200;
    const margin = { top: 10, right: 30, bottom: 70, left: 60 };

    // Clear any existing SVG
    d3.select(chartRef.current).select("svg").remove();

    // Create SVG
    const svg = d3
      .select(chartRef.current)
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    // Define scales
    const xScale = d3
      .scaleBand()
      .domain(data.map((d) => d.name))
      .range([0, width])
      .padding(0.4);

    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d.value)])
      .nice()
      .range([height, 0]);

    // Add background
    svg
      .append("rect")
      .attr("width", width)
      .attr("height", height)
      .attr("fill", "#f9f9f9"); // Subtle background color

    // Add gridlines
    svg
      .append("g")
      .attr("class", "grid")
      .call(
        d3
          .axisLeft(yScale)
          .tickSize(-width)
          .tickFormat("") // Removes tick labels
      )
      .attr("stroke-dasharray", "3") // Dashed lines
      .attr("opacity", 0.9) // Light gridlines for subtlety

    // Add X-axis
    svg
      .append("g")
      .attr("transform", `translate(0, ${height})`)
      .call(d3.axisBottom(xScale))
      .selectAll("text")
      .attr("transform", "translate(0, 10)")
      .style("text-anchor", "middle");

    // Add Y-axis
    svg.append("g").call(d3.axisLeft(yScale));

    // Add bars
    svg
      .selectAll(".bar")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", (d) => xScale(d.name))
      .attr("y", (d) => yScale(d.value))
      .attr("width", xScale.bandwidth())
      .attr("height", (d) => height - yScale(d.value))
      .attr("fill", "rgb(98, 50, 10)");
  }, [data]);

  return <div ref={chartRef}></div>;
};

export default BarChart;
