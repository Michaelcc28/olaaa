const SUUUUUUBtn = document.querySelector("#SUUUUUUBtn");

/*SUUUUUUBtn.style.background = "pink";*/

SUUUUUUBtn.addEventListener("click",function () {
    alert("Como se que pusiste Suuuuu a la primera (espero que si jjajajaja) ahora lees todo lo que te tengo que decir, bueno comienzo diciendote que gracias por llegar a mi vida no sabes el tiempo que e deseado encontra a alguien que me haga sentir querido y mas que todo que me haga sentir seguro, no soy el chico perfecto pero lo que si te aseguro que soy es un chico que aprecia y aprovecha las oportunidades que se le presentan y tu eres lo mejor que se presento en mi vida y por nada del mundo lo cambiara, quiero que sepas que vas a tener a mas que un novio vas a tener a una persona que cuando te sientas sola o sientas que el mundo se te vien encima yo estare ahi para apoyarte y no dejarte sola, vas a tener a un novio que va a tratar de ser mejor que todos que va hacer que te sientas la chica mas afortunada del mundo, te prometo llenar tu vida de lindas experiencias y momentos unicos, quiero que sepas que te voy a querer y tambien que puedes confiar que tu corazon y tu estan a salvo conmigo que los voy a tesorar como vida y pues aun me falta mucho por decirte pero eso te lo voy a decir cuando te vea y segun pase el tiempo y pues como dijo mi pana el Paulito (Soy todo oídos para tu boca, y tu boquita toda mía) Te quiero mucho mi gomita.   ")

});

const NOOOOBtn = document.querySelector("#NOOOOBtn");

NOOOOBtn.addEventListener("mouseover", function () {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    NOOOOBtn.style.setProperty("top",randomY+"%");
    NOOOOBtn.style.setProperty("left",randomX+"%");
    NOOOOBtn.style.setProperty("transform",`translate(-${randomX}%,-${randomY}%)`);


})





