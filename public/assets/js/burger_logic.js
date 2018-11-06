// event listeners
$('.eat-burger-btn').click(function(evt) {
    
    // grab the burger id
    const id = $(this).data('id')

    // change the burger to devoured in the database
    $.ajax({
        method: 'POST',
        url: '/update-burger',
        data: {
            id,
            devoured: true
        }
    }).then(data => {
        console.log(data)

        // copy the container to post later
        const con = $(`#burger-${id}-container`)
        $(`#burger-${id}-container`).remove()
        $('#eaten-burgers').append(con)

        

    })

})