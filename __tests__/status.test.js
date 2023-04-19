const { existsSync } = require("fs");

test('Expect to pass', () => {
	expect(1 + 2).toBe(3);
});

test.skip('Expect to skip', () => {
	expect(1 + 2).toBe(3);
});

test('Expect to fail', () => {
	if (process.env.CI === "true")
		return;
	expect(2 + 2).toBe(6);
});

test('Expect to break', () => {
	if (process.env.CI === "true")
		return;
	expect(3 + 2).toBe(5);
	foo.bar;
});

test("Test run creates something in allure-results folder", () => {
  expect(existsSync("./allure-results")).toBe(true)
})