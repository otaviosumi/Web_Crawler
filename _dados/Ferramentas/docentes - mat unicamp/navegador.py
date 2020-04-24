import selenium
from selenium import webdriver
from selenium.webdriver.common.by import By

docentesComEmail = open("mydocentes.txt", "w+")

driver = webdriver.Chrome()
# driver_aux= webdriver.Chrome()

names = []
emails = []

driver.get('https://www.ime.unicamp.br/pessoas')
driver.implicitly_wait(10)

driver.find_element_by_xpath('//*[@id="edit-ldap-yp-select-0"]/option[2]').click()
# table = driver.find_elements_by_xpath('//*[@id="ldap_yp_result_scroll"]')
table = driver.find_elements_by_class_name('nome')
driver.implicitly_wait(10)
for t in table:
	name = t.get_attribute('innerHTML').encode('utf-8')
	names.append(name)


table = driver.find_elements_by_class_name('email')
driver.implicitly_wait(10)
for t in table:
	email = t.find_element_by_xpath('.//a').get_attribute('innerHTML').encode('utf-8')
	emails.append(email)

for i, n in enumerate(names):
	docentesComEmail.write(names[i] + ";" + emails[i] + '\n')

# docANDlinksDIC = []

# for i in list.find_elements_by_xpath('.//a'):
# 	docentesComEmail.write(i.get_attribute('innerHTML').encode('utf-8') + ";")

# 	driver_aux.get(i.get_attribute('href'))
# 	infos = driver_aux.find_element_by_class_name('field-item')
	
# 	for info in infos.find_elements_by_xpath('.//p'):
# 		counter = 0
# 		for inf in info.find_elements_by_xpath('.//a'):
# 			if counter == 0:
# 				if 'Lattes' in inf.get_attribute('innerHTML'): break
# 				if '<u>' in inf.get_attribute('innerHTML'):
# 					docentesComEmail.write(inf.get_attribute('innerHTML')[3 : -4] + "\n")
# 				else:
# 					docentesComEmail.write(inf.get_attribute('innerHTML') + "\n")
# 				counter = 1

		

# driver_aux.close()
driver.close()