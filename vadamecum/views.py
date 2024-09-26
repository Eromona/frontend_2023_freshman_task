from flask import request, render_template, redirect, url_for, flash
from forms import LoginForm, MainForm
from models import Students, User


def index():
    page = request.args.get('page', 1, type=int)
    students = Students.query.order_by(Students.id).paginate(page=page, per_page=20)
    return render_template('index.html', students=students)


def login():
    form = LoginForm()
    if request.method == 'POST':
        if form.validate_on_submit():       # 调用validate_on_submit()进行表单验证
            user = User.query.filter_by(user=form.user.data).first()
            if user and user.password == form.password.data:
                return redirect(url_for('index'))
            else:
                flash('无效的用户名或密码')
    return render_template('login.html', form=form)


def edit_student(id):
    form = MainForm()
    if request.method == 'POST':
        if form.validate_on_submit():
            data = Students.query.filter_by(id=form.id.data).first()
            data.username = form.username.data
            data.college = form.college.data
            data.major = form.major.data
            data.grade = form.grade.data
