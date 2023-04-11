import { expect } from "chai";
import httpMocks from "node-mocks-http";
import InternalMiddleware from "../../app/middlewares/internal.middleware.js";

describe("UnitTest - Middleware - InternalMiddleware", () => {

  context("When access to internal route", () => {
    it('Should be is internal response', function (done) {
      const req =  httpMocks.createRequest({
        method: "GET",
        url: `/internal`
      })
      const res = httpMocks.createResponse();

      InternalMiddleware(req, res, function () {
        // Check res.internal
        expect(res).to.have.property('internal').to.be.a('boolean').to.eq(true);
      })
      done();
    });
  });

  context("When access to external route", () => {
    it('Should be is external response', function (done) {
      const req =  httpMocks.createRequest({
        method: "GET",
        url: `/`
      })
      const res = httpMocks.createResponse();

      InternalMiddleware(req, res, function () {
        // Check res.internal
        expect(res).to.have.property('internal').to.be.a('boolean').to.eq(false);
      })
      done();
    });
  });

});