"use strict";


const AxiosMockAdapter = require(
  "axios-mock-adapter");
const axios = require("axios");
const axiosMock = new AxiosMockAdapter(axios);

const {
  shipProduct, SHIPIT_SHIP_URL,
} = require("./shipItApi");



test("shipProduct", async function () {
  axiosMock.onPost(SHIPIT_SHIP_URL).reply(200, {
    receipt: {
      itemId: 1000,
      name: "Test Tester",
      addr: "100 Test St",
      zip: "12345-6789",
      shipId: 1,
    },
  });

  const shipId = await shipProduct({
    productId: 1000,
    name: "Test Tester",
    addr: "100 Test St",
    zip: "12345-6789",
  });
  
  console.log(shipId)
  expect(shipId).toEqual(1);

});

//   axiosMock.onPost(`${SHIPIT_SHIP_URL}`)
//     .reply(201, { shipped: expect.any(Number) })

//   const shipId = await shipProduct({
//     productId: 1000,
//     name: "Test Tester",
//     addr: "100 Test St",
//     zip: "12345-6789",
//   });
//   console.log(shipId)
//   expect(shipId.shipped).toEqual(expect.any(Number));
// });




// test("fact about 7", async function () {

//   axiosMock.onGet(`${BASE_URL}/7`)
//       .reply(200, { fact: "7 is lucky" });

//   const res = await getFact(7);
//   expect(res).toEqual("7 is lucky");
// });