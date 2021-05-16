def media(n1, n2, n3, n4, n5=None):
    media = float(input('Diga a média utilizada por sua instituição de ensino:'))
    # n1 = float(input('Diga sua primeira nota: '))
    # n2 = float(input('Diga sua segunda nota: '))
    # n3 = float(input('Diga sua terceira nota: '))
    # n4 = float(input('Diga sua quarta nota: '))
    # n5 = float(input('Diga sua quinta nota: '))
    p1 = 1
    p2 = 1
    p3 = 1
    p4 = 1
    p5 = 1

    media_ponderada = (n1 + n2 + n3 + n4 + n5)/(p1 + p2 + p3 + p4 + p5)
    print(f'Sua média é igual a {media_ponderada}')
    if media_ponderada >= media:
        print(f'Você atingiu a média!!')
    elif media_ponderada <= media:
        print(f'Você não atingiu a média e está reprovado!!')
media(5,7,4.5,6)