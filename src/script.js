/*function generate(){
    let abc = "abcdefghijklmnopqrstuvwxyz0123456789";
        let rs = "";
        while (rs.length < 5) {
            rs += abc[Math.floor(Math.random() * abc.length)];
            
            // проверка на палиндром
            let len = Math.floor(rs.length/2);
            for (var i = 0; i < len; i++)
                if (rs[i] == rs[rs.length - i - 1]){
                    let change = document.getElementById('random');
                    change.style.color = 'red';
                }
                else{
                    let change = document.getElementById('random');
                    change.style.color = 'black';
                }
            
            // проверка на цифры
            if (!isNaN(rs)){
                let allNumbers = document.getElementById('random');
                allNumbers.style.color = 'blue';
            }
            
            // проверка на наличие 0
            let razbit = rs.split('');
            console.log(razbit);
     
            for(let i = 0; i < rs.length; i++){
                if(rs[i] == 0){
                    let havenul = document.getElementById('random');
                    havenul.style.color = 'transparent';
                }
            }   
        }
    document.getElementById('random').innerHTML = rs;    
}

setInterval(generate, 3000);

*/