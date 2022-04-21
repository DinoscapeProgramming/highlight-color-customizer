document.addEventListener('DOMContentLoaded', function () {
    var options = {
        colors: [
            "backgroundColor",
            "textColor"
        ],
        other: [
            "status"
        ]
    }
    chrome.storage.sync.get(options.colors.concat(options.other), function (storage) {
        if (storage[options.colors[0]]) {
            document.getElementById(options.colors[0]).value = storage[options.colors[0]];
        }
        if (storage[options.colors[1]]) {
            document.getElementById(options.colors[1]).value = storage[options.colors[1]];
        }
        if (storage[options.other[0]] === "enabled") {
            document.getElementById('checkbox').setAttribute('checked', '')
        }
    })
    document.getElementById('checkbox').addEventListener('change', function (event) {
        if (event.currentTarget.checked) {
            chrome.storage.sync.set({ "status": "enabled" })
        } else {
            chrome.storage.sync.set({ "status": "disabled" })
        }
    })
    document.getElementById('save').addEventListener('click', function () {
        if (document.getElementById(options.colors[0]).value) {
            chrome.storage.sync.set({ [options.colors[0]]: document.getElementById(options.colors[0]).value })
        }
        if (document.getElementById(options.colors[1]).value) {
            chrome.storage.sync.set({ [options.colors[1]]: document.getElementById(options.colors[1]).value })
        }
    }, false)
    document.getElementById('reset').addEventListener('click', function () {
        chrome.storage.sync.set({ [options.other[0]]: "disabled" }, function () {
            document.getElementById('checkbox').checked = false;
            chrome.storage.sync.remove(options.colors, function () {
                document.getElementById(options.colors[0]).value = "#3390ff";
                document.getElementById(options.colors[1]).value = "#ffffff";
            });
        })
    }, false)
}, false)