import csv 

with open("graduacao_unb.csv", encoding="utf-8") as file:
     # Os valores padrão de 'delimiter' e 'quotechar' são os mesmos utilizados 
    # abaixo. Você pode removê-los ou alterá-los conforme necessidade
    graducao_reader = csv.reader(file, delimiter=",", quotechar='"')
    
    
    # Usando o conceito de desempacotamento
    header, *data = graducao_reader

group_by_department = {}

for row in data:
    department = row[15]
    if department not in group_by_department:
        group_by_department[department] = 0
    group_by_department[department] += 1

with open("department_report.csv" , "w", encoding="utf-8") as file:
    writer = csv.writer(file)

    headers = [
        "Departamento",
        "Total de Cursos"
    ]
    writer.writerow(headers)

    for department, grades in group_by_department.items():
        row = [
            department,
            grades,
        ]
        writer.writerow(row)

print(data)
