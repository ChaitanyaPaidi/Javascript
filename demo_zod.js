// ZOD demo code on how zod works

const zod = require('zod');

function validateInput(obj){
  const schema = zod.object({
    email: zod.string().email(),
    password: zod.string().min(8).max(30)
  })
  const response = schema.safeParse(obj);
  console.log(response);
}

validateInput({
  email:"anilab@gmail.com",
  password:"2345"
});
