const D = document;

const setArea = D.querySelector('#setArea'),
      getArea = D.querySelector('#getArea'),
      res = D.querySelector('#result');


function getResult() {
    let value = setArea.value

    const makeEm = value.replace(/(\d+px?(\s+|;|$))+/g, (match) => {
        const findPx = match.match(/\d+/g)
        return `em(${findPx.join(' ')}, $fz);`;
    });

    console.log(makeEm)

    getArea.innerHTML = makeEm
}




res.addEventListener('click', getResult)


