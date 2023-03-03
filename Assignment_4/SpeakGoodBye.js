(function (window) {
var speakWord = "Good Bye";
var byeSpeaker = {
  spek: function (name){
    console.log(speakWord + " " + name);
  }
};
window.byeSpeaker = byeSpeaker;
}(window);