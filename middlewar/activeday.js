const activeday =(req,res,next)=>{
const day = new Date().getDay();
console.log('day')

const hours = new Date().getHours();
console.log('hours')
if ((hours > 9) & (hours < 17) & (day > 0) & (day < 6)) {
  next();
} else {
  return res
    .status(401)
    .send({ msg: "sevice disponible Monday to Friday,  from 9 to 17" });
}
}
module.exports = activeday