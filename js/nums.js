  window.onload = function() { init() };

  var public_spreadsheet_url = 'https://docs.google.com/spreadsheet/pub?key=0Apf7BK7HxcJXdFQydmVOTzlWR3I2VkQ1WDFQNXZiWWc&output=html';

  function init() {
    Tabletop.init( { key: public_spreadsheet_url,
                     callback: showInfo,
                     simpleSheet: true } )
  }

  /*function showInfo(data, tabletop) {
    //alert("Successfully processed!")
    console.log(data);
  }*/

function showInfo(gdata, tabletop){
	console.log("parsing");
        var d = new Date();
        var month = d.getMonth()+1;
//console.log(month);
        var day = d.getDate();
        var year = d.getFullYear();
	//var d = new Date();
        //var n = d.getDate();
        var len = gdata.length;
        var sum = 0;
        var sumF = 0;
        var sumSo = 0;
        var sumJ = 0;
        var sumSr = 0;
        var average = 0;
        var avgF = 0;
        var avgSo = 0;
        var avgJ = 0;
        var avgSr = 0;
        
	$.each(gdata, function (i, gdata){
            
		//ID = "id"+i;
                var date = gdata.Timestamp;
		var level = gdata.level;
		var year = gdata.year;
                sum+=parseInt(level) || 0;
                average = sum/len;
                
		
        switch(year) {
          case 'Freshman':
            sumF+=parseInt(level) || 0;
            console.log(sumF);
            avgF = sumF/len;
            
            break;
          case 'Sophomore':
            sumSo+=parseInt(level) || 0;
            console.log(sumSo);
            avgSo = sumSo/len;
            
            break;
          case 'Junior':
            sumJ+=parseInt(level) || 0;
            console.log(sumJ);
            avgJ = sumJ/len;
            
            break;
          case 'Senior':
            sumSr+=parseInt(level) || 0;
            console.log(sumSr);
            
            avgSr = sumSr/len;
            
            break;
          
          default:
            console.log("");
        }

	});
        console.log(sum);
        console.log(average);
        console.log(avgF);
        console.log(avgSo);
        console.log(avgJ);
        console.log(avgSr);
        $('<p>'+ average +'</p>').appendTo('#current');
};