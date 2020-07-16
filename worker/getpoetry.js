const sleep = ms => new Promise((resolve) => setTimeout(resolve, ms));
const vers = "v1.1.2"
async function getPoetry(nu) {
    for (let i = nu.offset; i < 1200000; i += nu.step) {
        fetch(`https://cdn.jsdelivr.net/gh/libpoetry/data@${vers}/poetry/${i.toString()}.json`)
            .then(resp => resp.json())
            .then(poetryObj => self.postMessage(poetryObj))
            .catch(e => console.log(i.toString()+':'+e));
        await sleep(1000);
    }
}

addEventListener('message', e => getPoetry(e.data), false);