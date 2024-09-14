const getAdsDate = async() => {
    const request = await fetch('http://localhost:8080/ads');
    const response = await request.json();
    return response;
}


export default getAdsDate;