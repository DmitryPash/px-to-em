(() => {
    const D = document;

    const setArea = D.querySelector('#setArea'),
          getArea = D.querySelector('#getArea'),
          res = D.querySelector('#result');


    const translate = () => {
        const result = setArea.value.replace(/((?!1px)\d+(\.\d+)?px?(\s+||$))+/g, (match) => {

            const PX = match.match(/\d+(\.\d+)?/g)

            return `em(${PX.join(' ')}, $fz)`;

        }).replace(/font-size: em\((\d+),\s*\$fz\)/g, (match) => {

            const NUM = match.match(/\d+/g)

            return ` $fz: ${NUM};
                font-size: em($fz, $fz_base)`

        }).replace(/\$fz\)(?!;)+/g, '$fz) ');

        getArea.innerHTML = result
    }


    res.addEventListener('click', translate)
})()
