export function shuffle(arr) {
    let _arr = arr.slice();
    for(let i = 0;i < arr.length;i++){
        let j = Math.floor(Math.random() * (i + 1));
        [_arr[i],_arr[j]] = [_arr[j],_arr[i]];
    }
    return _arr;
}

export function debounce(func,delay) {
    let timer = 0;

    return function(...args){
        timer && clearTimeout(timer);
        timer = setTimeout(() => {
            func.apply(this,args);
        },delay);
    }
}