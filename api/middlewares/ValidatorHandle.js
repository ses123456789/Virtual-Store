import * as Boom from '@hapi/boom';

export  function ValidatorHandler(schema,property){
return (req,res,next) =>{
  const data= req[property]
  const {error}= schema.validate(data, { abortEarly: false })
  if(error){
    next(Boom.badRequest(error))
  }
  next()
}
}
