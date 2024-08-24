function myfun() {
    var name = document.getElementById('in-1').value;
    var lname = document.getElementById('in-2').value;
    if (name == "") {
        alert('Enter Your name.');
    }
    else if (name.length <= 2) {
        alert('Minimum character lenght is 3.');
    }
    else if (!isNaN(name)) {
        alert('Number is not allowed.');
    }
    else if (lname == "") {
        alert('Enter Your lover name.');
    }
    else if (lname.length <= 2) {
        alert('Minimum character lenght is 3.');
    }
    else if (!isNaN(lname)) {
        alert('Number is not allowed.');
    }

    else {
        var s = Math.random() * 100;
        s = Math.floor(s);
        document.getElementById('ans').value = s+"%";
    

    }
}
