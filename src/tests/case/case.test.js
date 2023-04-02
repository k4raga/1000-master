import { case1, case2, case3, case4, case5  } from "./case.js"

test('Проверяем день', () => {
    expect(case1(1)).toBe(' понедельник ')
    expect(case1(2)).toBe(' вторник ')
})

test("Проверяем оценку", () => {
	expect(case2(1)).toBe(" плохо ");
	expect(case2(5)).toBe(" отлично ");
});

test("Проверяем время года", () => {
	expect(case3(12)).toBe(" Зима ");
	expect(case3(6)).toBe(" Лето ");
});

test("Проверяем время года", () => {
	expect(case4(12)).toBe(" 31 день ");
	expect(case4(2)).toBe(" 28 дней ");
});

test("рассчитываем", () => {
	expect(case5(2, 5, 2)).toBe(3);
	expect(case5(1, 4, 2)).toBe(6);
});