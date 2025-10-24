setInterval(function () {
    if (/https:\/\/.*\.okta\.com\/activate/.test(window.location.href)) {
        const button = document.querySelector('input[type="submit"]')
        const label = document.querySelector(".okta-form-title")
        if (button) {
            if ((button.value == 'Next') && (label.innerText == "Activate your device")) {
                button.click();
            }
        }
        if (label) {
            if (label.innerText == "Device activated") {
                setTimeout(function () {
                    chrome.runtime.sendMessage({}, function () { })
                }, 1000)
            }
        }
    }
    if (/https:\/\/.*\.awsapps\.com\/start\/.*/.test(window.location.href)) {
        const buttonAllow = document.querySelector('button[data-testid="allow-access-button"]')
        const buttonConfirm = document.querySelector('button[id="cli_verification_btn"]')
        const message = document.querySelector('div[class="awsui-context-alert"]')
        if (buttonConfirm) {
            if (buttonConfirm.innerText == "Confirm and continue") {
                buttonConfirm.click();
            }
        }
        if (buttonAllow) {
            if (buttonAllow.innerText == "Allow") {
                buttonAllow.click();
            }
        }
        if (message) {
            if (message.innerText.includes("You have approved the request for access.")) {
                setTimeout(function () {
                    chrome.runtime.sendMessage({}, function () { })
                }, 1000)
            }
        }
    }
}, 1000);