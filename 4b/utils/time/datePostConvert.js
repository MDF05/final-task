function datePostConvert(datePost) {
    const ClasssDate = new Date(datePost)

    const nameOfMonth = [
        "Januari",
        "Februari",
        "Maret",
        "April",
        "Mei",
        "Juni",
        "Juli",
        "Agustus",
        "September",
        "Oktober",
        "November",
        "Desember",
    ]

    return `${ClasssDate.getDate()} ${
        nameOfMonth[ClasssDate.getMonth()]
    } ${ClasssDate.getFullYear()}`
}

module.exports = datePostConvert
