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
                    chinese: 100,
                    maths: 100,
                    english: 100,
                    physics: 100,
                    chemistry: 100,
                    total: 500
                }, {
                    rank: 1,
                    name: "沈贝缇",
                    chinese: 80,
                    maths: 85.3,
                    english: 82,
                    physics: 91,
                    chemistry: 91,
                    total: 429.3
                }, {
                    rank: 2,
                    name: "鲍嵘",
                    chinese: 79,
                    maths: 81.3,
                    english: 84,
                    physics: 92,
                    chemistry: 81,
                    total: 417.3
                }, {
                    rank: 2,
                    name: "王岱熙",
                    chinese: 88,
                    maths: 77.3,
                    english: 82,
                    physics: 93,
                    chemistry: 77,
                    total: 417.3
                }, {
                    rank: 4,
                    name: "羌书正",
                    chinese: 78,
                    maths: 85.3,
                    english: 73,
                    physics: 86,
                    chemistry: 83,
                    total: 405.3
                }, {
                    rank: 5,
                    name: "胡心怡",
                    chinese: NaN,
                    maths: NaN,
                    english: NaN,
                    physics: NaN,
                    chemistry: NaN,
                    total: 403.7
                }
            ]
        }
    }
}