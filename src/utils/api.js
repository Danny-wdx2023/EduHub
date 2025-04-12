export function getData(api, variable){
    async function fun(){
        try{
            const res = await fetch(api);
            const data = await res.json();
            variable.value = data.data;
        } catch (err){
            console.error("Error raised while calling API: ", err);
            throw err;
        }
    }
    return fun;
}