
function characterCounter(event) {
    let characterInput = event.target.value.length;
    let characterCount = 60 - characterInput;
    document.querySelector('.character-count').innerText = characterCount;
    if (characterCount === 0) {
        document.querySelector('.character-count').classList.add('error');
        document.getElementById('product-name').classList.add('error');
    } else if (characterCount <= 10) {
        document.querySelector('.character-count').classList.add('warning');
        document.getElementById('product-name').classList.add('warning');
        document.querySelector('.character-count').classList.remove('error');
        document.getElementById('product-name').classList.remove('error');
    } 
    else {
        document.querySelector('.character-count').classList.remove('warning');
        document.getElementById('product-name').classList.remove('warning');
        
    }
}

document.querySelector('#product-name').addEventListener('input', characterCounter);