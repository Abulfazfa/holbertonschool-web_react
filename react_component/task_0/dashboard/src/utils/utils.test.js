import { getFooterCopy, getFullYear, getLatestNotification } from './utils';

describe("Utils functions", () => {
	
	// Test for getFullYear
	test("getFullYear returns the correct year", () => {
		// Mocking the current date to return 2021
		const currentDate = new Date(2021, 0, 1); // January 1, 2021
		jest.spyOn(global, 'Date').mockImplementation(() => currentDate);

		expect(getFullYear()).toEqual(2021);

		// Restore the Date mock after the test
		global.Date.mockRestore();
	});

	// Test for getFooterCopy when argument is true
	test("getFooterCopy returns the correct string when the argument is true", () => {
		expect(getFooterCopy(true)).toEqual("Holberton School");
	});

	// Test for getFooterCopy when argument is false
	test("getFooterCopy returns the correct string when the argument is false", () => {
		expect(getFooterCopy(false)).toEqual("Holberton School main dashboard");
	});

	// Test for getLatestNotification
	test("getLatestNotification returns the expected string", () => {
		expect(getLatestNotification()).toEqual("<strong>Urgent requirement</strong> - complete by EOD");
	});
});
