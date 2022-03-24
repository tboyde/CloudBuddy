// function for updating the visitor counter for the website
function updateCounter() {
    fetch('https://api.countapi.xyz/update/cloudbuddyapp/gcpproject/?amount=1')
        .then(res => res.json())
        .then(data => counterElement.innerHTML = data.value)
}

updateCounter()

counterElement = document.getElementsByClassName('count')[0];