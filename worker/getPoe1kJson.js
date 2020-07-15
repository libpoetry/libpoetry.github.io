const vers = "v1.1.2"
addEventListener('message', e => {
    for (let i = e.data.offset; i < 126; i+=e.data.step) {
        fetch(`https://cdn.jsdelivr.net/gh/libpoetry/data@${vers}/grouped/${i.toString()}.json`)
            .then(resp => resp.json())
            .then(obj =>{
                let mlStr = "";
                obj.forEach(elem => {mlStr+=`<div class="cardBox"><div class="headerBox"><p name="gs-id" style="display: none;">${elem.id}</p><p name="gs-title">${elem.title}</p><p><span name="gs-dynasty">${elem.dynasty}</span>：<a name="gs-author" href="" class="headerBox-label">${elem.author}</a></p></div><div class="bodyBox" name="gs-text">${elem.text}</div></div>`});
                self.postMessage(mlStr);
            })
            // .then(poetryObj => self.postMessage(poetryObj))
            .catch(e => console.log(i.toString()+':'+e));
    }
}, false);
