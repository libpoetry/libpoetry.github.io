const sleep = ms => new Promise((resolve) => setTimeout(resolve, ms));
async function getPoetry(nu) {
    for (let i = nu.offset; i < 1200000; i += nu.step) {
        fetch(`https://libpoetry.github.io/data/by-id/${i.toString()}.json`)
            .then(resp => resp.json())
            .then(poetryObj => self.postMessage(`<div class="cardBox"><div class="headerBox"><p name="gs-id" style="display: none;">${poetryObj.id}</p><p name="gs-title">${poetryObj.title}</p><p><span name="gs-dynasty">${poetryObj.dynasty}</span>：<a name="gs-author" href="" class="headerBox-label">${poetryObj.author}</a></p></div><div class="bodyBox" name="gs-text">${poetryObj.text}</div></div>`))
            .catch(e => console.log(i.toString()+':'+e));
        // let temple = 
        await sleep(1000);
    }
}

addEventListener('message', e => getPoetry(e.data), false);