import Ember from "ember";

export default Ember.Helper.helper(function ([leftSide, rightSide]) {
	//console.log('l:'+leftSide+" r:"+rightSide);
	return leftSide === rightSide;
});
