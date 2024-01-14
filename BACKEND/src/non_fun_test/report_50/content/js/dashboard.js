/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
var showControllersOnly = false;
var seriesFilter = "";
var filtersOnlySampleSeries = true;

/*
 * Add header in statistics table to group metrics by category
 * format
 *
 */
function summaryTableHeader(header) {
    var newRow = header.insertRow(-1);
    newRow.className = "tablesorter-no-sort";
    var cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 1;
    cell.innerHTML = "Requests";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 3;
    cell.innerHTML = "Executions";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 7;
    cell.innerHTML = "Response Times (ms)";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 1;
    cell.innerHTML = "Throughput";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 2;
    cell.innerHTML = "Network (KB/sec)";
    newRow.appendChild(cell);
}

/*
 * Populates the table identified by id parameter with the specified data and
 * format
 *
 */
function createTable(table, info, formatter, defaultSorts, seriesIndex, headerCreator) {
    var tableRef = table[0];

    // Create header and populate it with data.titles array
    var header = tableRef.createTHead();

    // Call callback is available
    if(headerCreator) {
        headerCreator(header);
    }

    var newRow = header.insertRow(-1);
    for (var index = 0; index < info.titles.length; index++) {
        var cell = document.createElement('th');
        cell.innerHTML = info.titles[index];
        newRow.appendChild(cell);
    }

    var tBody;

    // Create overall body if defined
    if(info.overall){
        tBody = document.createElement('tbody');
        tBody.className = "tablesorter-no-sort";
        tableRef.appendChild(tBody);
        var newRow = tBody.insertRow(-1);
        var data = info.overall.data;
        for(var index=0;index < data.length; index++){
            var cell = newRow.insertCell(-1);
            cell.innerHTML = formatter ? formatter(index, data[index]): data[index];
        }
    }

    // Create regular body
    tBody = document.createElement('tbody');
    tableRef.appendChild(tBody);

    var regexp;
    if(seriesFilter) {
        regexp = new RegExp(seriesFilter, 'i');
    }
    // Populate body with data.items array
    for(var index=0; index < info.items.length; index++){
        var item = info.items[index];
        if((!regexp || filtersOnlySampleSeries && !info.supportsControllersDiscrimination || regexp.test(item.data[seriesIndex]))
                &&
                (!showControllersOnly || !info.supportsControllersDiscrimination || item.isController)){
            if(item.data.length > 0) {
                var newRow = tBody.insertRow(-1);
                for(var col=0; col < item.data.length; col++){
                    var cell = newRow.insertCell(-1);
                    cell.innerHTML = formatter ? formatter(col, item.data[col]) : item.data[col];
                }
            }
        }
    }

    // Add support of columns sort
    table.tablesorter({sortList : defaultSorts});
}

