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
	
	for it in range(1, 10):
		docentesPHP = open("d" + str(it), "r")
		dLines = docentesPHP.readlines()
		for x in dLines:
			if 'views-field-name' in x:
				aux = x[82:-20]
				docentesComEmail.write(aux + ';')
			if 'mailto:' in x:
				aux = x[192:]
				count = 0
				for i,a in enumerate(aux):
					if(a == ">"):
						aux = aux[:i-1]
						break
				docentesComEmail.write(aux + '\n')
		

	return;


fromPHP()
readerFromPHP()
