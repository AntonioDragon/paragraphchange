require("../scss/style.scss")

const {Settings} = require("./objDomSettings")
const {objParagraph} = require("./objParagraph.js")

var arrClassObject = [];
var idOpen;

document.addEventListener("DOMContentLoaded", () => {
    if (sessionStorage.hasOwnProperty("objArray")) {
        let arrClassObjectSerializable = JSON.parse(sessionStorage.getItem("objArray"))
        sessionStorage.clear()
        document.querySelectorAll(".button").forEach((item, key) => {
            arrClassObject.push(new objParagraph(
                item,
                item.parentNode.previousElementSibling,
                arrClassObjectSerializable[key].size,
                arrClassObjectSerializable[key].color,
                arrClassObjectSerializable[key].weightLet,
                arrClassObjectSerializable[key].weightStyle,
                arrClassObjectSerializable[key].letterspacing,
                arrClassObjectSerializable[key].lineHeight
            ))
        })
        arrClassObject.forEach(elem => {
            elem.createParagraphSize(elem.size)
            elem.createParagraphColor(elem.color)
            elem.createParagraphWeightlet(elem.weightLet)
            elem.createParagraphWeightstyle(elem.weightStyle)
            elem.createParagraphLetterspacing(elem.letterspacing)
            elem.createParagraphLineheight(elem.lineHeight)
        })

    } else {
        document.querySelectorAll(".button").forEach(item =>
            arrClassObject.push(new objParagraph(
                item,
                item.parentNode.previousElementSibling,
                "16px",
                "#000000",
                400,
                "normal",
                "0px",
                "19px"
            ))
        )
        arrClassObject.forEach(elem => {
            elem.createParagraphSize(elem.size)
            elem.createParagraphColor(elem.color)
            elem.createParagraphWeightlet(elem.weightLet)
            elem.createParagraphWeightstyle(elem.weightStyle)
            elem.createParagraphLetterspacing(elem.letterspacing)
            elem.createParagraphLineheight(elem.lineHeight)
        })
    }

})

window.onbeforeunload = () => {
    arrClassObject.map(elem => elem.deactiveItem())
    let serialArray = JSON.stringify(arrClassObject)
    sessionStorage.setItem("objArray", serialArray)
}

document.querySelectorAll(".button").forEach(item => item.addEventListener('click', () => {
    idOpen = arrClassObject.indexOf(arrClassObject.find(elem => elem.paragraph == item.parentNode.previousElementSibling))
    if (!arrClassObject[idOpen].isActive) {
        arrClassObject[idOpen].remember()
        arrClassObject[idOpen].activeItem()
        arrClassObject.map(elem => {
            if (elem != arrClassObject[idOpen]) {
                elem.deactiveItem()
                elem.buttonParagraph.innerText = "Setting"
            }
        })
        Settings.burger_setting.classList.add("burger__setting--active")
        arrClassObject[idOpen].buttonParagraph.innerText = "Close"
    } else {
        arrClassObject[idOpen].deactiveItem()
        Settings.burger_setting.classList.remove("burger__setting--active")
        arrClassObject[idOpen].buttonParagraph.innerText = "Setting"
    }
}))

Settings.setting__size.oninput = () => arrClassObject[idOpen].createParagraphSize(`${Settings.setting__size.value}px`)
Settings.setting__color.oninput = () => arrClassObject[idOpen].createParagraphColor(Settings.setting__color.value)
Settings.setting__weightlet.oninput = () => arrClassObject[idOpen].createParagraphWeightlet(`${Settings.setting__weightlet.value}`)
Settings.setting__weightstyle.oninput = () => arrClassObject[idOpen].createParagraphWeightstyle(Settings.setting__weightstyle.value)
Settings.setting__letterspacing.oninput = () => arrClassObject[idOpen].createParagraphLetterspacing(`${Settings.setting__letterspacing.value}px`)
Settings.setting__lineheight.oninput = () => arrClassObject[idOpen].createParagraphLineheight(`${Settings.setting__lineheight.value}px`)

Settings.buttonReset.addEventListener('click', () => {
    arrClassObject[idOpen].paragraph.removeAttribute('style')
    arrClassObject[idOpen].reset(
        "16px",
        "#000000",
        400,
        "normal",
        "0px",
        "19px"
    )
})