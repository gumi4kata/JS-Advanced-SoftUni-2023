function solve(){

    return arr.reduce((a, v) => (a = Math.max(...v) > a ? Math.max(...v) : a), -Infinity);
    
}
solve([[20, 50, 10], [8, 33, 145]]);