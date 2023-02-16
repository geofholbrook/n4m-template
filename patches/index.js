"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var max_api_1 = __importDefault(require("max-api"));
max_api_1.default.outlet({ POST_LEVELS: max_api_1.default.POST_LEVELS });
max_api_1.default.addHandler("respond", function () {
    setInterval(function () { return max_api_1.default.outlet("this works"); }, 1000);
});
