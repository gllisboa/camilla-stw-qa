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
    createTable($("#apdexTable"), {"supportsControllersDiscrimination": true, "overall": {"data": [0.9983498349834984, 500, 1500, "Total"], "isController": false}, "titles": ["Apdex", "T (Toleration threshold)", "F (Frustration threshold)", "Label"], "items": [{"data": [1.0, 500, 1500, "HTTP Request - Avg Posts GET"], "isController": false}, {"data": [1.0, 500, 1500, "HTTP Request - Statistics - GET"], "isController": false}, {"data": [1.0, 500, 1500, "HTTP Request - Home Page GET"], "isController": false}, {"data": [1.0, 500, 1500, "HTTP Request - Unpopular GET"], "isController": false}, {"data": [1.0, 500, 1500, "HTTP Request - Recent GET"], "isController": false}, {"data": [1.0, 500, 1500, "HTTP Request - Hour of Day Most Posts GET"], "isController": false}, {"data": [1.0, 500, 1500, "HTTP Request - Registration POST"], "isController": false}, {"data": [1.0, 500, 1500, "HTTP Request - Popular GET"], "isController": false}, {"data": [1.0, 500, 1500, "HTTP Request - Avg Comments GET"], "isController": false}, {"data": [1.0, 500, 1500, "HTTP Request - Join GET"], "isController": false}, {"data": [1.0, 500, 1500, "HTTP Request - Post Most Commented GET"], "isController": false}, {"data": [1.0, 500, 1500, "HTTP Request - Members No Activity GET"], "isController": false}, {"data": [0.9833333333333333, 500, 1500, "HTTP Request - Login POST"], "isController": false}]}, function(index, item){
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
    createTable($("#statisticsTable"), {"supportsControllersDiscrimination": true, "overall": {"data": ["Total", 303, 0, 0.0, 120.00990099009898, 2, 520, 104.0, 248.20000000000027, 336.6000000000001, 448.7599999999999, 8.282988436620103, 7.118593626131051, 7.867627021199529], "isController": false}, "titles": ["Label", "#Samples", "FAIL", "Error %", "Average", "Min", "Max", "Median", "90th pct", "95th pct", "99th pct", "Transactions/s", "Received", "Sent"], "items": [{"data": ["HTTP Request - Avg Posts GET", 30, 0, 0.0, 108.89999999999999, 83, 156, 104.0, 137.3, 149.39999999999998, 156.0, 0.8602890571231934, 0.42258339427047487, 0.8619693091878872], "isController": false}, {"data": ["HTTP Request - Statistics - GET", 30, 0, 0.0, 3.3666666666666667, 2, 9, 3.0, 4.0, 6.2499999999999964, 9.0, 0.8636573007830493, 1.0061944920255643, 0.6587073749136343], "isController": false}, {"data": ["HTTP Request - Home Page GET", 1, 0, 0.0, 45.0, 45, 45, 45.0, 45.0, 45.0, 45.0, 22.22222222222222, 46.11545138888889, 2.5824652777777777], "isController": false}, {"data": ["HTTP Request - Unpopular GET", 30, 0, 0.0, 107.00000000000003, 88, 137, 104.0, 134.10000000000002, 136.45, 137.0, 0.860733344809778, 1.1440020334825272, 0.8514871858323292], "isController": false}, {"data": ["HTTP Request - Recent GET", 30, 0, 0.0, 98.36666666666667, 80, 132, 94.5, 117.7, 127.05, 132.0, 0.8614501076812635, 0.8723864860014356, 0.8471486898779612], "isController": false}, {"data": ["HTTP Request - Hour of Day Most Posts GET", 30, 0, 0.0, 108.3, 90, 141, 102.5, 134.3, 138.8, 141.0, 0.858885167053165, 0.4135062376535257, 0.8832090633857252], "isController": false}, {"data": ["HTTP Request - Registration POST", 1, 0, 0.0, 476.0, 476, 476, 476.0, 476.0, 476.0, 476.0, 2.100840336134454, 0.9786141018907564, 1.5981978728991597], "isController": false}, {"data": ["HTTP Request - Popular GET", 30, 0, 0.0, 100.93333333333334, 85, 145, 98.0, 120.7, 143.9, 145.0, 0.862391123120706, 0.9070266011728519, 0.848916261821945], "isController": false}, {"data": ["HTTP Request - Avg Comments GET", 30, 0, 0.0, 104.20000000000002, 83, 129, 102.0, 123.0, 127.35, 129.0, 0.860733344809778, 0.4228016332415218, 0.8624144646238595], "isController": false}, {"data": ["HTTP Request - Join GET", 1, 0, 0.0, 5.0, 5, 5, 5.0, 5.0, 5.0, 5.0, 200.0, 233.0078125, 151.3671875], "isController": false}, {"data": ["HTTP Request - Post Most Commented GET", 30, 0, 0.0, 113.63333333333333, 93, 147, 109.5, 137.20000000000002, 143.15, 147.0, 0.8595742242342627, 0.7412148828113807, 0.8629319360476776], "isController": false}, {"data": ["HTTP Request - Members No Activity GET", 30, 0, 0.0, 111.56666666666666, 93, 139, 111.0, 127.9, 134.6, 139.0, 0.8592295574967779, 0.5168802806816555, 0.8986668516396964], "isController": false}, {"data": ["HTTP Request - Login POST", 30, 0, 0.0, 338.3, 241, 520, 330.0, 439.2000000000001, 480.94999999999993, 520.0, 0.8577310155535224, 0.9180402275846294, 0.6324090983817475], "isController": false}]}, function(index, item){
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
    createTable($("#top5ErrorsBySamplerTable"), {"supportsControllersDiscrimination": false, "overall": {"data": ["Total", 303, 0, "", "", "", "", "", "", "", "", "", ""], "isController": false}, "titles": ["Sample", "#Samples", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors"], "items": [{"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}]}, function(index, item){
        return item;
    }, [[0, 0]], 0);

});
