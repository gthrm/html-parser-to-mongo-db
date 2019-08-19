let data = []
let actualData = []

let dataArray = document.querySelectorAll('.thesis__item-inner');
console.log(dataArray.length);

for (let item of dataArray) {
    let itemObject = {};
    let titleContainer = item.querySelector('.thesis__item-title');
    let titleContainerChilds = titleContainer.childNodes;
    for (let titleChild of titleContainerChilds) {
        // console.log(titleChild.nodeName)
        if (titleChild.nodeName === "A") {
            // console.log(titleChild.innerText);
            itemObject.title = titleChild.innerText
        }
    }

    let textContainer = item.querySelector('.thesis__item-t');
    let textContainerChilds = textContainer.childNodes;
    for (let textChild of textContainerChilds) {
        // console.log(textChild.nodeName)
        if (textChild.nodeName === "P") {
            // console.log(textChild.innerText);
            itemObject.text = textChild.innerText
        }
    }
    data.push(itemObject);
    // console.log(itemObject);
}

for (let i = 0; i < data.length; i++) {
    if (i % 2 === 0) {
        actualData.push(data[i])

        var request = new XMLHttpRequest();

        var body = JSON.stringify({
            title: data[i].title,
            text: data[i].text
        });

        request.open("POST", 'http://localhost:8080/item', true); // server url
        request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
        request.send(body);
    }
}
console.log(actualData);



