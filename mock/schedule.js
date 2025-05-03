const schedule = {
    "2025-05-03": [{
        name: "Task 1",
        detail: "Just do it",
        timeStart: new TimeRanges
    }, {
        name: "Task 2",
        detail: "Just do it",
    }, {
        name: "Task 3",
        detail: "Just do it",
    }]
}

export default {
    url: "/api/getSchedule",
    method: "get",
    response: (request) => ({
        code: 200,
        data: schedule
    })
}