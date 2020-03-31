
class Slider {
    constructor(selector){
        this.move = this.move.bind(this);
        this.slider = document.querySelector(selector);
        this.interval = null;
        this.contador = 0;
        this.start();
    }
    start(){
        this.interval = window.setInterval(this.move,2000);
    }
    move(){
        this.contador++;
        this.moveTo(this.contador);
    }

    moveTo(index){
    let left = index * 100;
    this.slider.querySelector(".container").style.left = "-" + left + "%";
    }
}
(function(){
new Slider(".slider");
});