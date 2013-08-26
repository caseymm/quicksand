  window.onload = function() {
    init()
    var formatToday = moment().format('MMMM Do YYYY, h:mm:ss a');
		
		$('<p class="inlineT">'+ formatToday +'</p>').appendTo('#giveToday');
    
    };

  var public_spreadsheet_url = 'https://docs.google.com/spreadsheet/pub?key=0Apf7BK7HxcJXdFQydmVOTzlWR3I2VkQ1WDFQNXZiWWc&output=html';

  function init() {
    Tabletop.init( { key: public_spreadsheet_url,
                     callback: showInfo,
                     simpleSheet: true } )
  }

  function precise_round(num,decimals){
  return Math.round(num*Math.pow(10,decimals))/Math.pow(10,decimals);
  }
  

function showInfo(gdata, tabletop){
        var d = new Date();
        var month = d.getMonth()+1;
	console.log(d);
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
	var round;
	var allToday;
	var levelsToday;
	
	
	var freshman = [];
	var sophomores = [];
	var juniors = [];
	var seniors = [];
	var total = [];
        
	$.each(gdata, function (i, data){
        
                var date = data.day;
		var level = data.level;
		var year = data.year;
                sum+=parseInt(level) || 0;
                //average = sum/len;
		
		var todaysDate = moment(date).format("M/DD/YYYY");
		console.log(todaysDate);
		var getToday = moment().format("M/DD/YYYY");
		console.log(getToday);
	
	if (todaysDate === getToday) {
		
		if (data.year == "Freshman" || data.year == "Sophomore" || data.year == "Junior"|| data.year == "Senior") {
		    total.push(data);
		    if (data.year == "Freshman") freshman.push(data);
		    if (data.year == "Sophomore") sophomores.push(data);
		    if (data.year == "Junior") juniors.push(data);
		    if (data.year == "Senior") seniors.push(data);
		
		allToday = (freshman.length + sophomores.length + juniors.length + seniors.length);
		

        switch(year) {
          case 'Freshman':
            sumF+=parseInt(level) || 0;
            avgF = sumF/(freshman.length);
            
            break;
          case 'Sophomore':
            sumSo+=parseInt(level) || 0;
            avgSo = sumSo/(sophomores.length);
            
            break;
          case 'Junior':
            sumJ+=parseInt(level) || 0;
            avgJ = sumJ/(juniors.length);
            
            break;
          case 'Senior':
            sumSr+=parseInt(level) || 0;
            avgSr = sumSr/(seniors.length);
            
            break;
          
          default:
            
        }
	levelsToday = (sumF + sumSo + sumJ + sumSr);
	average = levelsToday/allToday;
	round = precise_round(average, 2);
}
}
	});
	console.log(allToday);
        //console.log(sum);
        console.log(average);
        console.log(avgF);
        console.log(avgSo);
        console.log(avgJ);
        console.log(avgSr);
	roundF = precise_round(avgF, 2);
	roundSo = precise_round(avgSo, 2);
	roundJ = precise_round(avgJ, 2);
	roundSr = precise_round(avgSr, 2);
        $('<p class="all votes">'+ round +'</p>').appendTo('#current');
	$('<p class="inline">'+ freshman.length +'</p>').appendTo('#freshmanResp');
	$('<p class="votes">'+ roundF +'</p>').appendTo('#freshmanStress');
	$('<p class="inline">'+ sophomores.length +'</p>').appendTo('#sophomoreResp');
	$('<p class="votes">'+ roundSo +'</p>').appendTo('#sophomoreStress');
	$('<p class="inline">'+ juniors.length +'</p>').appendTo('#juniorResp');
	$('<p class="votes">'+ roundJ +'</p>').appendTo('#juniorStress');
	$('<p class="inline">'+ seniors.length +'</p>').appendTo('#seniorResp');
	$('<p class="votes">'+ roundSr +'</p>').appendTo('#seniorStress');
	
	$('#ss-submit').click(function() {
	$('#myModal').modal('hide');
	});
	
	var sink = document.getElementById("pathA");
	sink.setAttribute("d", "M 0 0 l 0 " + (round*25.5));
	var object = document.getElementById("person");
	//object.beginElement();
};