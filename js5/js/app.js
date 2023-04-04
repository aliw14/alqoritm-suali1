//enkicik element tapilmasi
function enkicikelement(arr) {

    var enkicikelement = arr[0];

    for (i = 1; i < arr.length; i++) {

        if (arr[i] < enkicikelement) {
            enkicikelement = arr[i];
        }
    }
    console.log(enkicikelement);
}

var arr = [3, 1, 4, 2,];

enkicikelement(arr);

//palindrome

function myfunc(palindrome) {
    if (typeof (palindrome) === "string") {

        for (i = 0; i < palindrome.length; i++) {

            if (palindrome[i] != palindrome[palindrome.length - 1 - i]) {

                console.log("palindrome deyil");
                break;
            }

            else {
                console.log("palindromdur");
            }
        }
    }

}
myfunc("avva")


//eyni herfleri tapmaq


var duplicate = function (tekrar) {

    for (var i = 0; i <= tekrar.length; i++) {
        var j = i + 1

        for (j; j <= tekrar.length; j++) {

            if (tekrar[j] == tekrar[i]) {
                console.log(tekrar[i]);
            }
        }
    }
}

duplicate('avva')

