// Selecting Elements by ID
    // 1. cache element in a variable
    // 2. select document then get element by id method
    // 3. in quotes write the id your are searching for
    let firstName = document.getElementById(`name`)

    //Changed the TEXT node inside of the heading element
    firstName.innerText = 'Michelle'
    // console.log(firstName)

// Selecting elements by name - selects ALL elements with matchin name attribute. returs nodeList
    // 1. cache element into a variable
    // 2. select document then use method
    // 3. in quotes write name you are looking for
    let listItems = document.getElementsByName(`li`)
    listItems[1].innerText = 'More horses' //html collection - can live update as the webpage changes
    // console.log(listItems[1])

// Selecting elements by css selector -selects by ANY css selector and only selects FIRST matching item
    // 1. cache element into a cariable
    // 2. select document and thne use method
    // 3. in quotes write the css selector you are looking for
    let newItems = document.querySelectorAll('.listItems')
    newItems[0].innerText = 'All of them Horsies'

    // newItems.forEach(el => el.innerText = 'All them Horsies')
    console.log(newItems) //nodelist once it is collected can never change


// We can navigate from one node to another in JS using the parent/child relationship
    // .parentNode
    // .childNodes
    // .nextElementSiblings

    let list = document.getElementsByTagName(`ul`)
    console.log(list)  //list witll consolelog a html collection (array like object) with all instances of ul in our document


    for( let item of list){
        console.log(item)
    }