import React from 'react';

const Footer = (props) => {
    return (
        <footer className="footer bg-transparent mt-auto py-3">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <p>This is an experimental project and please consider yourself not to don't take too far with it, and we'll not be liable if some bad happens...</p>
                        <span className="text-center text-muted"><small>@foxploit</small></span>
                    </div>
                    <div className="col-md-6 text-center">
                        <h5>Stay in touch with us for more!</h5>
                        <ul className="list-inline">
                            <li className="list-inline-item"><a href="https://www.facebook.com/FOXPLOIT-TEAM"><i className="material-icons">offline_bolt</i></a></li>
                            <li className="list-inline-item"><a href="https://www.facebook.com/FOXPLOIT-TEAM"><i className="material-icons">offline_bolt</i></a></li>
                            <li className="list-inline-item"><a href="https://www.facebook.com/FOXPLOIT-TEAM"><i className="material-icons">offline_bolt</i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
