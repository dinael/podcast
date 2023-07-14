function formatDate(release) {
    const date = new Date(release)
    const day = date.getDate()
    const month = date.getMonth() + 1
    const year = date.getFullYear()

    return `${day}/${month}/${year}`
}

function EpisodeDuration({ release }) {
    const formattedDate = formatDate(release)

    return (
        <>{formattedDate}</>
    );
}

export default EpisodeDuration
