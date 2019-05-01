import React from 'react';

const Home = (props) => {
    return (
        <div className="container">
            <div className="jumbotron bg-primary pt-4 pb-4 mb-3 text-center">
                <h1 className="page-header display-4">Welcome!</h1>
                <h2 className="mb-3">To FoxBinary</h2>
                <p className="lead">Welcome to the binary trading redefined by the latest <strong>Machine Learning Predictions</strong></p>
                <hr className="my-4"/>
                <p>FoxBinary is an Automated Online Trading platform where you can let the machines do the predictions and make decisions and also do the trading for you...</p>
                <a className="btn btn-primary btn-lg mb-3" href="/signin" role="button">Get Started</a>
            </div>
            <div className="card mb-3">
                <div className="card-body">
                    <blockquote className="blockquote">
                        <p><strong>Machine Learning</strong> is a magic word that has invaded to our lives and it seems that most people consider it as a magic solution that will resolve all the issues of the humanity.</p>
                        <footer className="blockquote-footer">Quote by <cite title="Stathis Xenos">Stathis Xenos</cite></footer>
                    </blockquote>
                </div>
            </div>

            <div className="card mb-3">
                <div className="card-body">
                    <blockquote className="blockquote">
                        <p><strong>An automated trading system (ATS)</strong>, also referred to as algorithmic trading, is a computer program that creates orders and automatically submits them to a market center or exchange. The program will automatically generate orders based
                             on predefined set of rules using a trading strategy which is often based on technical analysis but can also be based on input from other electronic sources.</p>
                         <footer className="blockquote-footer">By <cite title="Wikipedia">Wikipedia</cite></footer>
                    </blockquote>
                </div>
            </div>

            <div className="card-deck mb-3">
              <div className="card text-white bg-info">
                <div className="card-header">What is Machine Learning?</div>
                <div className="card-body">
                  <h5 className="card-title">Don't you know?</h5>
                  <p className="card-text text-justify">Machine learning has nothing to do with engines, pistons and steam. Machine learning is an application of Artificial Intelligence where a system can learn and improve
                       the knowledge and the experience of the past without being programmed explicitly.</p>
                </div>
                <div className="card-footer">
                  <small className="text-muted">@foxbinary</small>
                </div>
              </div>
              <div className="card text-white bg-primary">
                <div className="card-header">Why Machine Learning?</div>
                <div className="card-body">
                  <h5 className="card-title">Why not?</h5>
                  <p className="card-text text-justify">Machine learning is an evolving field and the effectiveness of machine learning can be seen in day to day life in all sorts of fields including trading is going to increase.</p>
                </div>
                <div className="card-footer">
                  <small className="text-muted">@foxbinary</small>
                </div>
              </div>
              <div className="card text-white bg-success">
                <div className="card-header">Is it Working?</div>
                <div className="card-body">
                  <h5 className="card-title">Everything is not 100% perfect.</h5>
                  <p className="card-text text-justify">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                </div>
                <div className="card-footer">
                  <small className="text-muted">@foxbinary</small>
                </div>
              </div>
            </div>

        </div>
    )
}

export default Home;
