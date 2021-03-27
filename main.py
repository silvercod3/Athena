import speech_recognition as sr
import pyttsx3
import inits
import random
import time
from tkinter import *
from pyttsx3.drivers import sapi5

engine = pyttsx3.init()
r = sr.Recognizer()
errors = random.choice(inits.lista_erros)


class person:
    name = ''

    def setName(self, name):
        self.name = name


def there_exists(terms):
    for term in terms:
        if term in voice_data:
            return True


def speak(text):
    voices = engine.getProperty("voices")
    engine.setProperty("voice", voices[0].id)
    engine.setProperty('rate', 235)
    engine.say(text)
    engine.runAndWait()


def respond(voice_data):
    if there_exists(['oi', 'olá', 'prazer']):
        greetings = [f"olá, como posso te ajudar {person_obj.name}",
                     f"olá, tudo bem ? {person_obj.name}", f"estou ouvindo {person_obj.name}",
                     f"como eu posso te ajudar? {person_obj.name}", f"olá {person_obj.name}"]
        greet = greetings[random.randint(0, len(greetings)-1)]
        speak(greet)

    if there_exists(["qual é o seu nome", "qual seu nome", "me diga seu nome", "qual é seu nome", "seu nome"]):
        if person_obj.name:
            speak("meu nome é Athena")
        else:
            speak("meu nome é Athena. E como você se chama?")

    if there_exists(["meu nome é"]):
        person_name = voice_data.split("é")[-1].strip()
        speak(f"certo, eu me lembro de você {person_name}")
        person_obj.setName(person_name)

    if there_exists(["como você está", "tudo bem com você", "tudo bem"]):
        speak(f"Estou muito bem, obrigado por perguntar {person_obj.name}")

    if there_exists(["calcule a média", "media", "média"]):
        speak("Por favor, digite os valores para calcular sua média")
        janela = Tk()

        def bt_click():

            if str(ed1.get()).isnumeric() and str(ed2.get()).isnumeric():
                num1 = int(ed1.get())
                num2 = int(ed2.get())

                lb['text'] = (num1+num2) / 2
            else:
                lb['text'] = 'Valores informados são inválidos'
                speak(lb['text'])

        ed1 = Entry(janela)
        ed1.place(x=115, y=100)
        ed2 = Entry(janela)
        ed2.place(x=115, y=130)

        bt = Button(janela, text='Calcular Média', width=20, command=bt_click, bg='gold2')
        bt.place(x=100, y=170)

        lb = Label(janela, text='Olá, sou Athena sua assistente!', bg='azure')
        lb.place(x=90, y=50)
        lb = Label(janela, text='Infome as notas para média', bg='azure')
        lb.place(x=100, y=70)

        janela['bg'] = 'azure'
        janela.geometry('400x300+200+200')
        janela.mainloop()

    if there_exists(["que horas são", "horário", "qual hora", "que horas"]):
        speak(inits.SystemInfo.get_time())


def sound_input(ask=False):
    with sr.Microphone() as source:
        if ask:
            speak(ask)
        audio = r.listen(source)
        voice_data = ''
        try:
            voice_data = r.recognize_google(audio, language="pt")
        except sr.UnknownValueError:
            speak(errors)
        except sr.RequestError:
            speak('Desculpe, o serviço está fora do ar')
        print(f">> {voice_data.lower()}")
        return voice_data.lower()


time.sleep(1)

person_obj = person()
inits.intro()
while 1:
    voice_data = sound_input()
    respond(voice_data)