var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Component, Inject } from '@angular/core';
import { MessageService } from './message.service';
var MessageComponent = (function () {
    function MessageComponent(messageService) {
        this.messageService = messageService;
    }
    MessageComponent.prototype.close = function () {
        this.message = null;
    };
    return MessageComponent;
}());
MessageComponent = __decorate([
    Component({
        selector: 'erdiko-message',
        providers: [MessageService],
        template: "\n<alert *ngIf=\"message\" [type]=\"message.type\" (click)=\"close()\">{{ message.body }}</alert>\n"
    }),
    __param(0, Inject(MessageService))
], MessageComponent);
export { MessageComponent };
//# sourceMappingURL=message.component.js.map