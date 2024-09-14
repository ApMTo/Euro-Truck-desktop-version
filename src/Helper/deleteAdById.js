const deleteAdById = async(id) => {
    await fetch(`http://localhost:8080/ads/${id}`, {
        method: 'DELETE'
    })
}


export default deleteAdById;