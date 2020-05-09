var reversedSetting = false;
function sortHtmlTable(n, tableId, isNumber=false) {
  var table, rows;
  table = document.getElementById(tableId);
  rows = table.rows;

  var sorted_list = [];
  for (var i = 1; i < rows.length; i++){    
    var elem = rows[i].getElementsByTagName("TD")[n];
    elem = elem.textContent || elem.innerText;
    
    sorted_list.push(
      [elem, i, rows[i]]
    )
  }
  if(isNumber){
    sorted_list = sorted_list.sort(function(a,b){return Number(a[0]) - Number(b[0])});
  }
  else{
    sorted_list = sorted_list.sort();
  }
  if(reversedSetting){
    sorted_list.reverse();
    reversedSetting = false;
  }
  else{
    reversedSetting = true;
  }

  var test = [];
  // Re order the table
  for(var i = 1; i < (rows.length);i++){
   rows[i].parentNode.insertBefore(sorted_list[i-1][2], rows[i]);
  }
}
