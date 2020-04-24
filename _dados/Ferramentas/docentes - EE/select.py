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
	for it in range (1, 8):
		doc = "cd" + str(it)
		docentesPHP = open(doc, "r")
		dLines = docentesPHP.readlines()
		for x in dLines:
			if '05403-000' in x:
				break
			if '<strong>' in x:
				docenteaux = x[32 : -11]
				docentesComEmail.write(str(docenteaux) + ";")
			if 'mailto:' in x:
				i = 0
				for c in x:
					i = i +1
					if c == ">":
						break
				emailAux = x[48 : i-2]
				#print(emailAux)
				docentesComEmail.write(str(emailAux) +"\n")


	return;


fromPHP()
readerFromPHP()
