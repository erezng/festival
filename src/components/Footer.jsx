function footer() {
  return (
  <div className="container">
    <div className="row">
      <div className="col-md-6">
        <div className="first content">
          <h2>Follow us</h2>
          <p>This site built by EREZ GABAY 
            All rights reserved!</p>
        </div>
      </div>
      <div className="col-md-6">
        <div className="Second content">
          <h2>Contact us</h2>
            <div className="email">
              <div className="text py-2">
                email* 
              <div className="msg">
                <div className="text py-2">
                  message* 
                  <textarea name="name" id="" cols="30" rows="2"></textarea>
                </div>
                {/* <a className="btn btn-primary" value="Click" id="btn" id="btn" href="">Send</a> */}
              </div>
        </div>
      </div>
    </div>
    </div>
    </div>
    </div>

  )
}
export default footer
