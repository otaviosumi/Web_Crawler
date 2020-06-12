import stdiomask
import smtplib
import csv
import time
from email.message import EmailMessage

with open('email_list.csv', encoding="utf8") as csv_file:
    csv_reader = csv.reader(csv_file, delimiter=';')
    line_count = 0
    email_list = []
    for row in csv_reader:
        if '@' in row[2]:
            email_list.append(row[2])
for it in range(len(email_list)):
    if ',' in email_list[it]:
        aux = email_list[it].split(',')
        email_list[it] = aux[0]
        for jt in range(len(aux) - 1):
            email_list.append(aux[1+jt])
# print(email_list)

print("Sending " + str(len(email_list)) + " emails targets")

EMAIL_ADDRESS = input("Email login: ")
EMAIL_PASSWORD = stdiomask.getpass(prompt='Password: ', mask='*')



for curr_email in email_list:
    msg = EmailMessage()
    msg['Subject'] = 'Pesquisa de opinião - Uso de software educacional'
    msg['From'] = EMAIL_ADDRESS
    msg['To'] = curr_email
    msg.set_content(
        'Olá, me chamo Otávio e estou fazendo uma pesquisa por meio de formulário para meu TCC, ela é feita '
        'de forma anônima e o objetivo é coletar as opiniões dos professores com relação ao uso de '
        'tecnologias no ensino (como aulas EAD no caso da pandemia). Gostaria lhe convidar a participar dessa '
        'pesquisa, a pesquisa não é obrigatória e é possível desistir a qualquer momento.\n \nObrigado desde '
        'já!\n\nhttps://forms.gle/YkDNrw4ZE8H3zqJk9\n\n--\nOtávio Massola Sumi\nEngenharia de Computação - '
        'ICMC/EESC\nUSP - São Carlos')

    with smtplib.SMTP_SSL('smtp.gmail.com', 465) as smtp:
        smtp.login(EMAIL_ADDRESS, EMAIL_PASSWORD)
        smtp.send_message(msg)