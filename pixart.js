
let button=document.querySelector('button');

console.log('hiiiii');


function setColor(evt){
    
evt.preventDefault();
    let getColor=document.querySelector('#color-field').value;
    let currentColor=document.querySelector('.brush');
    currentColor.style.backgroundColor=getColor;

    console.log(getColor);
console.log('hi');

console.log(getColor)


}

button.addEventListener('click',setColor);


class Square{
    constructor(name,size,sq,getColor=document.querySelector('#color-field').value){
        this.getColor=getColor;
        this.name=name;
        this.size=size;
        this.sq=sq
    }
    generateSquares(number){

        for(let i=0;i<number;i++){
           this.sq=document.createElement('div');
           this.sq.classList.add('square')
            document.body.appendChild(this.sq);
            console.log(i)

            console.log(this.sq);

            function change(e){
                            e.target.style.backgroundColor=document.querySelector('#color-field').value;
                            console.log(e.target)
            }
            this.sq.addEventListener('mouseover',change);
            // ()=>{
                // this.sq.style.backgroundColor=color;
                // console.log("fdfdfdf")


        }
        console.log(this.getColor);

    }



}



let sq1=new Square;
// sq1.generateSquares(20,this.getColor);
sq1.generateSquares(8000);

console.log(sq1);

