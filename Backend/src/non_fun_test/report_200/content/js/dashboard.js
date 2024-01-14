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
    createTable($("#apdexTable"), {"supportsControllersDiscrimination": true, "overall": {"data": [0.998584041312677, 500, 1500, "Total"], "isController": false}, "titles": ["Apdex", "T (Toleration threshold)", "F (Frustration threshold)", "Label"], "items": [{"data": [0.9983333333333333, 500, 1500, "HTTP Request - Avg Posts GET"], "isController": false}, {"data": [1.0, 500, 1500, "HTTP Request - Statistics - GET"], "isController": false}, {"data": [1.0, 500, 1500, "HTTP Request - Home Page GET"], "isController": false}, {"data": [0.9991666666666666, 500, 1500, "HTTP Request - Unpopular GET"], "isController": false}, {"data": [0.9983333333333333, 500, 1500, "HTTP Request - Recent GET"], "isController": false}, {"data": [0.9983333333333333, 500, 1500, "HTTP Request - Hour of Day Most Posts GET"], "isController": false}, {"data": [1.0, 500, 1500, "HTTP Request - Registration POST"], "isController": false}, {"data": [0.9991666666666666, 500, 1500, "HTTP Request - Popular GET"], "isController": false}, {"data": [0.9983333333333333, 500, 1500, "HTTP Request - Avg Comments GET"], "isController": false}, {"data": [1.0, 500, 1500, "HTTP Request - Join GET"], "isController": false}, {"data": [0.9966666666666667, 500, 1500, "HTTP Request - Post Most Commented GET"], "isController": false}, {"data": [0.9983333333333333, 500, 1500, "HTTP Request - Members No Activity GET"], "isController": false}, {"data": [0.9991666666666666, 500, 1500, "HTTP Request - Login POST"], "isController": false}]}, function(index, item){
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
    createTable($("#statisticsTable"), {"supportsControllersDiscrimination": true, "overall": {"data": ["Total", 6003, 0, 0.0, 245.03065134099643, 1, 783, 268.0, 321.0, 344.0, 427.8800000000001, 4.075832344306328, 3.4891123095755243, 3.8871282247910144], "isController": false}, "titles": ["Label", "#Samples", "FAIL", "Error %", "Average", "Min", "Max", "Median", "90th pct", "95th pct", "99th pct", "Transactions/s", "Received", "Sent"], "items": [{"data": ["HTTP Request - Avg Posts GET", 600, 0, 0.0, 278.68333333333305, 126, 668, 283.0, 324.9, 349.8499999999998, 450.94000000000005, 0.4080283661320135, 0.20042799625429958, 0.4088252965346151], "isController": false}, {"data": ["HTTP Request - Statistics - GET", 600, 0, 0.0, 2.9483333333333346, 1, 19, 3.0, 4.0, 5.0, 6.0, 0.4081754828035669, 0.4755403818209525, 0.31131352741170487], "isController": false}, {"data": ["HTTP Request - Home Page GET", 1, 0, 0.0, 45.0, 45, 45, 45.0, 45.0, 45.0, 45.0, 22.22222222222222, 46.11545138888889, 2.5824652777777777], "isController": false}, {"data": ["HTTP Request - Unpopular GET", 600, 0, 0.0, 278.711666666667, 129, 591, 282.5, 333.0, 359.0, 472.9200000000001, 0.40813550098632745, 0.543649241548194, 0.4037512329093259], "isController": false}, {"data": ["HTTP Request - Recent GET", 600, 0, 0.0, 268.4150000000001, 125, 783, 267.0, 322.0, 345.94999999999993, 441.8900000000001, 0.4081907557039556, 0.41137974598289273, 0.4014141513612141], "isController": false}, {"data": ["HTTP Request - Hour of Day Most Posts GET", 600, 0, 0.0, 276.43666666666695, 118, 557, 282.0, 324.0, 344.94999999999993, 412.84000000000015, 0.4078849601258461, 0.19637430209183804, 0.4194363896606601], "isController": false}, {"data": ["HTTP Request - Registration POST", 1, 0, 0.0, 386.0, 386, 386, 386.0, 386.0, 386.0, 386.0, 2.5906735751295336, 1.2067883743523315, 1.970834682642487], "isController": false}, {"data": ["HTTP Request - Popular GET", 600, 0, 0.0, 246.71499999999995, 130, 518, 247.5, 294.0, 315.0, 386.97, 0.4082390811354762, 0.43096332686274386, 0.40186034549273436], "isController": false}, {"data": ["HTTP Request - Avg Comments GET", 600, 0, 0.0, 276.34333333333313, 126, 651, 281.0, 324.0, 354.94999999999993, 415.9200000000001, 0.4080916410589162, 0.20045907759046372, 0.40888869504535935], "isController": false}, {"data": ["HTTP Request - Join GET", 1, 0, 0.0, 6.0, 6, 6, 6.0, 6.0, 6.0, 6.0, 166.66666666666666, 194.17317708333334, 126.13932291666666], "isController": false}, {"data": ["HTTP Request - Post Most Commented GET", 600, 0, 0.0, 281.53666666666663, 119, 621, 285.0, 337.0, 357.0, 482.83000000000015, 0.407986471168616, 0.3518086465252812, 0.4095801683216185], "isController": false}, {"data": ["HTTP Request - Members No Activity GET", 600, 0, 0.0, 276.76999999999987, 125, 768, 281.5, 325.0, 349.89999999999986, 438.96000000000004, 0.40794430744314786, 0.24540399744626865, 0.42666831374180797], "isController": false}, {"data": ["HTTP Request - Login POST", 600, 0, 0.0, 264.2433333333332, 178, 658, 255.0, 315.9, 339.89999999999986, 387.8700000000001, 0.40823880337041957, 0.4369430942324022, 0.30099638334440115], "isController": false}]}, function(index, item){
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
    createTable($("#top5ErrorsBySamplerTable"), {"supportsControllersDiscrimination": false, "overall": {"data": ["Total", 6003, 0, "", "", "", "", "", "", "", "", "", ""], "isController": false}, "titles": ["Sample", "#Samples", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors"], "items": [{"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}]}, function(index, item){
        return item;
    }, [[0, 0]], 0);

});
