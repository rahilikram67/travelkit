

module.exports = {
    goNext: (nextStep) => {
        window.scrollTo(0, 0)
        nextStep(step=>step + 1)
    },
    goBack: (nextStep) => {
        window.scrollTo(0, 0)
        nextStep(step=>step - 1)
    }
}
