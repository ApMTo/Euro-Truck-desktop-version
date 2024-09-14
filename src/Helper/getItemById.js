const getItemById = async(id) => {
    const request = await fetch(`http://localhost:8080/ads/${id}`);
    const response = await request.json();
    return response;
}

export default getItemById;