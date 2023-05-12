setTimeout(function () {
    if (window.location.href.indexOf("sysdig.okta.com") !== -1) {
        const button = document.querySelector('input[type="submit"]')
        if (button) {
            button.click();
            setTimeout(function () {
                chrome.runtime.sendMessage({}, function () { })
            }, 1000)
        }
    }
}, 1000);
