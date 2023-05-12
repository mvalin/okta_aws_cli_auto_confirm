setTimeout(function () {
    if (/https:\/\/.*\.okta\.com\/activate/.test(window.location.href)) {
        const button = document.querySelector('input[type="submit"]')
        if (button) {
            button.click();
            setTimeout(function () {
                chrome.runtime.sendMessage({}, function () { })
            }, 1000)
        }
    }
}, 1000);