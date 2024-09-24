const D = document;

const setArea = D.querySelector('#setArea'),
      getArea = D.querySelector('#getArea'),
      res = D.querySelector('#result');

function getResult() {

    let value = setArea.value

    const makeEm = value.replace(/((?!1px)\d+px?(\s+||$))+/g, (match) => {
        const findPx = match.match(/\d+/g)

        return `em(${findPx.join(' ')}, $fz)`;
    });

    getArea.innerHTML = makeEm

}



res.addEventListener('click', getResult)


