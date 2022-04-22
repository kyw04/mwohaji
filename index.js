
function show_submenu(index)
{
    var li = document.getElementById("submenu"); //[index];
    let children_lenght = li.children.length;
    let children_height = li.children[0].clientHeight;
    var height = children_lenght * children_height;
    

    li.style.height = height.toString();
    li.style.lineHeight = 1;

    console.log(li.style);
    console.log(children_lenght);
    console.log(children_height);
}