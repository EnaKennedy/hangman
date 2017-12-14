//var letters=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var word="";
var guessedLetters=[];
var guesses=10;
var easy=["apples","pie","math","robot","bread","orange","swamp","ocean","pool","school", "drink"];
var medium=["example","horoscope","divided","traffic","elephant","character","backyard","explosion","kayak"];
var hard=["phosphorylation","ambidextrous","photosynthesis","juxtaposition","xenophobia","peptidoglycan"];
var winOrLose="";


function setUp(){
    guessedLetters=[];
    var words = [];
    var difficulty = document.getElementById("difficulty").value;
    difficulty=parseInt(difficulty);
    if(difficulty==1){
        words=easy;
    }
    if(difficulty==2){
        words=medium;
    }
    if(difficulty==3){
        words=hard;
    }
    word = words[Math.floor(Math.random() * words.length)];
    console.log(word);
    printWord();
}

function guessLetter(){
    var guess=document.getElementById("letter").value;
    var already="";
    if(guessedLetters.indexOf(guess)>-1){
        already="You tried that letter already!"
        guesses+=1;
    }
    document.getElementById("already").innerHTML=already;
    guessedLetters.push(guess);
    console.log(guess);
    document.getElementById("guesses").innerHTML=guesses;
    var printedWord=printWord();
    if(word.indexOf(guess)<0){
        guesses-=1;
    }
    if(guesses<=-1){
        winOrLose="Sorry, you lost :( Your word was "+word;
    }
    if(printedWord.indexOf("_")==-1&&guesses>=0){
        winOrLose="Congrats! You Won";
    }
    document.getElementById("end").innerHTML=winOrLose;
}

function printWord(){
    var retWord=" ";
    for(var i=0;i<word.length;i++){
        if(guessedLetters.indexOf(word[i])==-1){
            retWord +="_ ";
        }else{
            retWord+=word[i];
        }
    }
    document.getElementById("answers").innerHTML=retWord;
    return retWord;
}

function refresh(){
    winOrLose="";
    guessedLetters=[];
    setUp();
    guesses=10
    document.getElementById("guesses").innerHTML=guesses;

}