from flask import Flask
from models import db
import views

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///students.db'
app.config['SECRET_KEY'] = 'secret key'
db.init_app(app)


@app.route("/")
def index():
    return views.index()


@app.route("/login", methods=['GET', 'POST'])
def login():
    return views.login()


@app.route('/api/students/edit/<int:id>', methods=['POST'])
def edit_student(id):
    return views.edit_student(id)



@app.route('/api/students/delete/<int:id>', methods=['DELETE'])
def delete_student(id):
    return views.delete_student(id)



if __name__ == "__main__":
    app.run(debug=True)
