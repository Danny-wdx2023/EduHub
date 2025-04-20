export function getData(api, variable){
    async function fun(param){
        try {
            let res;
            if (param) {
                const p = new URLSearchParams(param);
                res = await fetch(`${api}?${p}`);
            }
            else { 
                res = await fetch(api);
            }
            const data = await res.json();
            variable.value = data.data;
        } catch (err) {
            console.error("Error raised while calling API: ", err);
            throw err;
        }
    }
    return fun;
}