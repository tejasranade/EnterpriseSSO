"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var kinvey_nativescript_sdk_1 = require("kinvey-nativescript-sdk");
var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.isLoggedIn = false;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.submit = function () {
        var _this = this;
        if (kinvey_nativescript_sdk_1.Kinvey.User.getActiveUser() == null) {
            kinvey_nativescript_sdk_1.Kinvey.User.loginWithMIC('http://example.com', kinvey_nativescript_sdk_1.Kinvey.AuthorizationGrant.AuthorizationCodeLoginPage, { version: 'v2' })
                .then(function (user) {
                alert("Logged in!");
                console.log("user: " + user);
                _this.isLoggedIn = true;
            })
                .catch(function (error) {
                alert("Error!");
                console.log("error: " + error);
            });
        }
        else {
            kinvey_nativescript_sdk_1.Kinvey.User.logout()
                .then(function () {
                _this.isLoggedIn = false;
            });
        }
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: "Home",
            moduleId: module.id,
            templateUrl: "./home.component.html"
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUdsRCxtRUFBaUQ7QUFRakQ7SUFHSTtRQUZBLGVBQVUsR0FBVyxLQUFLLENBQUM7SUFHM0IsQ0FBQztJQUVELGdDQUFRLEdBQVI7SUFDQSxDQUFDO0lBRUQsOEJBQU0sR0FBTjtRQUFBLGlCQXNCQztRQXJCRyxFQUFFLENBQUMsQ0FBQyxnQ0FBTSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxJQUFJLENBQUMsQ0FBQSxDQUFDO1lBQ3JDLGdDQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxvQkFBb0IsRUFBRSxnQ0FBTSxDQUFDLGtCQUFrQixDQUFDLDBCQUEwQixFQUFFLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxDQUFDO2lCQUV0SCxJQUFJLENBQUMsVUFBQyxJQUFpQjtnQkFDcEIsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDO2dCQUNwQixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsQ0FBQztnQkFDN0IsS0FBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7WUFDM0IsQ0FBQyxDQUFDO2lCQUNELEtBQUssQ0FBQyxVQUFDLEtBQXVCO2dCQUMzQixLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQyxDQUFDO1lBQ25DLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQztRQUNELElBQUksQ0FBQyxDQUFDO1lBQ0YsZ0NBQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO2lCQUNuQixJQUFJLENBQUM7Z0JBQ0YsS0FBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7WUFDNUIsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDO0lBR0wsQ0FBQztJQS9CUSxhQUFhO1FBTHpCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTTtZQUNoQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHVCQUF1QjtTQUN2QyxDQUFDOztPQUNXLGFBQWEsQ0FnQ3pCO0lBQUQsb0JBQUM7Q0FBQSxBQWhDRCxJQWdDQztBQWhDWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcInVpL2J1dHRvblwiO1xyXG5cclxuaW1wb3J0IHsgS2ludmV5IH0gZnJvbSAna2ludmV5LW5hdGl2ZXNjcmlwdC1zZGsnO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiSG9tZVwiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vaG9tZS5jb21wb25lbnQuaHRtbFwiXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIGlzTG9nZ2VkSW46Ym9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgfVxyXG5cclxuICAgIHN1Ym1pdCgpIHsgICAgICAgIFxyXG4gICAgICAgIGlmIChLaW52ZXkuVXNlci5nZXRBY3RpdmVVc2VyKCkgPT0gbnVsbCl7XHJcbiAgICAgICAgICAgIEtpbnZleS5Vc2VyLmxvZ2luV2l0aE1JQygnaHR0cDovL2V4YW1wbGUuY29tJywgS2ludmV5LkF1dGhvcml6YXRpb25HcmFudC5BdXRob3JpemF0aW9uQ29kZUxvZ2luUGFnZSwgeyB2ZXJzaW9uOiAndjInIH0pXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAudGhlbigodXNlcjogS2ludmV5LlVzZXIpID0+IHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KFwiTG9nZ2VkIGluIVwiKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidXNlcjogXCIgKyB1c2VyKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNMb2dnZWRJbiA9IHRydWU7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3I6IEtpbnZleS5CYXNlRXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KFwiRXJyb3IhXCIpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJlcnJvcjogXCIgKyBlcnJvcik7XHJcbiAgICAgICAgICAgIH0pOyAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgS2ludmV5LlVzZXIubG9nb3V0KClcclxuICAgICAgICAgICAgLnRoZW4oKCk9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzTG9nZ2VkSW4gPSBmYWxzZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICB9XHJcbn1cclxuIl19