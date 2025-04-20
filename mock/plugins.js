export default {
    url: "/api/getPlugins",
    method: "get",
    response: (request) => {
        return {
            code: 200,
            data: [{
                zh_name: "插件市场",
                name: "marketplace",
                icon: "ri-puzzle-line"
            }, {
                zh_name: "数字展览", 
                name: "exhibition",
                icon: "ri-brush-line"
            }]
        }
    }
}