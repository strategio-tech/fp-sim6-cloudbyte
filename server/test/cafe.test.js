let mongoose = require("mongoose");
let Cafe = require("../models/Cafe.model");
let app = require("../app");

let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../app");

chai.use(chaiHttp);
chai.should();

// This test checks to see if it can retrieve a cafe from the database by the ID
describe("/GET cafe", () => {
  it("it should GET cafe by ID", (done) => {
    const id = "6346daafbc05b7ddbde156f0";
    chai
      .request(app)
      .get(`/cafe/find-one/${id}`)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a("object");
        done();
      });
  });
});

describe("/GET user", () => {
  it("it should GET user from DB by username", (done) => {
    const un = "stacy";
    chai
      .request(app)
      .get(`/user/test-user/${un}`)
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });
});
