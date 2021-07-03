const txtelement = ['Our Private Trip','Our Open Trip'];
let count = 0;
let txtindex = 0;
let currenttxt = '';
let words = '';


console.log('test');

(function ngetik(){
    if(count == txtelement.length){
        count = 0;

    }
    currenttxt = txtelement[count];

    words = currenttxt.slice(0, ++txtindex);
    document.querySelector('.efek-ngetik').textContent = words;

    if(words.length == currenttxt.length){
        count++;
        txtindex = 0;
    }
    setTimeout(ngetik, 300);
})();