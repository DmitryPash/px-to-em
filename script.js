const D = document;

const setArea = D.querySelector('#setArea'),
      getArea = D.querySelector('#getArea'),
      res = D.querySelector('#result');

function getResult() {
    let value = setArea.value
    let result = '';

    const makeEm = value.replace(/((?!1px)\d+(\.\d+)?px?(\s+||$))+/g, (match) => {
        
        const findPx = match.match(/\d+(\.\d+)?/g)

        return `em(${findPx.join(' ')}, $fz)`;
    });


    const doFz = makeEm.replace(/font-size: em\((\d+),\s*\$fz\)/g, (match) => {

        const findNumber = match.match(/\d+/g)

        return ` $fz: ${findNumber};
            font-size: em($fz, $fz_base)`
    })


    const doSpace = doFz.replace(/\$fz\)(?!;)+/g, '$fz) ')


    result = doSpace

    getArea.innerHTML = result
}



res.addEventListener('click', getResult)
