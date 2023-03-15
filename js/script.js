
function characterCounter(event) {
    let characterInput = document.querySelector('#product-name').value.length;
    let characterCount = 60 - characterInput;
    // console.log(characterCount);
    document.querySelector('.character-count').innerText = characterCount;
    
}

document.querySelector('#product-name').addEventListener('input', characterCounter);