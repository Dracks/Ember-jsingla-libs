export default {
	date(object, listFields){
		var errors=[];

		listFields.forEach(function (field){
			var data = object.get(field);
			if ( data === undefined || data === null ||
				(data.getYear()===0 && data.getMonth()===0 && data.getDate()===1)){
				errors.push(field);
			}
		});
		return errors;
	},

	input(object, listFields, minLength) {
		if (minLength===undefined){
			minLength=0;
		}
		var errors=[];
		listFields.forEach(function (field){
			var data = object.get(field);
			if ( data === undefined || data === null || data.length<=minLength){
				errors.push(field);
			}
		});
		return errors;
	},

	select(object, listFields) {
		var errors = [];
		listFields.forEach(function (field) {
			var data = object.get(field);
			if (data === undefined || data === null || data.get('id') === undefined) {
				errors.push(field);
			}
		});
		return errors;
	}
};
