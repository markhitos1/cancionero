

function botones( ide , clas ) {
   var c = document.getElementById("ceparar");
   var clon = c.cloneNode("ceparar");
   document.body.appendChild(clon);

  
   const div1 = document.querySelector('.hola-1');

   remover = div1.setAttribute('class', `${clas}`);

   const ides = document.getElementById("hola-1");

   cambiar =  ides.setAttribute("id",`${ide}`);

   
}



function titulo (titulo){

   const contenedor = document.querySelector('.hola-1 #hola-1.modal-body');
   
   const item = document.createElement("h1");

   const text = document.createTextNode(`${titulo}`);

   item.appendChild(text);
   contenedor.appendChild(item);
}



function texto(nota,numero,titulo1,titulo2,letra1,letra2,letra3,letra4,letra5,letra6,letra7,letra8,letra9,letra10,letra11,letra12,letra13,letra14){

   const contenedor = document.querySelector('#ceparar-1');
  


   const item1 = document.createElement("div");
   const item2 = document.createElement("button");
   const item3 = document.createElement("div");
   const item4 = document.createElement("div");
   const item5 = document.createElement("div");
   const item6 = document.createElement("div");
   const item7 = document.createElement("h1");
   const item8 = document.createElement("button");
   const item9 = document.createElement("div");

  contenedor.appendChild(item1)
   item1.appendChild(item2);
   item1.appendChild(item3);
   item3.appendChild(item4);
   item4.appendChild(item5);
   item5.appendChild(item6);
   item6.appendChild(item7);
   item6.appendChild(item8);
   item5.appendChild(item9);

   item1.setAttribute("class", `${nota}${numero}`);
   item1.setAttribute("id", `ceparar-1`);

   item2.setAttribute("class",`${nota}`);
   item2.setAttribute("id",`${nota}${numero}`);
   item2.setAttribute("type","button");
   item2.setAttribute("data-bs-toggle","modal");
   item2.setAttribute("data-bs-target",`#exampleModal${numero}`);

   item3.setAttribute("class","modal fade");
   item3.setAttribute("id",`exampleModal${numero}`);
   item3.setAttribute("tabindex","-1");
   item3.setAttribute("aria-labelledby","exampleModalLabel");
   item3.setAttribute("aria-hidden","true");
   
   item4.setAttribute("class","modal-dialog");
   
   item5.setAttribute("class","modal-content");

   item6.setAttribute("class","modal-header");

   item7.setAttribute("class","modal-title fs-5");
   item7.setAttribute("id","exampleModalLabel");

   item8.setAttribute("type","button");
   item8.setAttribute("class","btn-close");
   item8.setAttribute("data-bs-dismiss","modal");
   item8.setAttribute("aria-label","Close");
   item9.setAttribute("class","modal-body");
   item9.setAttribute("id",`mayor-${numero}`);

   const i1 = document.createElement("h2");
   const i2 = document.createElement("h2");
   const i3 = document.createElement("h2");
   const i4 = document.createElement("h2");
   const i5 = document.createElement("h2");
   const i6 = document.createElement("h2");
   const i7 = document.createElement("h2");
   const i8 = document.createElement("h2");
   const i9 = document.createElement("h2");
   const i10 = document.createElement("h2");
   const i11 = document.createElement("h2");
   const i12 = document.createElement("h2");
   const i13 = document.createElement("h2");
   const i14 = document.createElement("h2");

   const text = document.createTextNode(`${titulo1}`);
   const text2 = document.createTextNode(`${titulo2}`);
   const h = document.createTextNode(`${letra1}`);
   const h2 = document.createTextNode(`${letra2}`);
   const h3 = document.createTextNode(`${letra3}`);
   const h4 = document.createTextNode(`${letra4}`);
   const h5 = document.createTextNode(`${letra5}`);
   const h6 = document.createTextNode(`${letra6}`);
   const h7 = document.createTextNode(`${letra7}`);
   const h8 = document.createTextNode(`${letra8}`);
   const h9 = document.createTextNode(`${letra9}`);
   const h10 = document.createTextNode(`${letra10}`);
   const h11 = document.createTextNode(`${letra11}`);
   const h12 = document.createTextNode(`${letra12}`);
   const h13 = document.createTextNode(`${letra13}`);
   const h14 = document.createTextNode(`${letra14}`);
   
   item2.appendChild(text);
   item7.appendChild(text2);

   item9.appendChild(i1);
   item9.appendChild(i2);
   item9.appendChild(i3);
   item9.appendChild(i4);
   item9.appendChild(i5);
   item9.appendChild(i6);
   item9.appendChild(i7);
   item9.appendChild(i8);
   item9.appendChild(i9);
   item9.appendChild(i10);
   item9.appendChild(i11);
   item9.appendChild(i12);
   item9.appendChild(i13);
   item9.appendChild(i14);

   i1.appendChild(h)
   i2.appendChild(h2)
   i3.appendChild(h3)
   i4.appendChild(h4)
   i5.appendChild(h5)
   i6.appendChild(h6)
   i7.appendChild(h7)
   i8.appendChild(h8)
   i9.appendChild(h9)
   i10.appendChild(h10)
   i11.appendChild(h11)
   i12.appendChild(h12)
   i13.appendChild(h13)
   i14.appendChild(h14)


   
}





