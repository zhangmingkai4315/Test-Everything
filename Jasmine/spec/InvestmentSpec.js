describe("Investment",function(){
	var stock,investment;
	beforeEach(function(){
		stock=new Stock();
		investment=new Investment({stock:stock,shares:100,sharePrice:20});
		jasmine.addMatchers({
				toBeAGoodInvestment:function(){
					return {
						compare:function(acture,expected){
							var result={};
							result.pass=acture.isGood()
							return result
						}
					}
				}
			});
	});
	describe("Basic Initial Test",function(){
	
		it("should be of a stock",function(){
			// var stock=new Stock();
			// var investment=new Investment({stock:stock,shares:100});
			expect(investment.stock).toBe(stock);
		});

		it("should have the invested shares quantity",function() {
			expect(investment.shares).toEqual(100);
		});
		it("should have the invested shares price",function() {
			expect(investment.sharePrice).toEqual(20);
		});
		it("should have cost price",function() {
			expect(investment.cost).toEqual(2000);
		});
	});

	describe("when its stock share price valorizes",function(){
		beforeEach(function(){
			stock.sharePrice=40;
		});
		it("should have a positive return of investment",function(){
			expect(investment.roi()).toEqual(1);
		});
		it("should be a good investment",function(){
			expect(investment).toBeAGoodInvestment();
		});
	});

	describe("when its stock share price devalorizes",function(){
		beforeEach(function(){
			stock.sharePrice=10;
		});
		it("should have a positive return of investment",function(){
			expect(investment.roi()).toEqual(-0.5);
		});
		it("should be a good investment",function(){
			expect(investment).not.toBeAGoodInvestment();
		});
	});
});