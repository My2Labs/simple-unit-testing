const getMentorInfo = require("../src/3")

describe("getMentorInfo", (mentor, name) => {
    const mentors = [{
        name: 'Irina',
        title: 'Dr.',
        yearsOfExperience: 10
    }, {
        name: 'Ashleigh',
        title: 'Dame',
        yearsOfExperience: 20
    }, {
        name: 'Etza',
        title: 'Professor',
        yearsOfExperience: 30
    }];
    it("should exist", () => {
        expect(getMentorInfo).toBeDefined();
    });
    it("when finds a person's name then returns the mentor object", () => {
        expect(getMentorInfo(mentors, "Irina")).toEqual({
            fullName: "Dr. Irina",
            jobTitle: "Junior Developer",
            name: "Irina",
            title: "Dr.",
            yearsOfExperience: 10,
        });
    });
    it("when finds a person's name and experience with more than ten years", () => {
        expect(getMentorInfo(mentors, "Ashleigh")).toEqual({
            fullName: "Dame Ashleigh",
            jobTitle: "Junior Developer",
            name: "Ashleigh",
            title: "Dame",
            yearsOfExperience: 20,
        });
    });
    it("when finds a person's name and experience with more than twenty years", () => {
        expect(getMentorInfo(mentors, "Etza")).toEqual({
            fullName: "Professor Etza",
            jobTitle: "Junior Developer",
            name: "Etza",
            title: "Professor",
            yearsOfExperience: 30,
        });
    });
})