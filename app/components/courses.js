System.register(['angular2/core', '../services/course', '../directives/autogrow'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, course_1, autogrow_1;
    var CourseComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (course_1_1) {
                course_1 = course_1_1;
            },
            function (autogrow_1_1) {
                autogrow_1 = autogrow_1_1;
            }],
        execute: function() {
            CourseComponent = (function () {
                function CourseComponent(courseService) {
                    this.title = 'Some title';
                    this.courses = courseService.getCourses();
                }
                CourseComponent = __decorate([
                    core_1.Component({
                        selector: 'courses',
                        template: "\n        <h2>Courses</h2>\n        {{ title }}\n        <input type=\"text\" autoGrow>\n        <ul>\n            <li *ngFor= '#course of courses'>{{course}}</li>\n        </ul>\n        ",
                        providers: [course_1.CourseService],
                        directives: [autogrow_1.AutoGrowDirective]
                    }), 
                    __metadata('design:paramtypes', [course_1.CourseService])
                ], CourseComponent);
                return CourseComponent;
            }());
            exports_1("CourseComponent", CourseComponent);
        }
    }
});
//# sourceMappingURL=courses.js.map