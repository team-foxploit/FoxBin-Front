import React from "react";

function Account() {
  return (
    <div className="container">
        <div className="row">
            <div className="col">
                <div className="card mb-3">
                    <h3 className="card-header">Your Account</h3>
                    <div className="card-body">
                        <h5 className="card-title">This is your FoxBinary Account</h5>
                        <h6 className="card-subtitle text-muted">This is linked with binary.com platform (or not).</h6>
                    </div>
                    <div className="card-body">
                        <p className="card-text">You can change the linked state with the binary.com platform at any time.</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><span className="text-muted">First Name: </span>Luke</li>
                        <li className="list-group-item"><span className="text-muted">Last Name: </span>SkyWalker</li>
                        <li className="list-group-item"><span className="text-muted">Email Address: </span>someemail@host.domain</li>
                    </ul>
                    <div className="card-body">
                        <a href="/integra" className="card-link">Update token</a>
                        <a href="db" className="card-link">Edit profile</a>
                    </div>
                    <div className="card-footer text-muted">
                        Last login : 2 days ago
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Account;
