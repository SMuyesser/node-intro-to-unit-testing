const should = require('chai').should();

const fizzBuzzer = require('../fizzBuzzer');

//unit tests for fizzBuzzer.js
describe('fizzBuzzer', function() {

		//test for normal case
		it('should return fizz-buzz', function() {
			const normalCases = [15, 30, 45];
			const expected = 'fizz-buzz';
			normalCases.forEach(function(input) {
				const num = fizzBuzzer(input);
				num.should.return(expected);
			});
		});

		it('should return buzz', function() {
			const normalCases = [5, 10, 20];
			const expected = 'buzz';
			normalCases.forEach(function(input) {
				const num = fizzBuzzer(input);
				num.should.return(expected);
			});
		});

		it('should return fizz', function() {
			const normalCases = [3, 6, 9];
			const expected = 'fizz';
			normalCases.forEach(function(input) {
				const num = fizzBuzzer(input);
				num.should.return(expected);
			});
		});

		it('should return num', function() {
			const normalCases = [1, 2, 14];
			normalCases.forEach(function(input) {
				const num = fizzBuzzer(input);
				num.should.return(num);
			});
		});

		//for bad cases
		it('should raise error if arg not number', function () {
			const badCases = ['a', '2', 'apple'];
			badCases.forEach(function(input) {
				(function () {
					fizzBuzzer(input)
				}).should.throw(Error);
			});
		});
});