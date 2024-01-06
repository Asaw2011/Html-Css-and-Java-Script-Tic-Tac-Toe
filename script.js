
let turn = "X"

function play(position){

    if ( document.getElementById(position).innerText == ""){
        document.getElementById(position).innerText = turn
        if ( checkWinner(turn)){
            // document.write(turn+"wins the game")
            if( turn == "X"){
                location.href="xwin.html"
            }
            else{
                location.href="owin.html"
            }
        }
        if ( tie() ){
            location.href="tie.html"
        }
        if ( turn == "X"){
            turn = "O"
        }
        else{
            turn = "X"
        }
    }

  
}

function checkWinner(player){
    let topLeftText = document.getElementById("top-left").innerText
    let topMiddleText = document.getElementById("top-middle").innerText
    let topRightText = document.getElementById("top-right").innerText
    let middleLeftText = document.getElementById("middle-left").innerText
    let middleMiddleText = document.getElementById("middle-middle").innerText
    let middleRightText = document.getElementById("middle-right").innerText
    let bottomLeftText = document.getElementById("bottom-left").innerText
    let bottomMiddleText = document.getElementById("bottom-middle").innerText
    let bottomRightText = document.getElementById("bottom-right").innerText

    if ( topLeftText === topMiddleText && topMiddleText == topRightText && topRightText == player ){
        return true
    }
    else if ( middleLeftText === middleMiddleText && middleMiddleText == middleRightText && middleRightText == player ){
        return true
    }
    else if ( bottomLeftText === bottomMiddleText && bottomMiddleText == bottomRightText && bottomRightText == player ){
        return true
    }
    else if ( topLeftText === middleLeftText && middleLeftText == bottomLeftText && bottomLeftText == player ){
        return true
    }
    else if ( topMiddleText === middleMiddleText && middleMiddleText == bottomMiddleText && bottomMiddleText == player ){
        return true
    }
    else if ( topRightText === middleRightText && middleRightText == bottomRightText && bottomRightText == player ){
        return true
    }
    else if ( topLeftText === middleMiddleText && middleMiddleText == bottomRightText && bottomRightText == player ){
        return true
    }
    else if ( topRightText === middleMiddleText && middleMiddleText == bottomLeftText && bottomLeftText == player ){
        return true
    }
    else{
        return false
    }
}

function tie(){
    let topLeftText = document.getElementById("top-left").innerText
    let topMiddleText = document.getElementById("top-middle").innerText
    let topRightText = document.getElementById("top-right").innerText
    let middleLeftText = document.getElementById("middle-left").innerText
    let middleMiddleText = document.getElementById("middle-middle").innerText
    let middleRightText = document.getElementById("middle-right").innerText
    let bottomLeftText = document.getElementById("bottom-left").innerText
    let bottomMiddleText = document.getElementById("bottom-middle").innerText
    let bottomRightText = document.getElementById("bottom-right").innerText

    if( topLeftText == "") return false ; 
    else if ( topMiddleText == "") return false ; 
    else if ( topRightText == "") return false ; 
    else if ( middleLeftText == "") return false ; 
    else if ( middleMiddleText == "") return false ; 
    else if ( middleRightText == "") return false ; 
    else if ( bottomLeftText == "") return false ; 
    else if ( bottomMiddleText == "") return false ; 
    else if ( bottomRightText == "") return false ; 

    else return true;
}


function reset(){
    document.getElementById("top-left").innerText = ""
    document.getElementById("top-middle").innerText = ""
    document.getElementById("top-right").innerText = ""
    document.getElementById("middle-left").innerText = ""
    document.getElementById("middle-middle").innerText = ""
    document.getElementById("middle-right").innerText = ""
    document.getElementById("bottom-left").innerText = ""
    document.getElementById("bottom-middle").innerText = ""
    document.getElementById("bottom-right").innerText = ""
}