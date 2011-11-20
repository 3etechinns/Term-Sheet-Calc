var app={inputs:{preMoney:0,commonStock:0,optionPool:0,investment:0},outputs:{postMoney:0,postShares:0,pricePerShare:0,commonOwnership:0,preferredOwnership:0,effectivePreMoney:0},calculated:!1};
app.calculate=function(){if(!app.getInputs())return!1;var a=app.inputs,b=app.outputs;b.postMoney=a.preMoney+a.investment;b.pricePerShare=(a.preMoney-b.postMoney*a.optionPool)/a.commonStock;b.preferredOwnership=a.investment/(a.preMoney+a.investment);b.commonOwnership=1-b.preferredOwnership-a.optionPool;b.effectivePreMoney=b.pricePerShare*a.commonStock;app.calculated=!0;app.showResults()};
app.showResults=function(){$("#pricepershare").val(app.outputs.pricePerShare.toFixed(2));$("#postmoney").val(app.outputs.postMoney);$("#optionpoolresults").val(app.utils.toPercentage(app.inputs.optionPool));$("#preferredowned").val(app.utils.toPercentage(app.outputs.preferredOwnership).toFixed(2));$("#commonowned").val(app.utils.toPercentage(app.outputs.commonOwnership).toFixed(2));$("#results").fadeIn();$("body").animate({scrollTop:200})};
app.getInputs=function(){app.inputs.preMoney=parseInt($("#premoney").val());app.inputs.optionPool=parseFloat($("#optionpool").val()/100);app.inputs.investment=parseInt($("#investment").val());app.inputs.commonStock=parseInt($("#commonstock").val());if(isNaN(app.inputs.preMoney)||app.inputs.preMoney==0)return app.showError("Is your company worth something?"),!1;if(isNaN(app.inputs.investment)||app.inputs.investment==0)return app.showError("I'm sure you're trying to raise some money"),!1;if(isNaN(app.inputs.optionPool))return app.showError("I can't work with your option pool"),
!1;return isNaN(app.inputs.commonStock)||app.inputs.commonStock==0?(app.showError("There's something wrong with your stock"),!1):!0};app.showError=function(a){$("#error").html(a).fadeIn().delay(3E3).fadeOut()};app.utils={toPercentage:function(a){return a*100}};app.refreshValues=function(){$("input").blur(function(){app.calculated&&app.calculate()})};$("a").click(function(){var a=$(this).attr("data-link");a=="calculate"&&app.calculate();a=="clear"&&$("input").val("");return!1});
$(document).ready(function(){$("body").bind("touchmove",function(){})});
