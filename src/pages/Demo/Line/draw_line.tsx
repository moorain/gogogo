import * as d3 from 'd3';
import _ from 'lodash';

type Data = {
  x: number,
  y: number,
}

interface Iprops {
  width: number
  height: number
  data: Data
}

export const draw = (props: Iprops) => {
  let { width, height, data } = props;
  if (data !== null) {
    data = _.cloneDeep(data);
  }
  d3.select("#line_box > *").remove();
  // 定义画布的padding
  const padding = { top: 20, right: 20, bottom: 20, left: 30 }
  //计算实际可以显示内容的宽高
  const contentWidth = width - padding.left - padding.right;
  const contentHeight = height - padding.top - padding.bottom;
  //1.创建画布 并分别向左 下位移
  let svg = d3.select("#line_box")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform",
      "translate(" + padding.left + "," + padding.top + ")");

  const x = d3.scaleLinear()
    .domain(d3.extent(data, function (d: Data) { return d.x; }))
    .range([0, contentWidth]);//设置x比例尺输出范围

  svg.append("g")
    .attr("transform", `translate(0,${contentHeight})`) //将x轴往下位移contentHeight
    .call(d3.axisBottom(x).tickFormat((a: Data) => {
      return a + 'kg'
    }));

  const y = d3.scaleLinear()
    .domain([0, d3.max(data, function (d: Data) { return +d.y; })])
    .range([contentHeight, 0]);//y轴range输出范围

  svg.append("g").call(d3.axisLeft(y).tickFormat(a => a + '%'));

  svg.append("path")
    .datum(data)
    .attr("fill", "none")
    .attr("stroke", "red")
    .attr("stroke-width", 1.2)
    .attr("d", d3.line()
      .curve(d3.curveCardinal.tension(0.3))
      //line.curve - 设置插值方式.
      .x(function (d: Data) { return x(d.x) })
      .y(function (d: Data) { return y(d.y) })
    )

  // svg.append("path")
  //   .datum(data)
  //   .attr("fill", "none")
  //   .attr("stroke", "red")
  //   .attr("stroke-width", 1)
  //   .attr("d", d3.line()
  //     .x(function (d: Data) { return x(d.x) })
  //     .y(function (d: Data) { return y(d.y) })
  //   )

  //数据绑定
  var g = svg.selectAll('circle') //创建一组元素集绑定data
    .data(data)
    .enter() //enter()将为没有对应DOM元素的值创建占位符节点
    .append('g');//节点添加元素



  g.append('text')
    // .attr('class', 'text')
    .attr('x', (d, i) => x(d.x) - 4)
    .attr('y', d => y(d.y) - 8)
    .text(d => d.y + 'kg')
    .attr("font-size", "12px")
    .attr("fill", "blue");


  //添加圆点绑定事件
  g.append('circle')
    .attr('class', 'linecircle')
    .attr('cx', (d, i) => x(d.x))
    .attr('cy', d => y(d.y))
    .attr('r', 3.5)
    .attr('fill', '#777')
    .on('mouseover', function () {
      d3.select(this).transition().duration(500).attr('r', 15);
    })
    .on('mouseout', function () {
      d3.select(this).transition().duration(500).attr('r', 3.5);
    });

}