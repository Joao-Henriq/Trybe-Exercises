import json 

with open("pokemons.json") as file:
    # content = file.read()
    #  pokemons = json.loads(content)["results"] 
    # ou
    pokemons = json.load(file)["results"]

grass_type_pokemons = [
    pokemon for pokemon in pokemons if "Grass" in pokemon["type"]
]

with open("grass_pokemons.json", "w") as file:
    # json_to_write = json.dumps(grass_type_pokemons) # conversão de Python para o formato json (str)
    # file.write(json_to_write) # ou 
    json.dump(grass_type_pokemons, file)


print(pokemons[0])