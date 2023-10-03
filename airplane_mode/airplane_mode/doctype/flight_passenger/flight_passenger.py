# Copyright (c) 2023, Ahmad Rahal and contributors
# For license information, please see license.txt

# import frappe
from frappe.model.document import Document


class FlightPassenger(Document):
	def validate(self):
		self.full_name = str(self.first_name)
		if self.last_name:
			self.full_name += " " + str(self.last_name)
