const sleep = ms => new Promise((resolve) => setTimeout(resolve, ms));
async function getPoetry(nu) {
    for (let i = nu; i < 400000; i += 8) {
        fetch(`https://poetry-${(nu % 4).toString()}.cdn.iisjy.cn/by-id/${i.toString()}.json`)
        // fetch(`https://libpoetry.github.io/data/by-id/${i.toString()}.json`)
            .then(resp => resp.json())
            .then(poetryObj => self.postMessage(`<div class="cardBox"><div class="headerBox"><p name="gs-id" style="display: none;">${poetryObj.id}</p><p name="gs-title">${poetryObj.title}</p><p><span name="gs-dynasty">${poetryObj.dynasty}</span>：<a name="gs-author" href="" class="headerBox-label">${poetryObj.author}</a></p></div><div class="bodyBox" name="gs-text">${poetryObj.text}</div></div>`))
            .catch(e => console.log(i.toString()+':'+e));
        let temple = await sleep(25);
    }
}

addEventListener('message', e => getPoetry(e.data), false);