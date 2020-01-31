var img = new Image();
img.src = 'img/flyerv2.jpg';

function carregacanvas(){
  var c = document.getElementById("canvas");
  var ctx = c.getContext("2d");
  ctx.drawImage(img, 0, 0);
  ctx.font = "Bold 19px TT Commons";
  ctx.fillStyle = "#011d4d";

  var acessora = document.getElementById("acessora").value;
  ctx.fillText(acessora,175,376);


  var cliente = document.getElementById("cliente").value;
  ctx.font = "Bold 25px TT Commons";
  ctx.fillText(cliente,57,283);


  var data = document.getElementById("data").value;
  ctx.font = "35px TT Commons";
  ctx.fillText(formatardata(data),140,521);

  var horario = document.getElementById("horario").value;
  ctx.fillText(horario,490,521);

}

function formatardata(dt){
  var dia = dt.substring(8);
  var mes = dt.substring(5, 7)
  var ano = dt.substring(0, 4)
  return dia.concat('/',mes,'/',ano)
}
