const parse = require('../src/parse');

it("parse", () => {
  const input =`{
    "getModel": {
        "route": "GET /model/:id", // security=[]
        "req": {
            "query": {
                "pageSize": 10, // maximum=10
                "pageNo": 1, 
            },
            "params": {
                "id": 32234, // type=integer format=int32
            },
            "headers": {
                "X-ORG-ID": 32432
            },
            "body": { //
                "integer": 32, // format=int64
                "number": 16.23, // format=float
                "bool": true,
                "null": null,
                "array": [
                    "1",
                    "2",
                ]
                "object": {
                    "foo": 3
                }
            }
        },
        "res": {
            "integer": 32, // format=int64
            "number": 16.23, // format=float
            "bool": true,
            "null": null,
            "array": [
                "1",
                "2",
            ]
            "object": {
                "password": "a234324" // minLength=6
            }
        }
    }
}`

  const output = [
    {
      handler: 'getModel',
      method: 'get',
      path: '/model/:id',
      security: [],
      req: {
        query: {
          pageSize: {
            raw: 10,
            type: 'number',
            maximum: 10,
          },
          pageNo: {
            raw: 1,
            type: 'number',
          }
        },
        parmas: {
          id: {

          }
        }
      }
    }
  ]

  expect(parse(input)).toEqual(output);
});