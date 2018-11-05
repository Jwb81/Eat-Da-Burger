() => {



    // event listeners
    $('.eat-burger-btn').on('click', () => {
        const id = $(this).data('burger-id')

        console.log(id)
    })
}