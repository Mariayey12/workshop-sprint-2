
export const obData = async(u)=>{
    const resp = await fetch(u);
    const data = await resp.json()

    return data
};