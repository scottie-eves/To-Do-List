function newItem() {

    let inputValue = $('#input').val();
    let li = $('<li></li>');
    li.append(inputValue);

    if(inputValue === '') {
        alert('Please fill out the list item field');
    } else {
        $('#list').append(li);
    }

    li.on('dblclick', function() {
        li.toggleClass('strike');
    });

    let crossOutButton = $('<crossOutButton></crossOutButton>');
    crossOutButton.append(document.createTextNode('X'));
    li.append(crossOutButton);

    crossOutButton.on('click', deleteListItem);
    function deleteListItem() {
        li.addClass('delete');
    }

    $('#list').sortable();

}