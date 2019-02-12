function formatTime(m) {
	/*d->days;  h->hours;  m->minutes*/
	if (m >= 1440) {
		var d = (m / 1440 | 0);
		m %= 1440
	}
	if (m >= 60) {
		var h = (m / 60 | 0);
		m %= 60;
	}
	return (d + ' day(s) ' + h + ' hour(s) ' + m + ' minute(s)');
}

formatTime(2100);
