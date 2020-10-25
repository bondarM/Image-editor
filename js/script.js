const input = document.querySelector("input[type='file']"),
    output = document.getElementById('list');



function handleFileSelect(evt) {
    let files = evt.target.files;

    for (let i = 0, f; f = files[i]; i++) {
        if (!f.type.match('image.*')) {
            continue;
        }

        let reader = new FileReader();
        reader.onload = (function (theFile) {
            return function (e) {

                let span = document.createElement('span');
                span.innerHTML = [`<img class="image" src= ${e.target.result}
                     title= ${escape(theFile.name)}/>`].join('');
                output.insertBefore(span, null);

                const butBlock = document.querySelector('.but__block');
                butBlock.style.display = "flex";


            };
        })(f);

        reader.readAsDataURL(f);
    }
}

document.getElementById('files').addEventListener('change', handleFileSelect, false);



function makeGreyScale() {
    const img = document.querySelectorAll('img');
    img.forEach(el => {
        el.className = '';
        el.classList.add('chb', 'image')
    })
}

function makeIvert() {
    const img = document.querySelectorAll('img');
    img.forEach(el => {
        el.className = '';
        el.classList.add('ivert', 'image')
    })
}

function makeSepia() {
    const img = document.querySelectorAll('img');
    img.forEach(el => {
        el.className = '';
        el.classList.add('sepia', 'image')
    })
}

function makeFilter() {
    const img = document.querySelectorAll('img');
    img.forEach(el => {
        el.className = '';
        el.classList.add('filter', 'image')
    })
}



function changeHeight() {
    const img = document.querySelectorAll('img');
    const inp = document.querySelector('.input__height').value
    img.forEach(el => {
        const height = inp + "px"
        el.style.height = height;
    })
}

function changeWidth() {
    const img = document.querySelectorAll('img');
    const inp = document.querySelector('.input__width').value
    img.forEach(el => {
        const width = inp + "px"
        el.style.width = width;
    })
}


function clearFilters() {
    const img = document.querySelectorAll('img');
    img.forEach(el => {
        el.className = '';
    el.classList.add('image')

    })
}





