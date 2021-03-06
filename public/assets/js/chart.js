// var data = [{
//     "x": 1,
//     "y": 1.1204657964961764
// }, {
//     "x": 2,
//     "y": 1.3717577630865123
// }, {
//     "x": 3,
//     "y": 1.119749435640524
// }, {
//     "x": 4,
//     "y": 1.018467146429474
// }, {
//     "x": 5,
//     "y": 2.0979573336514714
// }, {
//     "x": 6,
//     "y": 1.2217345156397934
// }, {
//     "x": 7,
//     "y": 2.0380980462503544
// }, {
//     "x": 8,
//     "y": 1.1460090803588665
// }, {
//     "x": 9,
//     "y": 1.2259582583230042
// }, {
//     "x": 10,
//     "y": 1.4778279535914083
// }, {
//     "x": 11,
//     "y": 1.3012434118066893
// }, {
//     "x": 12,
//     "y": 1.117376684559887
// }]
//
// data.forEach(function(d) {
//   d.x = +d.x;
//   d.y = +d.y;
// });
//
//
// // data = [{
// //     "x": 1,
// //         "value": "8352"
// // }, {
// //     "x": 1422748800,
// //         "value": "8754"
// // }, {
// //     "x": 1425168000,
// //         "value": "5423"
// // }, {
// //     "x": 1427846400,
// //         "value": "7582"
// // }, {
// //     "x": 1427846400,
// //         "value": "8298"
// // }, {
// //     "x": 1433116800,
// //         "value": "3841"
// // }, {
// //     "x": 1435708800,
// //         "value": "5655"
// // }, {
// //     "x": 1438387200,
// //         "value": "6141"
// // }, {
// //     "x": 1438387200,
// //         "value": "2152"
// // }, {
// //     "x": 1443657600,
// //         "value": "5300"
// // }, {
// //     "x": 1446336000,
// //         "value": "5400"
// // }, {
// //     "x": 1446336000,
// //         "value": "5400"
// // }]
//
// margin = {
//     top: 20,
//     right: 20,
//     bottom: 20,
//     left: 45
// };
//
// width = 800 - margin.left - margin.right;
// height = 400 - margin.top - margin.bottom;
//
// var x = d3.time.scale()
//     .domain(d3.extent(data, function (d) {
//     return d.x;
// }))
//     .range([0, width]);
//
// var y = d3.scale.linear()
//     .domain(d3.extent(data, function (d) {
//     return d.y;
// }))
//     .range([height, 0]);
//
// var line = d3.svg.line()
//     .interpolate("basis")
//     .x(function (d) {
//     return x(d.x);
// })
//     .y(function (d) {
//     return y(d.y);
// });
//
// var zoom = d3.behavior.zoom()
//     .x(x)
//     .on("zoom", zoomed);
//
// svg = d3.select('#chart')
//     .append("svg:svg")
//     .attr('width', width + margin.left + margin.right)
//     .attr('height', height + margin.top + margin.bottom)
//     .append("svg:g")
//     .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
//     .call(zoom);
//
// svg.append("svg:rect")
//     .attr("width", width)
//     .attr("height", height)
//     .attr("class", "plot");
//
// var make_x_axis = function () {
//     return d3.svg.axis()
//         .scale(x)
//         .orient("bottom")
//         .ticks(5);
// };
//
// var make_y_axis = function () {
//     return d3.svg.axis()
//         .scale(y)
//         .orient("left")
//         .ticks(5);
// };
//
// var xAxis = d3.svg.axis()
//     .scale(x)
//     .orient("bottom")
//     .ticks(5);
//
// svg.append("svg:g")
//     .attr("class", "x axis")
//     .attr("transform", "translate(0, " + height + ")")
//     .call(xAxis);
//
// var yAxis = d3.svg.axis()
//     .scale(y)
//     .orient("left")
//     .ticks(5);
//
// svg.append("g")
//     .attr("class", "y axis")
//     .call(yAxis);
//
// svg.append("g")
//     .attr("class", "x grid")
//     .attr("transform", "translate(0," + height + ")")
//     .call(make_x_axis()
//     .tickSize(-height, 0, 0)
//     .tickFormat(""));
//
// svg.append("g")
//     .attr("class", "y grid")
//     .call(make_y_axis()
//     .tickSize(-width, 0, 0)
//     .tickFormat(""));
//
// var clip = svg.append("svg:clipPath")
//     .attr("id", "clip")
//     .append("svg:rect")
//     .attr("x", 0)
//     .attr("y", 0)
//     .attr("width", width)
//     .attr("height", height);
//
// var chartBody = svg.append("g")
//     .attr("clip-path", "url(#clip)");
//
// chartBody.append("svg:path")
//     .data([data])
//     .attr("class", "line")
//     .attr("d", line);
//
// function zoomed() {
//     console.log(d3.event.translate);
//     console.log(d3.event.scale);
//     svg.select(".x.axis").call(xAxis);
//     svg.select(".y.axis").call(yAxis);
//     svg.select(".x.grid")
//         .call(make_x_axis()
//         .tickSize(-height, 0, 0)
//         .tickFormat(""));
//     svg.select(".y.grid")
//         .call(make_y_axis()
//         .tickSize(-width, 0, 0)
//         .tickFormat(""));
//     svg.select(".line")
//         .attr("class", "line")
//         .attr("d", line);
// }
