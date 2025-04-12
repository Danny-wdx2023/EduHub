export default {
    url: "/api/getEvents",
    method: "get",
    response: (request) => {
        return {
            code: 200,
            data: [{
                event: "期中考试",
                dayLeft: 1
            }, {
                event: "期末考试",
                dayLeft: 100
            }, {
                event: "中考",
                dayLeft: 800
            }]
        }
    }
}