document.addEventListener("DOMContentLoaded", function(){
  function getRandomYNumber(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min) + min)
  }
  function getRandomXNumber(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min) + min)
  }
  function slopok(){
    document.querySelector('[href="#button"]').style.top = getRandomYNumber(0, 930)+"px";
      document.querySelector('[href="#button"]').style.left = getRandomXNumber(0, 1900)+"px";
    }
    let time = 500;
    let score = 0;
    let miss = 0;
    document.querySelector('[href="#button"]').addEventListener('click',function(){
      score = score + 1;
      document.querySelector(".score").textContent = "score: " + score;
      miss = miss + -1;
      slopok();
    });
    document.querySelector("body").addEventListener('click',function(){
      miss = miss + 1;
      document.querySelector(".miss").textContent = "miss: " + miss;
      slopok();
    });
    setInterval(slopok, time);
  });