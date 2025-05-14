# Script de exemplo para futura migração do JSON para MySQL

import json
import mysql.connector

# Conectar ao banco MySQL
conn = mysql.connector.connect(
    host='localhost', user='root', password='sua_senha', database='rede_cruzeiro'
)
cursor = conn.cursor()

# Ler JSON de usuários
with open('../data/usuarios.json', 'r', encoding='utf-8') as f:
    usuarios = json.load(f)

for u in usuarios:
    cursor.execute(
        """
        INSERT INTO usuarios (id, nome, email, senhaHash, bio, fotoPerfil)
        VALUES (%s, %s, %s, %s, %s, %s)
        """,
        (u['id'], u['nome'], u['email'], u['senhaHash'], u['bio'], u['fotoPerfil'])
    )

conn.commit()
cursor.close()
conn.close()
print('Migração concluída.')
