const render = function (data) {

    const source = $('#people-template').html()
    const template = Handlebars.compile(source)
    const contact = template({ people: data })
    $('#usersContainer').append(contact)

}


const getData = function (data) {

    const newData = data.results.map(user => {
        return {
            name: user.name,
            email: user.email,
            id: user.id
        }
    })
    render(newData)

}

$.ajax({
    url: 'https://randomuser.me/api/?results=100',
    dataType: 'json',
    success: getData,
    error: function (xhr, text, error) {

    }
});
