
function characterCounter(event) {
    let characterInput = event.target.value.length;
    let characterCount = 60 - characterInput;
    document.querySelector('.character-count').innerText = characterCount;
    
}

document.querySelector('#product-name').addEventListener('input', characterCounter);