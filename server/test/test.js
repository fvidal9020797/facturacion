const assert = require("assert");
const request = require('supertest');
const { app } = require("../server");

describe("Express app", () => {
    it("GET /test", (done) => {
        request(app)
            .get('/test')
            .end((err, response) => {
                assert(response.body.status == "ok");
                done();
            });
    });
});