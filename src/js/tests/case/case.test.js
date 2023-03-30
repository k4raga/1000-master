const { check } = require("../../case/case1")



test('Проверяем день', () => {
    expect(check(1)).toBe(' вторник ')
})