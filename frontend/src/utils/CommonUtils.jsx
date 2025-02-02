
export function getDate(date) {
    const hours = new Date(date).getHours()
    const minutes = new Date(date).getMinutes()
    return `${hours < 10 ? '0' + hours : hours} :${minutes < 10 ? '0' + minutes : minutes} `
}

export function downloadMedia(e, image) {
    e.preventDefault()
    try {
        fetch(image)
            .then(res => res.blob())
            .then(blob => {
                const url = window.URL.createObjectURL(blob)
                const a = document.createElement('a')
                a.style.display = 'none'
                a.href = url

                const name = image.split('/').pop()
                a.download = "" + name + "";
                document.body.appendChild(a)
                a.click()
                window.URL.revokeObjectURL(url)
            })
            .catch(error => console.log('error while downloading', error.message))
    } catch (error) {
        console.log('error while downloading', error.message)
    }
}
