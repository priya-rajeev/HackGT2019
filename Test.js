var fancyText = document.getElementById('hacker');
var intervalTime = 150;
var initialPause = 500;
var callbackPause = 500;

function deleteContent(callback) {

    var intervalId = setInterval(function() {
        if (fancyText.innerHTML.length == 0) {
            clearInterval(intervalId);

            if (callback) {
                setTimeout(callback, callbackPause);
            }
        }

        fancyText.innerHTML = fancyText.innerHTML.substring(0, fancyText.innerHTML.length - 1);
    }, intervalTime);
}

function addContent(contentToAdd, callback) {
    var currentIndex = 0;

    var intervalId = setInterval(function() {
        if (currentIndex == contentToAdd.length) {
            clearInterval(intervalId);

            if (callback) {
                setTimeout(callback, callbackPause);
            }
        }

        fancyText.innerHTML = contentToAdd.substring(0, currentIndex);
        currentIndex++;
    }, intervalTime);
}

setTimeout(function() {
    deleteContent(function() {
        addContent("HackGTeeny WorkShop", function() {
            deleteContent(function() {
                addContent("Pikachu fan site", function() {
                    deleteContent(function() {
                        addContent("Web Dev 101 Course");
                    })
                });
            });
        });
    });
}, initialPause);

function passWord() {
    var testV = 1;
    var pass1 = prompt('Please Enter Admin Password','');
    while (testV < 3) {
        if (!pass1)
            history.go(-1);
        if (pass1.toLowerCase() == "90") {
            alert('You Got it Right!');
            window.open("google.com")
        // <A HREF ="PassProtected.html">NorthAvenueAdmin</A>
            break;
        }
        testV+=1;
        var pass1 =
            prompt('Access Denied - Password Incorrect, Please Try Again.','Password');
    }
    if (pass1.toLowerCase()!="password" & testV ==3)
        history.go(-1);
    return " ";
}
