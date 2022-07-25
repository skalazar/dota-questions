export async function getFetch(){
    try {
        let response = await fetch('https://api.opendota.com/api/heroStats')
        let data = await response.json()
        return data;
    } catch (error) {
        console.log(error)
    }
}