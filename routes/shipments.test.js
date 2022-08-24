"use strict";

const request = require("supertest");
const app = require("../app");
const AxiosMockAdapter = require(
  "axios-mock-adapter");
const axios = require("axios");
const axiosMock = new AxiosMockAdapter(axios);


describe("POST /", function () {
  test("valid", async function () {
    const resp = await request(app).post("/shipments").send({
      productId: 1000,
      name: "Test Tester",
      addr: "100 Test St",
      zip: "12345-6789",
    });

    expect(resp.body).toEqual({ shipped: expect.any(Number) });
  });

  test("invalid", async function () {
    const resp = await request(app).post("/shipments").send({
      productId: 1,
      name: "Test",
      addr: 2,
      zip: 5
    });
    expect(resp.statusCode).toEqual(400);
  });

  test("invalid", async function () {
    const resp = await request(app).post("/shipments").send({
      username: {}
    });
    expect(resp.statusCode).toEqual(400);
  });

});



