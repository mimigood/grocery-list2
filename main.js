//get elements from html
var button = $("button");
var input = $("input");
var clear = $(".clear");

//lsiten for events from user
button.on("click", appendInfo);
clear.on("click", clearAll);

// declare functions needed for event listeners (event handlers)
function appendInfo(){
  var infoContainer = $(".to-do-container");
  infoContainer.append(`
    <div class ="info-todo"
      <p> ${input.val()}</p>
      <button class="delete"> Delete </button>

    </div>`);
  $(".info-todo").on("click", ".delete", deleteToDo);

  // when the div exists, listen for a click on delete button and call deleteToDo function
}

function deleteToDo(event){
  event.target.parentNode.remove();
  // where event was heard, target that element, find its parent, and delete that div
}

function clearAll(){
  $(".to-do-container").remove();
}
