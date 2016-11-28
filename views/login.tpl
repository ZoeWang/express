{%extends 'layout.tpl'%}

{%block content%}
<div class="container">
    <form class="col-sm-offset-4 col-sm-4 form-horizontal" role="form" method="post">
        <fieldset>
            <legend>用户登录</legend>
            <div class="form-group">
                <label class="col-sm-3 control-label" for="username">用户名</label>
                <div class="col-sm-9">
                    <input type="text" class="form-control" id="username" name="username" placeholder="用户名" required>
                </div>
            </div>
            <div class="form-group">
                <label class="col-sm-3 control-label" for="password">密码</label>
                <div class="col-sm-9">
                    <input type="password" class="form-control" id="password" name="password" placeholder="密码" required>
                </div>
            </div>
            <div class="form-group">
                <div class="col-sm-offset-3 col-sm-9">
                    <button type="submit" class="btn btn-primary">登录</button>
                </div>
            </div>
        </fieldset>
    </form>
 </div>
{%endblock%}