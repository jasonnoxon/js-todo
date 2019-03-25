var newItemInput = $("#new-item");
var newItem = newItemInput.val();
var addButton = $("#add-button");
var todoList = $("#todo-list");

newItemInput.on("input", function(){
  newItem = $(this).val();
});

addButton.on("click", function() {
  if(newItem != '') {
    var newTodoListItem = `<li class="todo-list-item"><input type="checkbox">&nbsp;${newItem}</li>`;

    todoList.append(newTodoListItem);
    newItemInput.val('');
    newItem = '';
  }
});

$(document).on('click', '.todo-list-item input[type="checkbox"]', function(){
  $(this).parent()
         .css('text-decoration', 'line-through')
         .animate({ opacity: 0}, "slow", function(){
           $(this).remove();
         });
})
