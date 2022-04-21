var options = {
    storage: [
        "backgroundColor",
        "textColor",
        "status"
    ]
}

chrome.storage.sync.get(options.storage, function (storage) {
    if (storage[options.storage[2]] === "enabled") {
        if (storage[options.storage[0]] && storage[options.storage[1]]) {
            var element = document.createElement('style');
            element.innerHTML='::selection{background:' + storage[options.storage[0]] + ';color:' + storage[options.storage[1]] + ';}';
            document.head.appendChild(element);
        } else if (storage[options.storage[0]]) {
            var element = document.createElement('style');
            element.innerHTML='::selection{background:' + storage[options.storage[0]] + ';}';
            document.head.appendChild(element);
        } else if (storage[options.storage[1]]) {
            var element = document.createElement('style');
            element.innerHTML='::selection{color:' + storage[options.storage[1]] + ';}';
            document.head.appendChild(element);
        }
    }
})