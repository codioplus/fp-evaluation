// Copyright (c) 2023, Ahmad Rahal and contributors
// For license information, please see license.txt

frappe.ui.form.on('Airline', {
	refresh: function(frm) {
    if (frm.doc.website) {
      // let elmt = $(frm.page.sidebar).find('div.form-sidebar').first();
      // let a = $('<a>').prop("href",frm.doc.website).text('View Website').css('font-weight','bold');
      // let div = $('<div>').addClass('pb-3').append(a);
      // elmt.prepend(div);
      frm.add_web_link(frm.doc.website);
    }
	}
});
