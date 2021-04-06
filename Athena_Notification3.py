import smtplib
from email.mime.text import MIMEText

# conexão com os servidores do google
smtp_ssl_host = 'smtp.gmail.com'
smtp_ssl_port = 465
# email e senha da conta google
username = 'athena.assistant021@gmail.com'
password = 'athena2021'

from_addr = 'athena.assistant021@gmail.com'
to_addrs = ['cabelokogames@gmail.com']

# MIMEText para enviar apenas textos

message = MIMEText('Olá, bem vindo, sou Athena, sua assistente de estudos!')
message['subject'] = 'Athena Assistant'
message['from'] = from_addr
message['to'] = ', '.join(to_addrs)

try:
    server = smtplib.SMTP_SSL(smtp_ssl_host, smtp_ssl_port)
    server.login(username, password)
    server.sendmail(from_addr, to_addrs, message.as_string())
    server.quit()
    print('Notificação enviada com sucesso!')
except Exception as err:
    print(f'Falha ao enviar notificação. :{err}')
