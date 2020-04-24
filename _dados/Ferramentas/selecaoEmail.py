docentesComEmail = 0
docentesPHP = 0
emailAux = 0


def fromPHP():
	global docentesComEmail
	docentesComEmail = open("mydocentes.txt", "w+")
	return;

def readerFromPHP():
	global docentesPHP
	global emailAux
	counter = 1
	docentesPHP = open("docentes.php", "r")
	dLines = docentesPHP.readlines()
	for x in dLines:
		if '<div class=\"main-subcontent-3\">' in x:
			counter = 5
		if '>[E-mail]</a>' in x:
			emailAux = x[25:-15]
			#print(emailAux)
			docentesComEmail.write(str(emailAux) +"\n")
		counter = counter - 1
		if counter == 0:
			docentesComEmail.write(str(x[9:-1]) + "; ")

	return;


fromPHP()
readerFromPHP()

