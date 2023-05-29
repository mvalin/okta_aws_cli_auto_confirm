setTimeout(function () {
    if (/https:\/\/.*\.okta\.com\/activate/.test(window.location.href)) {
        const button = document.querySelector('input[type="submit"]')
        const label = document.querySelector(".okta-form-title")
        if (button) {
            button.click();
        }
        if (label) {
            if (label.innerText == "Device activated") {
                setTimeout(function () {
                    chrome.runtime.sendMessage({}, function () { })
                }, 1000)
            }
        }
    }
}, 1000);