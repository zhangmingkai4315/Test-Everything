describe("NewInvestmentView",function(){
	var view;

	beforeEach(function(){
		loadFixtures('NewInvestmentView.html');
		appendLoadFixtures('InvestmentListView.html');

		listView=new InvestmentListView({
			id:"investment-list"
		});
		newView=new NewInvestmentView({
			selector:'#new-investment'
		});
		application=new InvestmentTracker({
			listView:listView,
			newView:newView
		})
	});
	it("should allow the input of the stock symbol",function(){
		expect(newView.$element).toExist();
	});

	it("should allow the input of shares",function(){

	});
	it("should allow the input of the share price",function(){

	});

	describe("when a new investment is created",function(){
		beforeEach(function(){
			
		});
		it("should add the investment to the list",function(){
			expect(listView.count()).toEqual(1);
		})
	});
	afterEach(function(){
		$("#new-investment").remove();
	})
})