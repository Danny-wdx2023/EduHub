export default {
    url: "/api/getBookData",
    method: "get",
    response: (request) => {
        return {
            code: 200,
            data: [
                { name: "论中国", author: "基辛格", publisher: "-", pubdate: "-", searchId: "-", isbn: "-" }, 
                { name: "零班上下五千年", author: "Ian J", publisher: "零班出版社", pubdate: "2024/2/30", searchId: "-", isbn: "-" },
                { name: "三体1·地球往事", author: "刘慈欣", publisher: "重庆出版社", pubdate: "-", searchId: "-", isbn: "-" },
                { name: "三体2·黑暗森林", author: "刘慈欣", publisher: "重庆出版社", pubdate: "-", searchId: "-", isbn: "-" },
                { name: "三体3·死神永生", author: "刘慈欣", publisher: "重庆出版社", pubdate: "-", searchId: "-", isbn: "-" },
                { name: "孙子兵法", author: "DeepSeek", publisher: "-", pubdate: "-", searchId: "-", isbn: "-" },
                { name: "孙子兵法", author: "DeepSeek", publisher: "-", pubdate: "-", searchId: "-", isbn: "-" },
                { name: "孙子兵法", author: "DeepSeek", publisher: "-", pubdate: "-", searchId: "-", isbn: "-" },
                { name: "孙子兵法", author: "DeepSeek", publisher: "-", pubdate: "-", searchId: "-", isbn: "-" },
                { name: "孙子兵法", author: "DeepSeek", publisher: "-", pubdate: "-", searchId: "-", isbn: "-" },
                { name: "孙子兵法", author: "DeepSeek", publisher: "-", pubdate: "-", searchId: "-", isbn: "-" },
                { name: "孙子兵法", author: "DeepSeek", publisher: "-", pubdate: "-", searchId: "-", isbn: "-" },
            ]
        }
    }
}