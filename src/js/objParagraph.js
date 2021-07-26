const { Settings } = require("./objDomSettings")

class objParagraph {
    constructor(buttonparagraph, paragraph, size, color, weightlet, weightstyle, letterspacing, lineheight) {
        this.isActive = false
        this.buttonParagraph = buttonparagraph
        this.paragraph = paragraph
        this.size = size
        this.color = color
        this.weightLet = weightlet
        this.weightStyle = weightstyle
        this.letterspacing = letterspacing
        this.lineHeight = lineheight
    }
    activeItem = () => this.isActive = true
    deactiveItem = () => this.isActive = false

    createParagraphSize = (value) => {
        this.size = value
        this.paragraph.style.fontSize = value
    }
    createParagraphColor = (value) => {
        this.color = value
        this.paragraph.style.color = value
    }
    createParagraphWeightlet = (value) => {
        this.weightLet = value
        this.paragraph.style.fontWeight = value
    }
    createParagraphWeightstyle = (value) => {
        this.weightStyle = value
        this.paragraph.style.fontStyle = value
    }
    createParagraphLetterspacing = (value) => {
        this.letterspacing = value
        this.paragraph.style.letterSpacing = value
    }
    createParagraphLineheight = (value) => {
        this.lineHeight = value
        this.paragraph.style.lineHeight = value
    }
    reset(size, color, weightlet, weightstyle, letterspacing, lineheight) {
        this.size = Settings.setting__size.value = size
        this.color = Settings.setting__color.value = color
        this.weightLet = Settings.setting__weightlet.value = weightlet
        this.weightStyle = Settings.setting__weightstyle.value = weightstyle
        this.letterspacing = Settings.setting__letterspacing.value = letterspacing
        this.lineHeight = Settings.setting__lineheight.value = lineheight
    }
    remember = () => {
        Settings.setting__size.value = parseInt(this.size.match(/\d+/))
        Settings.setting__color.value = this.color
        Settings.setting__weightlet.value = parseInt(this.weightLet)
        Settings.setting__weightstyle.value = this.weightStyle
        Settings.setting__letterspacing.value = parseInt(this.letterspacing.match(/\d+/))
        Settings.setting__lineheight.value = parseInt(this.lineHeight.match(/\d+/))
    }
}

module.exports = {objParagraph}