from logging import debug
from flask import Flask,render_template,request,flash
from flask.helpers import url_for
from flask.wrappers import Request
from flask_mysqldb import MySQL, MySQLdb
from werkzeug.utils import redirect

# Mysql Connection
app = Flask(__name__)
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = ''
app.config['MYSQL_DB'] = 'testsignos'
mysql = MySQL(app)
mysql = MySQL()

#Settings
app.secret_key = 'mysecretkey'

@app.route('/')
def Index():
    
    #cur = mysql.connection.cursor()
    #cur.execute('SELECT * FROM contacts')
    #data = cur.fetchall()
    return render_template('index.html')

@app.route('/insertarRespuesta', methods =['POST'])
def add_contact():
    if request.method == 'POST':
        hobbies = request.form['select1']
        tipoAmigo = request.form['select2']
        tipoPareja = request.form['select3']
        caracter = request.form['select4']
        trabajoEquipo = request.form['select5']
        signo = request.form['signo']
        cur = mysql.connection.cursor()
        cur.execute('INSERT INTO trespuestas (signozodiacal,hobbies,tipoAmigo,tipoPareja,caracter,trabajoEquipo) VALUES (%s,%s,%s,%s,%s,%s)',(signo,hobbies,tipoAmigo,tipoPareja,caracter,trabajoEquipo))
        mysql.connection.commit()
        flash('Respuesta enviada.')
        return redirect(url_for('Index'))

@app.route('/edit/<id>')
def get_contact(id):
    cur = mysql.connection.cursor()
    cur.execute('SELECT * FROM contacts WHERE id = %s', (id))
    data = cur.fetchall()
    return render_template('edit-contact.html', contact = data[0])

@app.route('/update/<id>', methods = ['POST'])
def update_contact(id):
    if request.method == 'POST':
        fullname = request.form['fullname']
        phone = request.form['phone']
        email = request.form['email']
        cur = mysql.connection.cursor()
        cur.execute("""
            UPDATE contacts
            SET fullname = %s,
                email = %s,
                phone = %s
            WHERE id = %s 
        """, (fullname,email,phone,id))
        mysql.connection.commit()
        flash('Contacto actualizado satisfactoriamente')
        return redirect(url_for('Index'))


@app.route('/delete/<string:id>')
def delete_contact(id):
    cur = mysql.connection.cursor()
    cur.execute('DELETE FROM contacts WHERE id = {0}'.format(id))
    mysql.connection.commit()
    flash('Contacto eliminado satisfactoriamente')
    return redirect(url_for('Index'))
if __name__ == '__main__':
    app.run(port=3000, debug=True)