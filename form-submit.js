var form = document.querySelector("#contact-form");
            
// async function handleSubmit(event) {
//     console.log('HANDLE SUBMIT CLICKED', event);
//     event.preventDefault();
//     var status = document.querySelector("#form-status");
//     var data = new FormData(event.target);
//     fetch(event.target.action, {
//     method: form.method,
//     body: data,
//     headers: {
//         'Accept': 'application/json'
//     }
//     }).then(response => {
//         status.innerHTML = "Thanks for your submission!";
//         form.reset()
//     }).catch(error => {
//         status.innerHTML = "Oops! There was a problem submitting your form"
//     });
// }
// form.addEventListener("submit", handleSubmit)

form.addEventListener("submit", async event => {
    console.log('HANDLE SUBMIT CLICKED');
    event.preventDefault();
    var status = document.querySelector("#form-status");
    var data = new FormData(event.target);
    fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
        'Accept': 'application/json'
    }
    }).then(response => {
        status.innerHTML = "Thanks for your submission!";
        form.reset()
    }).catch(error => {
        status.innerHTML = "Oops! There was a problem submitting your form"
    });
})