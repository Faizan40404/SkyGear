let count = 0;
let ordered = 0;
function details() {
    let name = prompt('Enter your name:');
    let phone = prompt('Enter your phone number:');
    let date = prompt('Enter the desired date:');
    let city = prompt('Enter your city:');

    if (!name || !phone || !date || !city) {
        alert('Information is not sufficient! No car scheduled this this time.');
    }
    else {
        alert('Dear ' + name + ', the test drive is scheduled on ' + date + ' in ' + city + '. The track for the drive will be told to you on ' + phone + ' 1 day before the drive.');
        count++;
    }
    alert(count + ' cars have been scheduled for test drive.');
}
function order() {
    let name = prompt('Enter your name:');
    let account = prompt('Enter your bank account number:');
    let address = prompt('Enter address:');
    let choose = prompt('Do you really wanna by this Car? Press cancel if you changed your mind.');

    if (!name || !account || !address)
        alert('Information is not sufficient! No car scheduled this this time.');
    else if (!choose)
        alert('You have missed an opportunity. But we give chances even though life does not.');
    else {
        alert('Dear ' + name + ' the car will be delivered at ' + address + ' in 2 days!');
        ordered++;
    }
    alert(ordered + ' cars have been ordered.');
}

