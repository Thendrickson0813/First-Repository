"use strict";

/*------------button 1 and function-----------*/
document.getElementById("button1").addEventListener("click", secondName);

var myArray = ["Tim", "Phillip", "Frank", "krytina"];

function secondName() {
        console.log(myArray[1]);
    }
    /*---------button2 and function--------------*/
document.getElementById("button2").addEventListener("click", numbers);

function numbers() {
    for (
        var i = 1; i < 11; i++)
        console.log(i);
}

/**------------button 3 an function-----------*/
document.getElementById("button3").addEventListener("click", names);

function names() {
        for (var i = 0; i < myArray.length; i++)
            console.log(myArray[i]);
    }
    /*-------------button 4 and function-------------*/
document.getElementById("button4").addEventListener("click", oneName);

function oneName() {

    for (var oneLetter = 0; oneLetter < myArray.length; oneLetter++) {

        if (myArray[oneLetter].indexOf('P') == 0) {

            console.log(myArray[oneLetter]);

        }

    }
}

document.getElementById("button5").addEventListener("click", car);


function car() {
    var car = {
        doors: 4,
        honk: function() {
            console.log('Honk');
        }
    };
    car.honk();
}