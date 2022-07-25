export async function getFetch(){
    try {
        const response = await fetch('https://api.opendota.com/api/heroStats')
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error)
    }
}