const canv = document.querySelector('canvas');
const ctx = canv.getContext('2d');

canv.width = innerWidth;
canv.height = innerHeight;

class Obj{
    constructor(x,y,w,h){
        this.x = x;
        this.y=y;
        this.w=w;
        this.h=h;
        this.a=0;
        this.vel={
            x:0,
            y:0
        }
        this.dir;
    }
    render(){

        if(this.dir=='up'){
            this.vel.x=0;
            this.vel.y=-5;
        }else if(this.dir=='left'){
            this.vel.x=-5;
            this.vel.y=0;
        }
        ctx.save();
        ctx.translate(this.x+=this.vel.x,this.y+=this.vel.y);
        ctx.rotate(this.a);
        ctx.fillRect(-this.w/2,-this.h/2,this.w,this.h);
        ctx.fillStyle='lime';
        ctx.fillRect(-this.w/20,-this.h,this.w*0.2,this.h);
        ctx.restore();
    }
}

let dibba = new Obj(100,100,90,100);

function renderer(){
    ctx.clearRect(0,0,innerWidth,innerHeight);
    requestAnimationFrame(renderer);
    dibba.render();
}
renderer();

 canv.onmousemove=(e)=>{
     //document.write(e.clientY);
    dibba.a = Math.atan2(e.clientX -dibba.x,-(e.clientY-dibba.y));
 }
 
 document.onkeydown=(e)=>{
     if(e.keyCode==65){
         dibba.vel.x=-5;
         dibba.vel.y=0;
     }
     else if(e.keyCode==87){
        dibba.vel.x=0;
        dibba.vel.y=-5;
     }
     else if(e.keyCode==68){
        dibba.vel.x=5;
        dibba.vel.y=0;
     }
     else if(e.keyCode==83){
        dibba.vel.x=0;
        dibba.vel.y=5;
    }
 }
 document.onkeyup=()=>{
    dibba.vel.x=0;
    dibba.vel.y=0;
 }