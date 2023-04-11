import { expect } from "chai";
import httpMocks from "node-mocks-http";
import { internalRouteHandler } from "../../app/routers/internal.router.js";

describe("UnitTest - Router - Internal - GET /internal", () => {

  context("When no name is provided", () => {
    const expected = "[Internal] Hello World";
    it(`should return '${expected}'`, (done) => {
      let request = httpMocks.createRequest({
        method: "GET",
        url: "/internal"
      });
      let response = httpMocks.createResponse();

      internalRouteHandler(request, response);

      expect(response.statusCode).to.equal(200);
      expect(response._getData()).to.equal(expected);

      done();
    });
  });

  context("When a name is provided", () => {
    const name = "David";
    const expected = `[Internal] Hello ${name}`;
    it(`Should return '${expected}''`, (done) => {
      const request = httpMocks.createRequest({
        method: "GET",
        url: "/internal",
        query: {
          name: name
        }
      });
      const response = httpMocks.createResponse();

      internalRouteHandler(request, response);

      expect(response.statusCode).to.equal(200);
      expect(response._getData()).to.equal(expected);

      done();
    });
  });

});