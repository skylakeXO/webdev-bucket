const yes = document.querySelector('#yesBtn'); 
const no = document.querySelector('#noBtn'); 

// yes.onclick = function () {
//     alert('YES!');
// }
// no.onclick = function () {
//     alert('NO!');
// }

yes.addEventListener('click', function() {
    alert('YES!');
});
no.addEventListener('click', function() {
    alert('No!');
});