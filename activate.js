setInterval(function () {
    if (/https:\/\/.*\.okta\.com\/activate/.test(window.location.href)) {
        const button = document.querySelector('input[type="submit"]')
        const label = document.querySelector(".okta-form-title")
        if (button) {
            if (button.value == 'Next') {
                console.log("Button clicked")
                button.click();
            }
        }
        if (label) {
            if (label.innerText == "Device activated") {
                setTimeout(function () {
                    console.log("Label found")
                    chrome.runtime.sendMessage({}, function () { })
                }, 1000)
            }
        }
    }
}, 1000);