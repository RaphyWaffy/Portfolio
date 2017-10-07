var pcontent = [{
  text: "Wordpress site for a personal trainer."
}, {
  text: "Tribue Page to a Chinese great general."
}, {
  text: "Displays a quote amongst a slection. Can also send a qquote as a tweet."
}, {
  text: "Search wikipedia for anything you want and links to relevent articles."
}, {
  text: "Api diplaying who amongst a selction of streamers is online. "
}, {
  text: "App showing the weather in cureent location."
}, {
  text: "Functioning calculator"
}];

console.log(pcontent[2].text);
$(document).ready(function() {

  $("#pjl > div  > a > div").mouseenter(function() {
    str = this.className
    i = str.charAt(str.length - 1)
    $(this).css("opacity", "0.6");
    $(this).html("<div class='project-text'><p class='project-text'>" + pcontent[i].text + "</p></div>");
  })
    $("#pjl > div  > a > div").mouseleave(function() {
          $(".project-text").remove();
    $(this).css("opacity", "1");

  })

});
