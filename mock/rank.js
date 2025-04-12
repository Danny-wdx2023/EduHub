export default {
    url: "/api/getRank",
    method: "get",
    response: (request) => {
        return {
            code: 200,
            data: [
                {
                    rank: 0,
                    name: "零小灵",
                    chinese: 150,
                    maths: 150,
                    english: 150,
                    physics: 150,
                    chemistry: 150,
                    total: 750
                }, {
                    rank: 1,
                    name: "沈贝缇",
                    chinese: 140,
                    maths: 145,
                    english: 140,
                    physics: 140,
                    chemistry: 140,
                    total: 705
                }, {
                    rank: 2,
                    name: "Unknown",
                    chinese: 0,
                    maths: 0,
                    english: 0,
                    physics: 0,
                    chemistry: 0,
                    total: 0
                }, {
                    rank: 3,
                    name: "Unknown",
                    chinese: 0,
                    maths: 0,
                    english: 0,
                    physics: 0,
                    chemistry: 0,
                    total: 0
                }, {
                    rank: 4,
                    name: "Unknown",
                    chinese: 0,
                    maths: 0,
                    english: 0,
                    physics: 0,
                    chemistry: 0,
                    total: 0
                }, {
                    rank: 5,
                    name: "邹致勋",
                    chinese: 130,
                    maths: 140,
                    english: 135,
                    physics: 135,
                    chemistry: 130,
                    total: 670
                }
            ]
        }
    }
}