export  function logErrors(err,req,res,next){
  console.error(err)
  next(err)
}

export  function errorHandler(err,req,res,next){
  res.status(500).json({
    message: err.message,
    stack: err.stack
  })
}

export  function BoomErrorHandler(err,req,res,next){
if(err.isBoom){
const {output}= err
  res.status(output.statusCode).json(output.payload)
} else{
  next(err)
}

}
