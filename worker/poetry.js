var poe = [];

function pppoe(msg){
    switch (msg.i) {
        case 'add':
            poe.concat(msg.p)
            break;
    }
}

addEventListener('message', e => pppoe(e.data), false);