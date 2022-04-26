
function show_submenu(id)
{
    var li = document.getElementById(id); 
    let children_lenght = li.children.length;
    let children_height = li.children[0].clientHeight;
    let submenu_height = children_lenght * children_height + 5;

    li.style.height = submenu_height + 'px';
}

function close_submenu(id)
{
    var li = document.getElementById(id);
    // li.style.transitionDuration = '0.5s';
    li.style.height = 0;
}