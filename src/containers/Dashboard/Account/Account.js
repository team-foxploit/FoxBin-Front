import React from "react";

function Account() {
  return (
    <div class="container">
      <div class="row">
        <div class="card mb-3" style={{ maxWidth: "540px" }}>
          <div class="row no-gutters">
            <div class="col-md-4 col-lg-4">
              <img
                src="https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg"
                class="align-self-center mr-3"
                alt="..."
              />
            </div>
            <div class="col-md-8 col-lg-8">
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p class="card-text">
                  <small class="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Account;