texto("mayor","1","NO HAY DIOS TAN GRANDE COMO TU","𝙉𝙊 𝙃𝘼𝙔 𝘿𝙄𝙊𝙎 𝙏𝘼𝙉 𝙂𝙍𝘼𝙉𝘿𝙀 𝘾𝙊𝙈𝙊 𝙏𝙐",
`//NO HAY DIOS TAN GRANDE COMO TU `,`NO LO HAY , NO LO HAY//`,"//NO HAY DIOS QUE PUEDA HACER LAS OBRAS ","","COMO LAS QUE HACES TU//","","","","");

texto("mayor","2","ESTE ES EL CRISTO", "𝙀𝙎𝙏𝙀 𝙀𝙎 𝙀𝙇 𝘾𝙍𝙄𝙎𝙏𝙊",`ESTE ES EL CRISTO `,"QUE YO PREDICO","Y NO ME CANSO DE PREDICAR","SANA A LOS ENFERMOS","AUYENTA A LOS DEMONIOS","CALMA LOS VIENTOS ","Y TAMBIEN LA TEMPESTAD"," /// Y YO LE ALABARE /// ","DICIENDO GLORIA A DIOS" );

texto("mayor","3","VIVA LA FE ","𝙑𝙄𝙑𝘼 𝙇𝘼 𝙁𝙀",`///VIVA LA FE VIVA LA ESPERANZA`,"VIVA EL AMOR///","QUE VIVA CRISTO","QUE VIVA CRISTO ","QUE VIVA CRISTO EL","----------------","QUE VIVA CRISTO ","//QUE VIVA QUE VIVA CRISTO //","QUE VIVA EL ","");
texto("mayor","4","UNA MIRADA DE FE", "𝙐𝙉𝘼 𝙈𝙄𝙍𝘼𝘿𝘼 𝘿𝙀 𝙁𝙀","//UNA MIRADA DE FE ","UNA MIRADA DE AMOR ","ES LA QUE PUEDE ","SALVAR AL PECADOR//","Y SI TU VIERES A CRISTO JESUS","EL TE PERDONARA","PORQUE UN A MIRADA DE AMOR","ES LA QUE PUEDE ","SALVAR AL PECADOR");
texto("mayor","5","YO TENGO UN AMIGO QUE ME AMA","𝙔𝙊 𝙏𝙀𝙉𝙂𝙊 𝙐𝙉 𝘼𝙈𝙄𝙂𝙊 𝙌𝙐𝙀 𝙈𝙀 𝘼𝙈𝘼","YO TENGO UN AMIGO QUE ME AMA","ME AMA , ME AMA","YO TENGO UN AMIGO QUE ME AMA"," SU NOMBRE ES JESUS","//EL ME AMA//","EL ME AMA ASI CON TIERNO AMOR","//EL ME AMA//","SU NOMBRE ES JESUS");
texto("mayor","777","ALELUYA SOY UN SALVO","𝘼𝙇𝙀𝙇𝙐𝙔𝘼 𝙎𝙊𝙔 𝙐𝙉 𝙎𝘼𝙇𝙑𝙊","//ALELUYA SOY UN SALVO","PUES JESUCRISTO CON SU SANGRE ME LAVO","ALELUYA SOY UN SALVO","Y POR ESO ALEGRE ESTOY","ALELUYA SOY UN SALVO",".........","EL EVANGELIO ANUNCIARE","//ALELUYA ESTA VIDA ES DIFERENTE","CON JESÚS ETERNAMENTE VOY A MI CELESTE HOGAR//","")
texto("mayor","6","CRISTO ROMPE LAS CADENAS","CRISTO ROMPE LAS CADENAS","///CRISTO ROMPE LAS CADENAS///","Y ME DA SEGURIDAD" , "-------- O ---------","COMO ES POSIBLE YO VIVIR SIN TI JESUS","SI EL FUNDAMENTO DE MI VIDA ERES TU","TU ME SALVASTE Y ME LIBRASTE","DE LA MUERTE..","COMO ES POSIBLE YO VIVIR SIN TI JESUS","");
texto("mayor","7","DONDE ESTA EL ESPIRITU DE DIOS","DONDE ESTA EL ESPIRITU DE DIOS","DONDE ESTA EL ESPIRITU DE DIOS ","HAY LIUBERTAD ","HAY LIBERTAD","DONDE ESTA EL ESPIRITU DE DIOS ","ALLI SIEMPRE HAY LIBERTAD","///LIBERTAD...///","DONDE ESTA EL ESPIRITU DE DIOS ","ALLI SIEMPRE HAY LIBERTAD.","");
texto("mayor","8","PASA POR AQUI SEÑOR","PASA POR AQUI SEÑOR","PASA POR AQUI SEÑOR PASA POR AQUI","PASA POR AQUI SEÑOR PASA POR AQUI","------ O ------","OHH OHH SEÑOR PASA POR AQUI","OHH OHH SEÑOR PASA POR AQUI..","","","","","");
texto("mayor","9","ARDIENDO EL FUEGO","ARDIENDO EL FUEGO","ARDIENDO EL FUEGO EN MI ALMA ESTA","ARDIENDO EL FUEGO EN MI ALMA ESTA","GLORIOSA LLAMA ME LIBRARA","OHH ALELUYA ARDIENDO EL FUEGO ESTA","------ O ------","OHHH SEÑOR QUIERO QUE ARDAS EN MI SER ","COMO LA ZARZA QUIERO ARDE CON TU PODER","EN NUEVAS LENGUA QUIERO HABLAR COMO SEÑAL","QUE ESTOY ARDIENDO CON EL FUEGO CELESTIAL ","QUIERO ALABARTE Y ADORARTE SOLO A TI","COMO SE DORA EN ESPIRITU Y EN VERDAD","//OHHH SEÑOR QUIERO QUE ARDAS EN MI SER","COMO LA ZARZA QUIERO ARDER CON TU PODER//","");
texto("mayor","10","BENDITO SEA JEHOVA LA ROCA","BENDITO SEA JEHOVA LA ROCA","BENDITO SEA JEHOVA LA ROCA","POR TODA LA ETERNIDAD","MI ESCONDEDERO Y MI REDFUGIO ","ERES TU BENDITO JEHOVA","EN TU PALABRA YO ESPERARE ","Y MI CONFIANZA EN TI PONDER ","OHH GLORIA OHH ALELUYA ","//AMEN AMEN..//","","","","","","","");
texto("mayor","11","QUE NO SE APAGUE EL FUEGO","QUE NO SE APAGUE EL FUEGO QUE HAY EN MI CORAZÓN","QUE NO SE APAGUE EL FUEGO QUE HAY EN MI CORAZÓN","QUE NO SE APAGUE EL FUEGO QUE SIGA","QUE SIGA ARDIENDO MAS Y MAS","DAME GOZO SEÑOR "," DAME PAZ Y AMOR"," QUE YO QUIERO MORAR"," MAS ALLÁ DEL SOL","")
texto("mayor","12","CRISTO TIENE PODER","CRISTO TIENE PODER","//CRISTO TIENE PODER//","CRISTO TIENE PODER ALELUYA TIENE PODER","CRISTO TIENE PODER CRISTO TIENE PODER","JESUCRISTO ES PODEROSO","JESUCRISTO  TIENE PODER","JESUCRISTO ES PODEROSO","JESUCRISTO TIENE PODER","");
texto("mayor","13","YO LE ALABO DE CORAZON ","YO LE ALABO DE CORAZON","//YO LE ALABO DE CORAZON "," YO LE ALABO CON MI VOZ//","Y SI ME FALTA LA VOZ ","YO LE ALABO CON MIS MANOS","Y SI ME FALATN LAS MANOS","YO LE ALABO CON MIS PIES ","Y SI ME FALTA LOS PIES ","YO LE ALABO CON EL ALMA","Y SI ME FALTARA EL ALMA..","ES.. QUE.. YA ESTOY CON EL...","//ALABALE ALABALE","ALABALE DE CORAZON//");
texto("mayor","14","CUANDO CRISTO VINO A MI CORAZON","CUANDO CRISTO VINO A MI CORAZON","CUANDO CRISTO VINO A MI CORAZON","MI VIDA ENTERA CAMBIO..","SU PAZ Y SU AMOR ALEJARON DE MI","LAS DUDAS EL MIEDO Y EL TEMOR","------- O -------","//MI VIDA COMENZO ","CUANDO EL SEÑOR LLEGO","Y HOY PUEDO CANTAR DE SU AMOR//","","","","","","");
texto("mayor","15","BENDICION VINE A BUSCAR","BENDICION VINE A BUSCAR","//BENDICION VINE A BUSCAR","Y SIN ELLA NO ME IRE//","Y DAME MAS SEÑOR","DE TU GRAN PODER","Y DAME MAS SEÑOR","DE TU GRAN PODER");
texto("mayor","16","VIDA ABUNDANTE QUIERO TENER","VIDA ABUNDANTE QUIERO TENER","VIDA ABUNDANTE QUIERO TENER","QUIERO TENER QUIERO TENER","VIDA ABUNDANTE QUIERO TENER","SOLO JESUCRISTO TE LA DA","ANDAR CON CRISTO EN COMUNION","CON LOS HERMANOS EN AMOR","QUE GOZO TENGO EN MI CORAZON ","SOLO JESUCRISTO ME LO DA");
texto("mayor","17","HAY VIDA EN JESUS","HAY VIDA EN JESUS","HAY VIDA HAY VIDA EN JESUS","HAY VIDA HAY VIDA EN JESUS","YO VOY A MORAR ","A LA PATRIA CELESTIAL","PORQUE HAY VIDA ","HAY VIDA EN JESUS","//HAY GOZO HAY GOZO EN JESUS//","YO VOY A MORAR A LA PATRIA CELESTIAL","PORQUE HAY GOZO HAY GOZO EN JESUS","","","","","","") 

/* link para ubicar las canciones*/


texto("menor","30","COMO LADRON DE LA NOCHE","COMO LADRON EN LA NOCHE","//COMO LADRON EN LA NOCHE//","ASI SERA LA VENIDA DEL HIJO DEL HOMBRE","//ESO LO DICE LA BIBLIA ","LA BIBLIA NO HA DE MENTIR","JESUCRISTO VENDRA ","COMO LADRON EN LA NOCHE//");
texto("menor","31","COMO EL SIERVO BRAMA"); 
texto("menor","32","YO HE CREIDO EN UN PODER QUE NO SE TOCA"); 
texto("menor","33");
texto("menor","34");
texto("menor","35");
texto("menor","36");
texto("menor","37");
texto("menor","38");
texto("menor","39");
texto("menor","40");


texto("al-mayor","90");

texto("al-menor","130");