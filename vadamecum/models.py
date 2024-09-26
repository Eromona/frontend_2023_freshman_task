from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()


class Students(db.Model):
    __tablename__ = "students"
    index = db.Column(db.Integer, primary_key=True, autoincrement=True)
    id = db.Column(db.Integer, unique=True, nullable=False)
    username = db.Column(db.String(5), unique=True, nullable=False)
    college = db.Column(db.String(20), nullable=False)
    major = db.Column(db.String(30), nullable=False)
    grade = db.Column(db.String(4), nullable=False)

    editing = db.Column(db.Boolean, default=False)

    ix_name = db.Index('ix_students_username', 'username', unique=True)
    ix_id = db.Index('ix_students_id', 'id', unique=True)

    def __repr__(self):
        return f'<Student {self.username}>'


class User(db.Model):
    __tablename__ = "user"
    index = db.Column(db.Integer, primary_key=True, autoincrement=True)
    user = db.Column(db.String(10), unique=True, nullable=False)
    password = db.Column(db.String(18), nullable=False)

    ix_user = db.Index('ix_user_user', 'user', unique=True)
