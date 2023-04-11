import { expect } from "chai";
import httpMocks from "node-mocks-http";
import { indexRouteHandler } from "../../app/routers/index.router.js";

describe("UnitTest - Router - Index: GET /", () => {

  context("When no name is provided", () => {
    const expected = "Hello World";
    it(`should return '${expected}'`, (done) => {
      let request = httpMocks.createRequest({
        method: "GET",
        url: "/"
      });
      let response = httpMocks.createResponse();

      indexRouteHandler(request, response);

      expect(response.statusCode).to.equal(200);
      expect(response._getData()).to.equal(expected);

      done();
    });
  });

  context("When a name is provided", () => {
    const name = "John";
    const expected = `Hello ${name}`;
    it(`Should return '${expected}'`, (done) => {
      const request = httpMocks.createRequest({
        method: "GET",
        url: "/index",
        query: {
          name: name
        }
      });
      const response = httpMocks.createResponse();

      indexRouteHandler(request, response);

      expect(response.statusCode).to.equal(200);
      expect(response._getData()).to.equal(expected);

      done();
    });
  });

});