// const sleep = ms => new Promise((resolve) => setTimeout(resolve, ms));
async function getPoeJson(nu) {
    for (let i = 0; i < 400; i++) {
        // fetch(`https://poetry-${(nu % 4).toString()}.cdn.iisjy.cn/by-id/${i.toString()}.json`)
        fetch(`https://libpoetry.github.io/data/poe1k/${i.toString()}.json`)
            .then(resp => resp.json())
            .then(poetryObj => self.postMessage(poetryObj))
            .catch(e => console.log(i.toString()+':'+e));
    }
}

addEventListener('message', e => getPoeJson(e.data), false);

