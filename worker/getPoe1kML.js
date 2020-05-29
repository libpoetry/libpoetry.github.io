const getPoeML = poetryObj => {
    let mlStr = "";
    poetryObj.forEach(elem => {mlStr+=`<div class="cardBox"><div class="headerBox"><p name="gs-id" style="display: none;">${elem.id}</p><p name="gs-title">${elem.title}</p><p><span name="gs-dynasty">${elem.dynasty}</span>：<a name="gs-author" href="" class="headerBox-label">${elem.author}</a></p></div><div class="bodyBox" name="gs-text">${elem.text}</div></div>`});
    self.postMessage(mlStr);
}

addEventListener('message', e => getPoeML(e.data), false);