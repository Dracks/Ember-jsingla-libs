import Ember from 'ember';
import layout from '../templates/components/js-date-picker';
//import moment from 'moment';

export default Ember.Component.extend({
	layout: layout,
	format: 'dd/mm/yyyy',
	classNames: ["form-inline"],
	value: null,
	_day: Ember.computed('value', function (){
		var value=this.get('value');
		if (value) {
			return moment(value).get('date');
		}
		return null;
	}),
	_month: Ember.computed('value', function (){
		var value=this.get('value');
		if (value) {
			return moment(value).get('month');
		}
	}),
	_year: Ember.computed('value',  function (){
		var value=this.get('value');
		if (value) {
			return moment(value).get('year');
		}
	}),
	parsedFormat: Ember.computed('format', {
		get(){
			var ret = [];
			var format = this.get('format');
			var begin = 0;
			var end = 0;
			var last = {};
			for (begin = 0; begin < format.length; begin++) {
				var e = format[begin];
				if (e === 'd' || e === 'm' || e === 'y') {
					last.separator = format.substr(end, begin - end);
					if (begin !== 0) {
						ret.push(last);
					}
					last = {};
					end = begin + 1;
					while (end < format.length && format[end] === e) {
						end++;
					}
					last.element = e;
					last.size = end - begin;
					begin = end;
				}
			}
			if (end < format.length) {
				last.separator = format.substr(end);
			}
			ret.push(last);
			return ret;
		}
	}),
	generateList(start, end, size){
		var ret=[];
		var prefix="";
		for (var j=0; j<size; j++){
			prefix=prefix+"0";
		}
		for (var i=start; i<=end; i++){
			ret.push(Ember.Object.create({
				id:""+i,
				name: (prefix+i).substr(-size)
			}));
		}
		return ret;
	},
	selectList: Ember.computed('parsedFormat.[].value', 'value', function (){
		var parsed=this.get('parsedFormat');
		return parsed.map(function (e){
			var newE={};
			newE.separator=e.separator;
			newE.element=e.element;
			var size=e.size;
			var start=0;
			var end=10;
			var lambda=null;
			var value=null;
			switch(e.element){
				case "d":
					start=1;
					end=31;
					value=this.get('_day');
					break;
				case "m":
					start=0;
					end=11;
					value=this.get('_month');
					lambda=function (e){
						var m=moment();
						m.month(parseInt(e));
						return m.format("MMMM");
					};
					break;
				case "y":
					start=1900;
					end=2015;
					value=this.get('_year');
					break;
			}
			var list=this.generateList(start, end, size);
			if (lambda){
				list.forEach(function (e){
					e.set('name', lambda(e.get('name')));
				});
			}
			newE.content=list;
			newE.value=list.find(function (e){
				return e.get('id')===""+value;
			});
			return Ember.Object.create(newE);
		}.bind(this));
	}),
	actions: {
		updateValue(){
			var selectList=this.get('selectList');
			var currentValue = moment(this.get('value'));
			selectList.forEach(function (e){
				var id=e.get('value.id');
				switch(e.element){
					case "d":
						currentValue.date(id);
						break;
					case "m":
						currentValue.month(parseInt(id));
						break;
					case "y":
						currentValue.year(id);
						break;
				}
			});
			this.set('value', currentValue.toDate());
		},
	}
});
