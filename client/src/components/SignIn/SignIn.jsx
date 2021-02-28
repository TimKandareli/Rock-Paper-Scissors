import './signIn.sass'
const SignIn = () => {
  return (
      <form className='container d-flex flex-column'>
        <div className="col-md-4 offset-md-4">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        </div>
        <div className="col-md-4 offset-md-4">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1"/>
        </div>
        <button type="submit" className=" button btn btn-primary">Sign In</button>
      </form>
  )
}

export default SignIn

