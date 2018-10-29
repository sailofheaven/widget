

function drawLine(elem, c) {
    const lineDiv = document.createElement('div');
    lineDiv.style.background = '#fff';
    lineDiv.style.overflow = 'hidden';
    lineDiv.style.fontSize = '14px;'
    lineDiv.style.color = '#000';
    lineDiv.style.fontWeight = '700';
    lineDiv.style.lineHeight = '36px';
    lineDiv.style.padding = '0 10px 0 10px';
    lineDiv.style.border = '1px solid #ccc';
    lineDiv.style.borderTop = 'none';

    const titleDiv = document.createElement('div');
    titleDiv.style.float = 'left';

    const iconImg = document.createElement('img');
    iconImg.src = elem.icon;
    iconImg.style.width = '20px';
    iconImg.style.height = '20px';
    iconImg.style.marginRight = '10px';
    iconImg.style.verticalAlign = 'middle';
    titleDiv.appendChild(iconImg);

    const symbolDiv = document.createElement('span');
    symbolDiv.style.display = 'inline-block';
    symbolDiv.style.verticalAlign = 'middle';
    symbolDiv.innerText = elem.symbol;
    titleDiv.appendChild(symbolDiv);

    lineDiv.appendChild(titleDiv);

    const priceDiv = document.createElement('div');
    priceDiv.style.float = 'right';
    priceDiv.style.lineHeight = '35px';
    priceDiv.style.fontWeight = 'bold';
    priceDiv.innerText = elem['price' + c].toLocaleString('en-US', { style: 'currency', currency: c })

    lineDiv.appendChild(priceDiv)

    return lineDiv;


}

export function draw(result, _id, config) {
    let i = config.num;
    let data = result.data.slice(0)

    const container = document.getElementById(_id);
    container.innerHTML = '';
    container.style.width = config.width + "px";

    const headerDiv = document.createElement('div');
    headerDiv.style.backgroundColor = '#337ab7';
    headerDiv.style.borderRadius = '4px 4px 0 0';
    headerDiv.style.textAlign = 'center';
    headerDiv.style.lineHeight = '37px';
    headerDiv.style.color = '#fff';
    headerDiv.innerText = 'TOP';

    const contextDiv = document.createElement('div');
    while (i--) {
        contextDiv.appendChild(drawLine(data.shift(), config.currency));

    }

    container.appendChild(headerDiv);
    container.appendChild(contextDiv);

}


export function createWidget(config) {
    let _id = 'cWidget' + (+new Date()).toString(36);

    while (document.getElementById(_id)) _id = _id + '0';
    document.write(`<div id="${_id}"></div>`);

    const xhr = new XMLHttpRequest();
    xhr.open('GET', `https://tstapi.cryptorank.io/v0/coins?limit=${config.num}`, true);
    xhr.send();
    xhr.onreadystatechange = function () {
        if (this.readyState !== 4 || this.status !== 200) return;
        draw(JSON.parse(this.responseText), _id, config);
    }
}

export function getCode() {
    return (
        `(function (config) {
        ${draw + drawLine + createWidget}
        createWidget(config);
    })`)
}