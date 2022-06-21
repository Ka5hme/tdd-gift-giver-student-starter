class ExpressError extends Error{
    constructor(message, status){
        this.message = message
        this.status = status
    }
}

class BadRequestError extends ExpressError{
   constructor(message){
    this.message = message == null ? "Bar Request" : message
    this.status=400
   }
}

class NotFoundError extends ExpressError{
    constructor(message){
        this.message = message == null ? "Not Found" : message
        this.status=404
       }
}

module.exports = {ExpressError, NotFoundError, BadRequestError}
  