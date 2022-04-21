"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Project_1 = __importDefault(require("../../models/Project"));
var Experience_1 = __importDefault(require("../../models/Experience"));
var Education_1 = __importDefault(require("../../models/Education"));
var Profile_1 = __importDefault(require("../../models/Profile"));
module.exports = {
    Query: {
        getProjects: function (_, _a) {
            var userId = _a.userId;
            return __awaiter(void 0, void 0, void 0, function () {
                var projects, err_1;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _b.trys.push([0, 2, , 3]);
                            return [4, Project_1.default.findById(userId).sort({ createdAt: -1 })];
                        case 1:
                            projects = _b.sent();
                            if (projects) {
                                return [2, projects];
                            }
                            else {
                                throw new Error("User has no projects");
                            }
                            return [3, 3];
                        case 2:
                            err_1 = _b.sent();
                            throw new Error(err_1);
                        case 3: return [2];
                    }
                });
            });
        },
        getEducations: function (_, _a) {
            var userId = _a.userId;
            return __awaiter(void 0, void 0, void 0, function () {
                var educations, err_2;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _b.trys.push([0, 2, , 3]);
                            return [4, Education_1.default.findById(userId).sort({ createdAt: -1 })];
                        case 1:
                            educations = _b.sent();
                            if (educations) {
                                return [2, educations];
                            }
                            else {
                                throw new Error("User has no educational record");
                            }
                            return [3, 3];
                        case 2:
                            err_2 = _b.sent();
                            throw new Error(err_2);
                        case 3: return [2];
                    }
                });
            });
        },
        getExperiences: function (_, _a) {
            var userId = _a.userId;
            return __awaiter(void 0, void 0, void 0, function () {
                var experiences, err_3;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _b.trys.push([0, 2, , 3]);
                            return [4, Experience_1.default.findById(userId).sort({ createdAt: -1 })];
                        case 1:
                            experiences = _b.sent();
                            if (experiences) {
                                return [2, experiences];
                            }
                            else {
                                throw new Error("User has no experiences");
                            }
                            return [3, 3];
                        case 2:
                            err_3 = _b.sent();
                            throw new Error(err_3);
                        case 3: return [2];
                    }
                });
            });
        }
    },
    Mutation: {
        createProject: function (_, _a, context) {
            var _b = _a.projectInput, name = _b.name, languages = _b.languages, description = _b.description, link = _b.link, image = _b.image;
            return __awaiter(void 0, void 0, void 0, function () {
                var newProject, project;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            if (name.trim() === '') {
                                throw new Error('name must not be empty');
                            }
                            if (languages.trim() === '') {
                                throw new Error('languages must not be empty');
                            }
                            if (link.trim() === '') {
                                throw new Error('link must not be empty');
                            }
                            newProject = new Project_1.default({
                                name: name,
                                languages: languages,
                                description: description,
                                link: link,
                                image: image,
                                createdAt: new Date().toISOString()
                            });
                            return [4, newProject.save()];
                        case 1:
                            project = _c.sent();
                            return [2, project];
                    }
                });
            });
        },
        createEducation: function (_, _a, context) {
            var _b = _a.eduInput, institution = _b.institution, duration = _b.duration, certificate = _b.certificate, major = _b.major;
            return __awaiter(void 0, void 0, void 0, function () {
                var newEducation, education;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            if (institution.trim() === '') {
                                throw new Error('institution must not be empty');
                            }
                            if (duration.trim() === '') {
                                throw new Error('duration must not be empty');
                            }
                            newEducation = new Education_1.default({
                                institution: institution,
                                duration: duration,
                                certificate: certificate,
                                major: major
                            });
                            return [4, newEducation.save()];
                        case 1:
                            education = _c.sent();
                            return [2, education];
                    }
                });
            });
        },
        createExperience: function (_, _a, context) {
            var _b = _a.exInput, duration = _b.duration, organisation = _b.organisation, responsibility = _b.responsibility, role = _b.role;
            return __awaiter(void 0, void 0, void 0, function () {
                var newExperience, experiences;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            if (responsibility.trim() === '') {
                                throw new Error('responsibility must not be empty');
                            }
                            if (duration.trim() === '') {
                                throw new Error('duration must not be empty');
                            }
                            newExperience = new Experience_1.default({
                                duration: duration,
                                organisation: organisation,
                                responsibility: responsibility,
                                role: role
                            });
                            return [4, newExperience.save()];
                        case 1:
                            experiences = _c.sent();
                            return [2, experiences];
                    }
                });
            });
        },
        createProfile: function (_, _a, context) {
            var _b = _a.profileInput, age = _b.age, gender = _b.gender, status = _b.status, number = _b.number, firstName = _b.firstName, middleName = _b.middleName, lastName = _b.lastName;
            return __awaiter(void 0, void 0, void 0, function () {
                var newProfile, profile;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            if (age.trim() === '') {
                                throw new Error('age must not be empty');
                            }
                            if (gender.trim() === '') {
                                throw new Error('gender must not be empty');
                            }
                            if (status.trim() === '') {
                                throw new Error('status must not be empty');
                            }
                            if (firstName.trim() === '') {
                                throw new Error('firstName must not be empty');
                            }
                            if (middleName.trim() === '') {
                                throw new Error('middleName must not be empty');
                            }
                            if (lastName.trim() === '') {
                                throw new Error('lastName must not be empty');
                            }
                            newProfile = new Profile_1.default({
                                age: age,
                                gender: gender,
                                status: status,
                                number: number,
                                firstName: firstName,
                                middleName: middleName,
                                lastName: lastName
                            });
                            return [4, newProfile.save()];
                        case 1:
                            profile = _c.sent();
                            return [2, profile];
                    }
                });
            });
        }
    }
};
