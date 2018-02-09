"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var kinvey_nativescript_sdk_1 = require("kinvey-nativescript-sdk");
var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
        var viewButton = this.loginButton.nativeElement;
        viewButton.text = (kinvey_nativescript_sdk_1.Kinvey.User.getActiveUser() == null ? "Login" : "Logout");
    };
    HomeComponent.prototype.submit = function () {
        var viewButton = this.loginButton.nativeElement;
        if (kinvey_nativescript_sdk_1.Kinvey.User.getActiveUser() == null) {
            kinvey_nativescript_sdk_1.Kinvey.User.loginWithMIC('http://example.com', kinvey_nativescript_sdk_1.Kinvey.AuthorizationGrant.AuthorizationCodeLoginPage, { version: 'v2' })
                .then(function (user) {
                alert("Logged in!");
                console.log("user: " + JSON.stringify(user));
                viewButton.text = "Logout";
            })
                .catch(function (error) {
                alert("Error!");
                console.log("error: " + error);
            });
        }
        else {
            var viewButton_1 = this.loginButton.nativeElement;
            kinvey_nativescript_sdk_1.Kinvey.User.logout()
                .then(function () {
                alert("Logged out!");
                viewButton_1.text = "Login";
            });
        }
    };
    __decorate([
        core_1.ViewChild("loginButton"),
        __metadata("design:type", core_1.ElementRef)
    ], HomeComponent.prototype, "loginButton", void 0);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RTtBQUd6RSxtRUFBaUQ7QUFRakQ7SUFJSTtJQUNBLENBQUM7SUFFRCxnQ0FBUSxHQUFSO1FBQ0ksSUFBSSxVQUFVLEdBQVcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUM7UUFDeEQsVUFBVSxDQUFDLElBQUksR0FBRyxDQUFDLGdDQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNqRixDQUFDO0lBRUQsOEJBQU0sR0FBTjtRQUNJLElBQUksVUFBVSxHQUFXLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDO1FBQ3hELEVBQUUsQ0FBQyxDQUFDLGdDQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLElBQUksQ0FBQyxDQUFBLENBQUM7WUFDckMsZ0NBQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLG9CQUFvQixFQUFFLGdDQUFNLENBQUMsa0JBQWtCLENBQUMsMEJBQTBCLEVBQUUsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLENBQUM7aUJBRXRILElBQUksQ0FBQyxVQUFDLElBQWlCO2dCQUNwQixLQUFLLENBQUMsWUFBWSxDQUFDLENBQUM7Z0JBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDN0MsVUFBVSxDQUFDLElBQUksR0FBRyxRQUFRLENBQUM7WUFDL0IsQ0FBQyxDQUFDO2lCQUNELEtBQUssQ0FBQyxVQUFDLEtBQXVCO2dCQUMzQixLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQyxDQUFDO1lBQ25DLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQztRQUNELElBQUksQ0FBQyxDQUFDO1lBQ0YsSUFBSSxZQUFVLEdBQVcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUM7WUFFeEQsZ0NBQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO2lCQUNuQixJQUFJLENBQUM7Z0JBQ0YsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDO2dCQUNyQixZQUFVLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQztZQUM5QixDQUFDLENBQUMsQ0FBQztRQUNQLENBQUM7SUFDTCxDQUFDO0lBbEN5QjtRQUF6QixnQkFBUyxDQUFDLGFBQWEsQ0FBQztrQ0FBYyxpQkFBVTtzREFBQztJQUZ6QyxhQUFhO1FBTHpCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTTtZQUNoQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHVCQUF1QjtTQUN2QyxDQUFDOztPQUNXLGFBQWEsQ0FxQ3pCO0lBQUQsb0JBQUM7Q0FBQSxBQXJDRCxJQXFDQztBQXJDWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwidWkvYnV0dG9uXCI7XHJcblxyXG5pbXBvcnQgeyBLaW52ZXkgfSBmcm9tICdraW52ZXktbmF0aXZlc2NyaXB0LXNkayc7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJIb21lXCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9ob21lLmNvbXBvbmVudC5odG1sXCJcclxufSlcclxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICAgIEBWaWV3Q2hpbGQoXCJsb2dpbkJ1dHRvblwiKSBsb2dpbkJ1dHRvbjogRWxlbWVudFJlZjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHsgXHJcbiAgICAgICAgbGV0IHZpZXdCdXR0b246IEJ1dHRvbiA9IHRoaXMubG9naW5CdXR0b24ubmF0aXZlRWxlbWVudDsgICAgICAgIFxyXG4gICAgICAgIHZpZXdCdXR0b24udGV4dCA9IChLaW52ZXkuVXNlci5nZXRBY3RpdmVVc2VyKCkgPT0gbnVsbCA/IGBMb2dpbmAgOiBgTG9nb3V0YCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3VibWl0KCkgeyAgICAgICAgXHJcbiAgICAgICAgbGV0IHZpZXdCdXR0b246IEJ1dHRvbiA9IHRoaXMubG9naW5CdXR0b24ubmF0aXZlRWxlbWVudDtcclxuICAgICAgICBpZiAoS2ludmV5LlVzZXIuZ2V0QWN0aXZlVXNlcigpID09IG51bGwpe1xyXG4gICAgICAgICAgICBLaW52ZXkuVXNlci5sb2dpbldpdGhNSUMoJ2h0dHA6Ly9leGFtcGxlLmNvbScsIEtpbnZleS5BdXRob3JpemF0aW9uR3JhbnQuQXV0aG9yaXphdGlvbkNvZGVMb2dpblBhZ2UsIHsgdmVyc2lvbjogJ3YyJyB9KVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLnRoZW4oKHVzZXI6IEtpbnZleS5Vc2VyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBhbGVydChcIkxvZ2dlZCBpbiFcIik7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInVzZXI6IFwiICsgSlNPTi5zdHJpbmdpZnkodXNlcikpO1xyXG4gICAgICAgICAgICAgICAgdmlld0J1dHRvbi50ZXh0ID0gYExvZ291dGA7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3I6IEtpbnZleS5CYXNlRXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KFwiRXJyb3IhXCIpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJlcnJvcjogXCIgKyBlcnJvcik7XHJcbiAgICAgICAgICAgIH0pOyAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgbGV0IHZpZXdCdXR0b246IEJ1dHRvbiA9IHRoaXMubG9naW5CdXR0b24ubmF0aXZlRWxlbWVudDtcclxuICAgIFxyXG4gICAgICAgICAgICBLaW52ZXkuVXNlci5sb2dvdXQoKVxyXG4gICAgICAgICAgICAudGhlbigoKT0+IHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KFwiTG9nZ2VkIG91dCFcIik7XHJcbiAgICAgICAgICAgICAgICB2aWV3QnV0dG9uLnRleHQgPSBgTG9naW5gOyAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==