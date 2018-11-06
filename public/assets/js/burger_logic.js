// event listeners
$('.eat-burger-btn').click(function (evt) {

    // grab the burger id
    const id = $(this).data('id')

    // change the burger to devoured in the database
    $.ajax({
        method: 'PUT',
        url: '/burger',
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

$('#submit-order').click(function () {
    // grab the name of the burger
    const burgerName = $('#new-burger').val()

    // add the burger to the database
    $.ajax({
        method: 'POST',
        url: '/burger',
        data: {
            name: burgerName
        }
    }).then(data => {
        if (data.success) {
            const insertId = data.insertId

            // create a new burger and add it to the page
            $('<p>')
                .attr('id', `burger-${insertId}-container`)

            $('<span>')
                .attr('id', `burger-${burgerName}-name`)

            $('<button>')
                .addClass('eat-burger-btn')
                .data('id', insertId)
        } else {
            console.log('failed')
        }
    })
})