function iniciar() {
    document.getElementById('sonido').play();
	
	var Radar = new Chart(document.getElementById("grafico").getContext("2d")). Radar(RadarChart,
	{pointLabelFontSize : 13, pointLabelFontColor : "grey", scaleLineWidth: 5, scaleLineColor: "black"});
	
	/*Enunciado Canvas*/
    elemento = document.getElementById('lienzo');
    lienzo = elemento.getContext('2d');
    setInterval(parpadeo, 50);
 
    

}
/* CANVAS banner esta mal */
function parpadeo() {
    for (i = 0; i < 1000; i++) {
        lienzo.beginPath();
        var x = (Math.floor(Math.random() * 160));
        var y = (Math.floor(Math.random() * 600));
        lienzo.fillStyle = "white";
        lienzo.arc(x, y, 1, 0, Math.PI * 2, false);
        lienzo.fill();
    }
    lienzo.beginPath();
    lienzo.font = "bold 100px verdana, sans-serif";
    lienzo.textAlign = "center";
    lienzo.textBaseline = "bottom";
    color = "grey";
    lienzo.fillStyle = color;
    lienzo.fillText("EXAMEN", 125, 300);
}
/*FIN ENUNCIADO CANVAS/*


/*SVG SNAP*/

window.onload = function () {

 var s = Snap("#svg");

Snap.load("basura.svg", function(f) {
//Asigno las partes de las tapas
 tapa1 = f.select("#tapa1");
 tapa2 = f.select("#tapa2");
//Asigno todo
 todo = f.select("#todo");
//Muevo las dos tapas a la vez
 todo.hover(function() {
 tapa1.animate({y:26.148743}, 500);
 tapa2.animate({y:45.846718}, 500);
 },
//Y cuando quito el raton, todo vuelve como antes
 function() {

tapa1.animate({y:36.148743}, 500);
tapa2.animate({y:55.846718}, 500);
}
 );

s.append(f);
});
};
/* FIN SVG SNAP*/

/*GRAFICO CHARTJS*/
var RadarChart = {
labels: ["Elemento 1", "Elemento 2", "Elemento 3", "Elemento 4", "Elemento 5"],
datasets: [{
fillColor: "grey",
strokeColor: "#fff",
pointColor: "grey",
pointStrokeColor: "#fff",
data: [10, 20, 30, 100, 50]
}]
}





/*FIN GRAFICO CHARTJS*/
window.addEventListener("load", iniciar, false);