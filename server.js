var path = require('path');
var express=require('express')
var app=express();
app.set('view engine','pug');
app.set('views',path.join(__dirname+'/views/'));
app.get('/',function(req,res){
	res.render('index');
})
app.get('/:query',function(req,res){
	var number = parseInt(req.params.query);
	if(!isNaN(number)){
		var date = new Date(number*1000);
		var nat = date.getMonth()+1;
		switch(nat){
		      case 1:
		        var month = "January";
		        break;
		      case 2:
		        var month = "Feburary";
		        break;
		      case 3:
		        var month = "March";
		        break;
		      case 4:
		        var month = "April";
		        break;
		      case 5:
		        var month = "May";
		        break;
		      case 6:
		        var month = "June";
		        break;
		      case 7:
		        var month = "July";
		        break;
		      case 8:
		        var month = "August";
		        break;
		      case 9:
		        var month = "September";
		        break;
		      case 10:
		        var month = "October";
		        break;
		      case 11:
		        var month = "November";
		        break;
		      case 12:
		        var month = "December";
		        break;            
		      default:
		        var month = "Unknown";
		    }
		//res.send(hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2)+date.getFullYear().toString());
		var time = {
			unix: number,
			natural : month+" "+date.getDay()+","+date.getFullYear()
		}
		res.json(time);
	}else{
		var date = new Date((req.params.query).toString());
		var nat = date.getMonth()+1;
		switch(nat){
		      case 1:
		        var month = "January";
		        break;
		      case 2:
		        var month = "Feburary";
		        break;
		      case 3:
		        var month = "March";
		        break;
		      case 4:
		        var month = "April";
		        break;
		      case 5:
		        var month = "May";
		        break;
		      case 6:
		        var month = "June";
		        break;
		      case 7:
		        var month = "July";
		        break;
		      case 8:
		        var month = "August";
		        break;
		      case 9:
		        var month = "September";
		        break;
		      case 10:
		        var month = "October";
		        break;
		      case 11:
		        var month = "November";
		        break;
		      case 12:
		        var month = "December";
		        break;            
		      default:
		        var month = "Unknown";
		    }
		var time = {
			unix: date.getTime()/1000,
			natural : month+" "+date.getDay()+","+date.getFullYear()
		}
		res.json(time);
	}
})
app.listen(3000);