$(document).ready(function() {

    // Customize table sorter default options
    $.extend( $.tablesorter.defaults, {
        theme: 'blue',
        cssInfoBlock: "tablesorter-no-sort",
        widthFixed: true,
        widgets: ['zebra']
    });

    var data = {"OkPercent": 100.0, "KoPercent": 0.0};
    var dataset = [
        {
            "label" : "FAIL",
            "data" : data.KoPercent,
            "color" : "#FF6347"
        },
        {
            "label" : "PASS",
            "data" : data.OkPercent,
            "color" : "#9ACD32"
        }];
    $.plot($("#flot-requests-summary"), dataset, {
        series : {
            pie : {
                show : true,
                radius : 1,
                label : {
                    show : true,
                    radius : 3 / 4,
                    formatter : function(label, series) {
                        return '<div style="font-size:8pt;text-align:center;padding:2px;color:white;">'
                            + label
                            + '<br/>'
                            + Math.round10(series.percent, -2)
                            + '%</div>';
                    },
                    background : {
                        opacity : 0.5,
                        color : '#000'
                    }
                }
            }
        },
        legend : {
            show : true
        }
    });

    // Creates APDEX table
    createTable($("#apdexTable"), {"supportsControllersDiscrimination": true, "overall": {"data": [0.9996673320026613, 500, 1500, "Total"], "isController": false}, "titles": ["Apdex", "T (Toleration threshold)", "F (Frustration threshold)", "Label"], "items": [{"data": [1.0, 500, 1500, "HTTP Request - Avg Posts GET"], "isController": false}, {"data": [1.0, 500, 1500, "HTTP Request - Statistics - GET"], "isController": false}, {"data": [1.0, 500, 1500, "HTTP Request - Home Page GET"], "isController": false}, {"data": [1.0, 500, 1500, "HTTP Request - Unpopular GET"], "isController": false}, {"data": [1.0, 500, 1500, "HTTP Request - Recent GET"], "isController": false}, {"data": [1.0, 500, 1500, "HTTP Request - Hour of Day Most Posts GET"], "isController": false}, {"data": [0.5, 500, 1500, "HTTP Request - Registration POST"], "isController": false}, {"data": [1.0, 500, 1500, "HTTP Request - Popular GET"], "isController": false}, {"data": [1.0, 500, 1500, "HTTP Request - Avg Comments GET"], "isController": false}, {"data": [1.0, 500, 1500, "HTTP Request - Join GET"], "isController": false}, {"data": [1.0, 500, 1500, "HTTP Request - Post Most Commented GET"], "isController": false}, {"data": [1.0, 500, 1500, "HTTP Request - Members No Activity GET"], "isController": false}, {"data": [1.0, 500, 1500, "HTTP Request - Login POST"], "isController": false}]}, function(index, item){
        switch(index){
            case 0:
                item = item.toFixed(3);
                break;
            case 1:
            case 2:
                item = formatDuration(item);
                break;
        }
        return item;
    }, [[0, 0]], 3);

    // Create statistics table
    createTable($("#statisticsTable"), {"supportsControllersDiscrimination": true, "overall": {"data": ["Total", 1503, 0, 0.0, 140.78176979374572, 1, 623, 148.0, 237.0, 254.79999999999995, 296.60000000000036, 7.079037476980176, 6.0612630156205105, 6.746954620037491], "isController": false}, "titles": ["Label", "#Samples", "FAIL", "Error %", "Average", "Min", "Max", "Median", "90th pct", "95th pct", "99th pct", "Transactions/s", "Received", "Sent"], "items": [{"data": ["HTTP Request - Avg Posts GET", 150, 0, 0.0, 143.8266666666667, 76, 235, 149.0, 171.8, 183.0, 228.8800000000001, 0.7135755367277328, 0.3505161083730953, 0.7149692389479042], "isController": false}, {"data": ["HTTP Request - Statistics - GET", 150, 0, 0.0, 3.133333333333331, 1, 6, 3.0, 4.0, 5.0, 6.0, 0.7142074915604482, 0.8320796263980612, 0.5447227059655371], "isController": false}, {"data": ["HTTP Request - Home Page GET", 1, 0, 0.0, 62.0, 62, 62, 62.0, 62.0, 62.0, 62.0, 16.129032258064516, 33.470892137096776, 1.8743699596774193], "isController": false}, {"data": ["HTTP Request - Unpopular GET", 150, 0, 0.0, 145.74, 70, 261, 148.0, 174.0, 193.89999999999998, 256.4100000000001, 0.713864194475643, 0.948798016290381, 0.7061957314490491], "isController": false}, {"data": ["HTTP Request - Recent GET", 150, 0, 0.0, 138.28666666666672, 75, 303, 139.0, 160.9, 177.24999999999994, 252.5100000000009, 0.714013709063214, 0.7230783362290556, 0.7021599658463442], "isController": false}, {"data": ["HTTP Request - Hour of Day Most Posts GET", 150, 0, 0.0, 144.11999999999983, 71, 200, 150.5, 170.8, 179.0, 195.92000000000007, 0.7128735457379667, 0.34320962700079843, 0.733062347326249], "isController": false}, {"data": ["HTTP Request - Registration POST", 1, 0, 0.0, 623.0, 623, 623, 623.0, 623.0, 623.0, 623.0, 1.6051364365971108, 0.7477051565008026, 1.221095004012841], "isController": false}, {"data": ["HTTP Request - Popular GET", 150, 0, 0.0, 134.94666666666674, 81, 214, 136.0, 158.9, 171.34999999999997, 211.96000000000004, 0.7140069115869041, 0.7488705303167335, 0.7028505535933588], "isController": false}, {"data": ["HTTP Request - Avg Comments GET", 150, 0, 0.0, 143.21333333333328, 71, 217, 149.0, 169.9, 178.89999999999998, 206.2900000000002, 0.713660411829635, 0.35055779995147107, 0.7150542798214897], "isController": false}, {"data": ["HTTP Request - Join GET", 1, 0, 0.0, 7.0, 7, 7, 7.0, 7.0, 7.0, 7.0, 142.85714285714286, 166.43415178571428, 108.11941964285714], "isController": false}, {"data": ["HTTP Request - Post Most Commented GET", 150, 0, 0.0, 147.6666666666667, 74, 265, 154.0, 177.50000000000003, 190.79999999999995, 253.7800000000002, 0.7133176403452458, 0.6157937442042942, 0.7161040373778443], "isController": false}, {"data": ["HTTP Request - Members No Activity GET", 150, 0, 0.0, 146.26000000000002, 71, 297, 151.0, 174.0, 189.45, 272.01000000000045, 0.7131141695785495, 0.4289827426370962, 0.745844995721315], "isController": false}, {"data": ["HTTP Request - Login POST", 150, 0, 0.0, 258.8266666666667, 204, 385, 253.5, 284.0, 322.34999999999997, 370.72000000000025, 0.7132701534481857, 0.7634219611125113, 0.5258974275911916], "isController": false}]}, function(index, item){
        switch(index){
            // Errors pct
            case 3:
                item = item.toFixed(2) + '%';
                break;
            // Mean
            case 4:
            // Mean
            case 7:
            // Median
            case 8:
            // Percentile 1
            case 9:
            // Percentile 2
            case 10:
            // Percentile 3
            case 11:
            // Throughput
            case 12:
            // Kbytes/s
            case 13:
            // Sent Kbytes/s
                item = item.toFixed(2);
                break;
        }
        return item;
    }, [[0, 0]], 0, summaryTableHeader);

    // Create error table
    createTable($("#errorsTable"), {"supportsControllersDiscrimination": false, "titles": ["Type of error", "Number of errors", "% in errors", "% in all samples"], "items": []}, function(index, item){
        switch(index){
            case 2:
            case 3:
                item = item.toFixed(2) + '%';
                break;
        }
        return item;
    }, [[1, 1]]);

        // Create top5 errors by sampler
    createTable($("#top5ErrorsBySamplerTable"), {"supportsControllersDiscrimination": false, "overall": {"data": ["Total", 1503, 0, "", "", "", "", "", "", "", "", "", ""], "isController": false}, "titles": ["Sample", "#Samples", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors"], "items": [{"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}]}, function(index, item){
        return item;
    }, [[0, 0]], 0);

});
