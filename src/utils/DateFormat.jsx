function formatDate(rawDate) {
    const date = new Date(rawDate)
    const day = date.getDate()
    const month = date.getMonth() + 1
    const year = date.getFullYear()

    return `${day}/${month}/${year}`
}

function DateFormatted({ date }) {
    const formattedDate = formatDate(date)

    return (
        <>{formattedDate}</>
    )
}

export default DateFormatted
