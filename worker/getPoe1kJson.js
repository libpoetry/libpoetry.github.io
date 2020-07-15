addEventListener('message', e => {
    for (let i = e.data.offset; i < 1254; i+=e.data.step) {
        fetch(`https://cdn.jsdelivr.net/gh/libpoetry/data/poe1k//${i.toString()}.json`)
            .then(resp => resp.json())
            .then(poetryObj => self.postMessage(poetryObj))
            .catch(e => console.log(i.toString()+':'+e));
    }
}, false);
