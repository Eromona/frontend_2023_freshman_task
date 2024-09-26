from flask_wtf import FlaskForm  # 导入FlaskForm类,这是WTForms集成到Flask中的表单基类
from wtforms import StringField, SubmitField, IntegerField  # 导入我们需要的表单字段类,这里导入了字符串字段和提交按钮字段
from wtforms.validators import DataRequired  # 导入验证器类DataRequired,用于对字段进行必填验证


class LoginForm(FlaskForm):
    csrf_enabled = False
    user = StringField('User', validators=[DataRequired()])
    password = StringField('Password', validators=[DataRequired()])
    submit = SubmitField('Submit')


class MainForm(FlaskForm):
    csrf_enabled = False
    id = IntegerField('Id', validators=[DataRequired()])
    username = StringField('UserName', validators=[DataRequired()])
    college = StringField('College', validators=[DataRequired()])
    major = StringField('Major', validators=[DataRequired()])
    grade = IntegerField('Grade', validators=[DataRequired()])
    submit = SubmitField('Submit')


