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
    createTable($("#apdexTable"), {"supportsControllersDiscrimination": true, "overall": {"data": [0.9996669996669997, 500, 1500, "Total"], "isController": false}, "titles": ["Apdex", "T (Toleration threshold)", "F (Frustration threshold)", "Label"], "items": [{"data": [1.0, 500, 1500, "HTTP Request - Avg Posts GET"], "isController": false}, {"data": [1.0, 500, 1500, "HTTP Request - Statistics - GET"], "isController": false}, {"data": [1.0, 500, 1500, "HTTP Request - Home Page GET"], "isController": false}, {"data": [1.0, 500, 1500, "HTTP Request - Unpopular GET"], "isController": false}, {"data": [1.0, 500, 1500, "HTTP Request - Recent GET"], "isController": false}, {"data": [1.0, 500, 1500, "HTTP Request - Hour of Day Most Posts GET"], "isController": false}, {"data": [0.0, 500, 1500, "HTTP Request - Registration POST"], "isController": false}, {"data": [1.0, 500, 1500, "HTTP Request - Popular GET"], "isController": false}, {"data": [1.0, 500, 1500, "HTTP Request - Avg Comments GET"], "isController": false}, {"data": [1.0, 500, 1500, "HTTP Request - Join GET"], "isController": false}, {"data": [1.0, 500, 1500, "HTTP Request - Post Most Commented GET"], "isController": false}, {"data": [1.0, 500, 1500, "HTTP Request - Members No Activity GET"], "isController": false}, {"data": [1.0, 500, 1500, "HTTP Request - Login POST"], "isController": false}]}, function(index, item){
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
    createTable($("#statisticsTable"), {"supportsControllersDiscrimination": true, "overall": {"data": ["Total", 3003, 0, 0.0, 170.63902763902823, 2, 4028, 186.0, 238.0, 249.0, 277.96000000000004, 5.848408777092466, 5.004779873406197, 5.576442264856186], "isController": false}, "titles": ["Label", "#Samples", "FAIL", "Error %", "Average", "Min", "Max", "Median", "90th pct", "95th pct", "99th pct", "Transactions/s", "Received", "Sent"], "items": [{"data": ["HTTP Request - Avg Posts GET", 300, 0, 0.0, 186.00666666666677, 87, 341, 190.0, 226.80000000000007, 242.74999999999994, 297.83000000000015, 0.5906697801527078, 0.2901434564617305, 0.5918234320670686], "isController": false}, {"data": ["HTTP Request - Statistics - GET", 300, 0, 0.0, 3.0133333333333314, 2, 24, 3.0, 4.0, 4.0, 6.990000000000009, 0.5910864168341412, 0.688638764924932, 0.45081883940182055], "isController": false}, {"data": ["HTTP Request - Home Page GET", 1, 0, 0.0, 49.0, 49, 49, 49.0, 49.0, 49.0, 49.0, 20.408163265306122, 42.35092474489796, 2.3716517857142856], "isController": false}, {"data": ["HTTP Request - Unpopular GET", 300, 0, 0.0, 183.94666666666666, 91, 354, 187.0, 226.0, 235.95, 270.96000000000004, 0.5909781278994863, 0.7837385719604518, 0.5846297300411912], "isController": false}, {"data": ["HTTP Request - Recent GET", 300, 0, 0.0, 174.75666666666675, 93, 295, 178.0, 211.90000000000003, 224.95, 282.6700000000003, 0.5911132040897151, 0.5980403119501416, 0.5812998012874445], "isController": false}, {"data": ["HTTP Request - Hour of Day Most Posts GET", 300, 0, 0.0, 184.88666666666683, 87, 357, 191.0, 225.7000000000001, 239.95, 311.9000000000001, 0.5900761001477157, 0.2840893724343983, 0.6067872397026803], "isController": false}, {"data": ["HTTP Request - Registration POST", 1, 0, 0.0, 4028.0, 4028, 4028, 4028.0, 4028.0, 4028.0, 4028.0, 0.24826216484607744, 0.11564555921052633, 0.1888635023584906], "isController": false}, {"data": ["HTTP Request - Popular GET", 300, 0, 0.0, 170.4633333333333, 100, 421, 168.0, 207.90000000000003, 230.0, 303.6600000000003, 0.5912017357682962, 0.6218010443578663, 0.5819642086469167], "isController": false}, {"data": ["HTTP Request - Avg Comments GET", 300, 0, 0.0, 182.23000000000002, 90, 317, 188.0, 221.90000000000003, 230.0, 254.9000000000001, 0.5908268227499838, 0.29022059750316587, 0.5919807813881673], "isController": false}, {"data": ["HTTP Request - Join GET", 1, 0, 0.0, 6.0, 6, 6, 6.0, 6.0, 6.0, 6.0, 166.66666666666666, 194.17317708333334, 126.13932291666666], "isController": false}, {"data": ["HTTP Request - Post Most Commented GET", 300, 0, 0.0, 185.69999999999993, 89, 317, 192.5, 224.90000000000003, 239.84999999999997, 289.7500000000002, 0.5904907371686363, 0.5097595816963618, 0.5927973416107012], "isController": false}, {"data": ["HTTP Request - Members No Activity GET", 300, 0, 0.0, 184.13333333333335, 86, 294, 190.0, 224.90000000000003, 237.95, 272.96000000000004, 0.5903327115162106, 0.3551220217714704, 0.6174280605799428], "isController": false}, {"data": ["HTTP Request - Login POST", 300, 0, 0.0, 239.34999999999997, 178, 341, 244.0, 262.0, 266.9, 292.85000000000014, 0.5911097099621689, 0.632672111443884, 0.4358279599818726], "isController": false}]}, function(index, item){
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
    createTable($("#top5ErrorsBySamplerTable"), {"supportsControllersDiscrimination": false, "overall": {"data": ["Total", 3003, 0, "", "", "", "", "", "", "", "", "", ""], "isController": false}, "titles": ["Sample", "#Samples", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors"], "items": [{"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}]}, function(index, item){
        return item;
    }, [[0, 0]], 0);

});
