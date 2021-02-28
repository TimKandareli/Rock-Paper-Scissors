import './signUp.sass'
const SignUp = () => {
  return (
    <form className='container d-flex flex-column'>
      <div className="col-md-4 offset-md-4">
        <label htmlFor="exampleInputEmail1" className="form-label">User name</label>
        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
      </div>
      <div className="col-md-4 offset-md-4">
        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
      </div>
      <div className="col-md-4 offset-md-4">
        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
        <input type="password" className="form-control" id="exampleInputPassword1"/>
      </div>
      <button type="submit" className=" button btn btn-primary">Sign Up</button>
    </form>
  )
}

export default SignUp
