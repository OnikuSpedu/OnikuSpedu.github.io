const nameElem = document.querySelector('#name')

const myName = 'Shadman Rakib'

const animateName = (name, elem) => {
    let displayedChars = 0;

    const addLetter = setInterval(() => {
        if (displayedChars == name.length) {
            elem.innerHTML = elem.innerHTML.slice(0, -1)
            clearInterval(addLetter)
        } else {
            const underscore = setTimeout(() => {
                elem.innerHTML = name.slice(0, displayedChars + 1)+ "_";
                clearTimeout(underscore);
            }, 60);   

            elem.innerHTML = name.slice(0, displayedChars + 1)+ "|";
        
            displayedChars++;
        }
    }, 100);
}

animateName(myName, nameElem)