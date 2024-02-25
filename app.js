// var colElements = document.querySelectorAll('#food_loop');

rawData.forEach(element => { 
    document.getElementById("id_data").textContent = element.id;
    document.getElementById("name_data").textContent = element.name;
    document.getElementById("desc_data").textContent = element.description;
    document.getElementById("location_data").textContent = element.location;
    document.getElementById("habitat_data").textContent = element.habitat;
    document.getElementById("jumprange_data").textContent = element.jumprange;
    document.getElementById("runningspeed_data").textContent = element.runningspeed;

    var colElements = document.querySelectorAll('#food_loop');
    colElements.forEach(function (colElement, index) {
        var nameElement = colElement.querySelector('#title_data_1');
        nameElement.textContent = element.food[index].title;

        var nameElement = colElement.querySelector('#img_data_1');
        nameElement.src = element.food[index].img;
    });

    var colElements_ = document.querySelectorAll('#loop_img_main');
    colElements_.forEach(function (colElement, index) { 

        var nameElement = colElement.querySelector('#img_main_1');
        nameElement.src = element.imgmain[index].img;
    }); 


});



// var colElements = document.getElementsByClassName('row');

// // Loop through the elements
// for (var i = 0; i < colElements.length; i++) {
//     var colElement = colElements[i];

//     // Do something with each row element
//     console.log('Row ' + (i + 1));

//     // Example: Access child elements and their content
//     var childParagraphs = colElement.getElementsByTagName('p');
//     for (var j = 0; j < childParagraphs.length; j++) {
//         console.log('  - ' + childParagraphs[j].textContent);
//     }

//     // Perform other actions as needed
// }