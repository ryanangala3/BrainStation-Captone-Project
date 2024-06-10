import React, { useEffect } from 'react';
import * as d3 from 'd3';
import "./WorkoutGraph.scss";

const WorkoutGraph = ({ workouts }) => {
    useEffect(() => {
      d3.select("#chart-container").selectAll("*").remove();
  
     
      const width = 600;
      const height = 500;
      const marginTop = 20;
      const marginRight = 30;
      const marginBottom = 30;
      const marginLeft = 40;
  
      const dates = workouts.map(workout => new Date(workout.date));
      const durations = workouts.map(workout => {
        
        return parseInt(workout.duration);
      });
  
      const x = d3.scaleUtc()
        .domain([new Date('2024-06-01'), new Date('2024-06-30')])
        .range([marginLeft, width - marginRight]);
  
      const y = d3.scaleLinear()
        .domain([0, 120]) 
        .range([height - marginBottom, marginTop]);
  
      const line = d3.line()
        .x((d, i) => x(dates[i]))
        .y((d, i) => y(durations[i]));
  
      const svg = d3.create("svg")
        .attr("width", width)
        .attr("height", height)
        .attr("viewBox", [0, 0, width, height])
        .attr("style", "max-width: 100%; height: auto; height: intrinsic;");
  
      svg.append("g")
        .attr("transform", `translate(0,${height - marginBottom})`)
        .call(d3.axisBottom(x).ticks(width / 80).tickSizeOuter(0))
        .call(g => g.selectAll(".tick line").attr("stroke", "#fff"))
        .call(g => g.selectAll(".tick text").attr("fill", "#fff"))
        .call(g => g.select(".domain").attr("stroke", "#fff"))
        .append("text")
        .attr("x", width / 2)
        .attr("y", marginBottom - 10)
        .attr("dy", ".5rem")
        .attr("fill", "#fff") 
        .attr("text-anchor", "middle")
        .text("Date")
        .style("stroke", "#fff"); 
  
      svg.append("g")
        .attr("transform", `translate(${marginLeft},0)`)
        .call(d3.axisLeft(y).ticks(height / 40))
        .call(g => g.select(".domain").attr("stroke", "#fff"))
        .call(g => g.selectAll(".tick line").attr("stroke", "#fff"))
        .call(g => g.selectAll(".tick text").attr("fill", "#fff"))
        .call(g => g.selectAll(".tick line").clone()
          .attr("x2", width - marginLeft - marginRight)
          .attr("stroke-opacity", 0.1)
          .attr("stroke", "#fff"))
        .append("text")
        .attr("transform", "rotate(-90)")
        .attr("x", -height / 2)
        .attr("y", -marginLeft + 10)
        .attr("fill", "#fff") 
        .attr("text-anchor", "middle")
        .text("Duration")
        .style("stroke", "#fff"); 
  
      svg.append("path")
        .attr("fill", "none")
        .attr("stroke", "#fff") 
        .attr("stroke-width", 1.5)
        .attr("d", line(durations));
  
      document.getElementById("chart-container").appendChild(svg.node());
    }, [workouts]);

  return (
    <div>
      <div className='graph-container' id="chart-container"></div>
    </div>
  );
};

export default WorkoutGraph;
