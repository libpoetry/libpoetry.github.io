var sleep = ms => new Promise((resolve) => setTimeout(resolve, ms));
async function getPoetry(nu) {
    for (var i = nu; i < 400000; i+=4) {
        fetch(`https://poetry-${nu.toString()}.cdn.iisjy.cn/by-id/${i.toString()}.json`)
            .then(resp => resp.json())
            .then(poetryObj =>self.postMessage(`<div class="cardBox"><div class="headerBox" style="background-color: #4caf50;"><p name="gs-id" style="display: none;">${poetryObj.id}</p><p name="gs-title">${poetryObj.title}</p><p><span name="gs-dynasty">${poetryObj.dynasty}</span>：<a name="gs-author" href="" class="label headerBox-label">${poetryObj.author}</a></p></div><div class="bodyBox" name="gs-text">${poetryObj.text}</div></div>`))
            .catch(e=>console.log(e));
        var temple = await sleep(15);
    }
}
addEventListener('message', e=>getPoetry(e.data), false);