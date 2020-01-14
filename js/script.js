var img = new Image();
img.src = 'img/flyer.jpg';

function carregacanvas(){
  var c = document.getElementById("canvas");
  var ctx = c.getContext("2d");
  ctx.drawImage(img, 0, 0);
  ctx.font = "17px Arial";

  var acessora = document.getElementById("acessora").value;
  ctx.fillText(acessora,528,314);


  ctx.font = "20px Arial";
  var cliente = document.getElementById("cliente").value;
  ctx.fillText(cliente,630,290);

  var data = document.getElementById("data").value;

  ctx.fillText(formatardata(data),255,524);


  var horario = document.getElementById("horario").value;
  ctx.fillText(horario,532,524);

}

function formatardata(dt){
  var dia = dt.substring(8);
  var mes = dt.substring(5, 7)
  var ano = dt.substring(0, 4)
  return dia.concat('/',mes,'/',ano)
}
