<div widget-area="header">
</div>

<div class="row" 
        ng-app="myApp" 
        ng-controller="myCtrl">

    First Name: <input type="text" ng-model="firstName"><br>
    Last Name: <input type="text" ng-model="lastName"><br>
    <br>
    Full Name: {{firstName + " " + lastName}}
</div>
                        
<div widget-area="footer">
</div>