if (window.location.pathname == "/") {
    let begin = await import("./js/begin/beginSum.js")
    console.log("Тута")
}

if (window.location.pathname == "/integer/") {
    let integer = await import("./js/integer/integerSum.js")
}
