addEventListener('message', e => {
    for (let i = e.data.offset; i < 1254; i+=e.data.step) {
        fetch(`https://poetry-${e.data.cdn}.cdn.iisjy.cn/${i.toString()}.json`)
            .then(resp => resp.json())
            .then(poetryObj => self.postMessage(poetryObj))
            .catch(e => console.log(i.toString()+':'+e));
    }
}, false);
