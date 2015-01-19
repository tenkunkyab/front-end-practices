$(function() {
  var proj_name = "";
  var proj_list_dump = document.getElementById("proj_list");
  var proj_title = document.getElementById("proj_title");
  
  // function to re_initialize the droppable feature on all the projects
  function re_init(){

    $( ".proj-item ol" ).droppable({
      activeClass: "drop-me-here",
      hoverClass: "drop-me-hover",
      accept: ":not(.ui-sortable-helper)",
      drop: function( event, ui ) {
        $( this ).find( ".placeholder" ).remove();
        $( "<li></li>" ).text( ui.draggable.text() ).appendTo( this );
      }
    });
    
  }

  // onclick function when new Project is added
  $("#proj-add").click(function(){

    proj_title.style.display = 'block';

  });

  $('#proj_title').bind("enterKey",function(e){
    // create DOM content on Enter keyed

    proj_name = proj_title.value;
    
    var text_dump = "<div class='proj-item' class='project-items'><h1 class='lead'>" + proj_name + "</h1><div class='tete'>Team<ol><li class='placeholder'>Add Team Mates </li></ol></div></div>";  
    // dump the text_dump in project list with the title
    proj_list_dump.innerHTML += text_dump;
    
    // reset the value of the textbox and hide the textbox
    proj_title.value = "";
    proj_title.style.display = 'none';

    // call the re_init function to get the droppable feature on the newly created project
    re_init();
  });

  $('#proj_title').keyup(function(e){
    if(e.keyCode == 13){

      $(this).trigger("enterKey");

    }
  });
  
  // make all the team members draggable
  $("#team-member-1").draggable({
    appendTo: "section",
    helper: "clone"
    });
  $("#team-member-2").draggable({
    appendTo: "section",
    helper: "clone"
    });
  $("#team-member-3").draggable({
    appendTo: "section",
    helper: "clone"
    });
  $("#team-member-4").draggable({
    appendTo: "section",
    helper: "clone"
    });

  
  re_init();

  // sortable project titles
  $("#proj_list").sortable({
    revert : "true",
  });
});