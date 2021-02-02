import * as d3 from 'd3';
import _ from 'lodash';

const locale = d3.timeFormatLocale({
    dateTime: "%a %b %e %X %Y",
    date: "%Y/%-m/%-d",
    time: "%H:%M:%S",
    periods: ["上午", "下午"],
    days: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
    shortDays: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
    months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
    shortMonths: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"]
});

const draw = (props) => {
    let data = [];
    if (props.data !== null) {
        data = _.cloneDeep(props.data.activities);
    }
    d3.select('.vis-linechart > *').remove();
    let margin = { top: 10, right: 20, bottom: 20, left: 20 }
    const width = props.width - margin.left - margin.right;;
    const height = props.height - margin.top - margin.bottom;
    let svg = d3.select(".vis-linechart")
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform",
            "translate(" + margin.left + "," + margin.top + ")");

    data.forEach(function (d) {
        d.date = d3.timeParse("%Y-%m-%d")(d.date);
        d.count = +d.count;
    });

    // Add X axis --> it is a date format
    let x = d3.scaleTime()
        .domain(d3.extent(data, function (d) { return d.date; }))
        .range([0, width]);
    svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x).tickFormat(locale.format("%b/%d")));

    // Add Y axis
    var y = d3.scaleLinear()
        .domain([0, d3.max(data, function (d) { return +d.count; })])
        .range([height, 0]);
    svg.append("g")
        .call(d3.axisLeft(y));

    // Add the line
    svg.append("path")
        .datum(data)
        .attr("fill", "none")
        .attr("stroke", "steelblue")
        .attr("stroke-width", 1.5)
        .attr("d", d3.line()
            .x(function (d) { return x(d.date) })
            .y(function (d) { return y(d.count) })
        )
}

export default draw;