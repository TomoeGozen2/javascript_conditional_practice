let shopping_list = [];
let item_input = document.getElementById('item_input');
let add_button = document.getElementById('add_button');
let html_list = document.getElementById('html_list');
let delete_button = document.getElementById('delete_button');
// console.log(item_input.value);

function add_item(){
    let user_input = item_input.value;
    let new_item = document.createElement("li");
     new_item.innerText = user_input;
     html_list.appendChild(new_item);
   
    shopping_list.push(new_item.innerText);
    console.log(shopping_list);


}
function remove_last_item(){
    
    shopping_list.pop();
    
}

function display_list(){
    console.log(shopping_list);
}

add_button.addEventListener("click", add_item);
delete_button.addEventListener("click", remove_last_item);