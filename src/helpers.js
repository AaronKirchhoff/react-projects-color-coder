// return a random list. it runs thourgh an array and picks a random index

function choice(arr){
    let randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}

export {choice};