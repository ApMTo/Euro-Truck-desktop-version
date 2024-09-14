const postAd = async(adBody) => {
    await fetch('http://localhost:8080/ads', {
        method: 'POST',
        body: JSON.stringify(adBody)
    })
}

export default postAd;