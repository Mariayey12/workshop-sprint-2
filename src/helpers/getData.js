
export const getD = async(u)=>{
    const resp = await fetch(u);
    const data = await resp.json()
    console.log('soy data')
    return data
};