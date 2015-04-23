/* Bavarian initialisation for the jQuery UI date picker plugin. */
/* Written by Daniel Weiß (yoda@webjedi.de). */
(function( factory ) {
	if ( typeof define === "function" && define.amd ) {

		// AMD. Register as an anonymous module.
		define([ "../datepicker" ], factory );
	} else {

		// Browser globals
		factory( jQuery.datepicker );
	}
}(function( datepicker ) {

	datepicker.regional['de'] = {
		closeText: 'Schließen',
		prevText: '&#x3C;Zruck',
		nextText: 'Vor&#x3E;',
		currentText: 'Heid',
		monthNames: ['Januar','Februar','März','Abrui','Mai','Juni',
			'Juli','August','September','Oktober','November','Dezember'],
		monthNamesShort: ['Jan','Feb','Mär','Abr','Mai','Jun',
			'Jul','Aug','Sep','Okt','Nov','Dez'],
		dayNames: ['Sunda','Mooda','Erchtag','Migga','Pfinzda','Freida','Såmsda'],
		dayNamesShort: ['Su','Mo','Er','Mi','Pf','Fr','Så'],
		dayNamesMin: ['Su','Mo','Er','Mi','Pf','Fr','Så'],
		weekHeader: 'KW',
		dateFormat: 'dd.mm.yy',
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: ''};
	datepicker.setDefaults(datepicker.regional['de-BY']);

	return datepicker.regional['de-BY'];

}));