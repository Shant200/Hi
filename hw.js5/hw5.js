let time =60;
class timer {
    constructor() {}
    countdown() {
        let count= setInterval(() =>{
        let button= document.getElementById('btndiv');
        
        document.getElementById('btndiv').innerText='Click me'+ time;
       time--;
        if(time == -1){
            clearInterval(count);
            this.alert();
        }
    }, 1000);
}
       alert() {
        alert('hi');
        }
    }
    let tick= new timer();