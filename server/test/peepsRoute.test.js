import chai, { expect } from "chai";
import chaiHttp from "chai-http";

import server from "../src/index.js";
import Peep from "../src/models/peepModel.js";
import testData from "./testData/testData.js";
const testDataArr = testData.data;

chai.use(chaiHttp);

xdescribe(`Testing post requests on the database`, () => {
  const testServer = chai.request(server).keepOpen();

  describe(`Testing a post request`, () => {
    it(`should create a Successful Post request`, async () => {
      const newPeep = {
        field: "test peep",
        userName: "testName",
      };
      const res = await testServer.post(`/`).send(newPeep);
      expect(res).to.have.status(201);
      expect(res.body).to.be.an(`object`);
    });
  });
});

xdescribe('Server/DB integration tests on requests to "/".', () => {
  beforeEach(async () => {
    try {
      await Peep.deleteMany();
      console.log(`peeps collection cleared`);
    } catch (error) {
      console.log(`Error clearing peeps collection`);
      throw new Error(`Clearing database error`);
    }

    try {
      await Peep.insertMany(testData);
      console.log(`Test data inserted into peeps collection`);
    } catch (error) {
      console.log(`Error inserting into peeps collection`);
      throw new Error(`Insert into database error`);
    }
  });

  it("should return all of the peep data documents found in testData", async () => {
    const res = await chai.request(server).get(`/`).send();
    expect(res).to.have.status(200);
    expect(res.body).to.be.an(`array`);
    expect(res.body.length).to.equal(testDataArr.length());
  });
});
