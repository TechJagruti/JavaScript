const jsonStr = `{

   "emp": [

       { "firstName": "Amit", "lastName": "Kumar" },

       { "firstName": "Jay", "lastName": "Sharma" },

       { "firstName": "Mohit", "lastName": "Patel" }

   ]

}`;

const obj = JSON.parse(jsonStr);

console.log(obj.emp[1].firstName);
