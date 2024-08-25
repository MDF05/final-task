function draw(num) {
    let pola = ""
    if(num % 2 == 0) return console.log("harus bilangan ganjil ya")

    for(let a = 0; a < num; a++) {
        for(let b = 0; b < num; b++) {
            if(a == 0 || a == (num - 1)) {
                if( b == 0) pola += "*"
                else if( b == (num - 1) / 2) pola += "*"
                else if( b == num - 1) pola += "*"
                else pola += "#" 
            }else if(a == (num -1) / 2) {
                if(b == (num - 1) /2 ) pola += "#"
                else pola += "*"
            } 
            else {
               if(b == (num - 1)/2) pola += "*"
                else pola += "#" 
            }
        }
        pola += "\n"
        
    }

    console.log(pola)
}


draw(7)