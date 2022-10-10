// Given a string or number write a function tea42 that takes as input a string or number and returns a string where every '2' charcter or digit has been replaced with a t.

function tea42(input) {
    let res = input.toString();
    if (res.indexOf("2") !== -1) res = res.replace(/2/g, "t");
    return res;
}


// function tea42(input) {
//     return input.toString().replace (/2/g, 't');
//    };