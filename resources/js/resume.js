$(document).ready(function() {
  $("#educationContent").hide()
  $("#experienceContent").hide()
  $("#keySkillsContent").hide()
  $("#awardsContent").hide()


  $("#education").on("click", function(){
    $("#educationContent").slideToggle("slow")
  });

  $("#experience").on("click", function(){
    $("#experienceContent").slideToggle("slow")
  });

  $("#keySkills").on("click", function(){
    $("#keySkillsContent").slideToggle("slow")
  });

  $("#awards").on("click", function(){
    $("#awardsContent").slideToggle("slow")
  });


});
