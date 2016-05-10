
function NewInvestmentView(params){
	this.$element=$(params.selector);
	this.$element.on("submit",function(){
		this.listView.addInvestment(/*new investment*/);
	}.bind(this));

}

function InvestmentListView(params){
	this.$element=$(params.selector);
	this.investmentlist=[];
}
InvestmentListView.prototype.count=function(){
	return this.investmentlist.length;
};
InvestmentListView.addInvestment=function(investment){
	this.investmentlist.push(invesment);
};
function InvestmentTracker(params){
	this.listView=params.listView;
	this.newView=params.newView;
	this.newView.onCreate(function(investment){
		this.listView.addInvestment(investment);
	}.bind(this));
}


NewInvestmentView.prototype={
	getSymbolInput:function(){
		return this.$element('.new-investment-stock-symbol');
	},
	$:function(){
		return this.$element.find.apply(this.$element,arguments);
	},
	setSymbol:function(value){
		this.$(".new-investment-stock-symbol").val(value);
	}
}
 NewInvestmentView.prototype.onCreate = function(callback) {
     this._callback = callback;
};


(function($,Investment,Stock){

	this.NewInvestmentView=NewInvestmentView;

})(jQuery,Investment,Stock);

