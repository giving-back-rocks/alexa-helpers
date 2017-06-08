function humanTime(date) {
	const moment = require('moment');
	const days = {"Monday": 0, "Tuesday": 1, "Wednesday": 2, "Thursday": 3, "Friday": 4, "Saturday": 5, "Sunday": 6};
	function getToday() {
		function mod(n, m) {
				return ((n % m) + m) % m;
		}
		return mod((moment().format('d') - 1), 7);
	}


	let when = moment(date).calendar(null, {
	    sameDay: '[Today]',
	    nextDay: '[Tomorrow]',
	    nextWeek: '[q]dddd, MMMM Do', // no months or days start with q, soooo.....
	    lastDay: '[Yesterday]',
	    lastWeek: '[Last] dddd',
	    sameElse: 'dddd, MMMM Do'
	});

	if (when.charAt(0) == 'q') {
		when = when.substring(1);
		if(days[when.split(',')[0]] >= getToday()) {
			when = "This " + when;
		} else {
			when = "Next " + when;
		}
	}

	return when;
}


console.log(humanTime('2017-06-9'));
