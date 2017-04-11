var express = require("express");
var appli = express();

appli.get(
	'/',
	function(request,response){
		response.send('salut à toi');

	}
);
appli.get(
	'/user',
	function(request,response){
	var retour = {
	"nom" : "avitabile",
	"prenom" : "marvin"
	};
	response.json(retour);
	}
);

appli.listen(12107,function(){
console.log("j'ecoute rien du tout");
});
