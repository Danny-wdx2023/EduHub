export default {
    url: "/api/getTodo",
    method: "get",
    response: (request) => ({
        code: 200,
        data: {
            "语文": [{
                id: 1,
                name: "抄写古诗2遍",
                detail: "标配作业《长恨歌》《琵琶行》各两遍，巩固作业把《岳阳楼记》抄一遍"
            }], 
            "数学": [{
                id: 2,
                name: "一模卷2套",
                detail: "自己找2套一模卷，打印出来后自批自订"
            }], 
            "英语": [{
                id: 3,
                name: "背诵课文第1~8段",
                detail: "背诵沪教版P39页课文，假期回来默写"
            }, {
                id: 4,
                name: "订正默写",
                detail: "订正今日默写"
            }]
        }
    })
}