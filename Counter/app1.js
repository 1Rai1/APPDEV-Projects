//set initail value for count
let count=0

//select value and buttons
const btns = document.querySelectorAll('.btn')
const value = document.querySelector('#value')
document.getElementById('back').onclick = function() {
    window.location.href = 'http://127.0.0.1:5500/NavBar/index.html';}

btns.forEach((btn) =>{
    btn.addEventListener('click', (e) =>{
        console.log(e.currentTarget.classList)
        const styles = e.currentTarget.classList
        //decrease
        if(styles.contains('decrease')){
            count--
            value.style.color="red"
        }
        //increase
        else if(styles.contains('increase')){
            count++
            value.style.color="green"
        }
        //Minus 5
        else if(styles.contains('-5')){
            count-=5
        }
        //Add 5
        else if(styles.contains('5')){
            count+=5
        }
        //Random
        else if(styles.contains('random')){
            if (count > 0){
                count =Math.floor(Math.random() * -100)
            }
            else{
                count = Math.floor(Math.random() * 100)
            }
        }
        //reset
        else{
            count=0
        }
        if(count<0){
            value.style.color="red"
        }
        //increase
        else if(count>=1){
            value.style.color="green"
        }
        //reset
        else{
           value.style.color="black"
        }
        
        value.textContent = count
    })
})
