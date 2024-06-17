import React from 'react'
import '../components/Certificate.css';
import logo from '../assets/logo.svg'
const Certificate = () => {
  return (
    <div className="container bodyyy">
      <div className="container pm-certificate-container">
        <div className="outer-border" />
        <div className="inner-border" />
        <div className="pm-certificate-border col-xs-12">
          <div className="row pm-certificate-header">
            <div className="pm-certificate-title cursive col-xs-12 text-center">
              <h2 >Source Nest contribution certificate</h2>
              <img src={logo} alt="" style={{ width: '20%', marginTop: '-35px', marginBottom: '-70px' }} />
            </div>
          </div>
          <div className="row pm-certificate-body">
            <div className="pm-certificate-block">
              <div className="col-xs-12">
                <div className="row">
                  <div className="col-xs-2">{/* LEAVE EMPTY */}</div>
                  <div className="pm-certificate-name underline margin-0 col-xs-8 text-center">
                    <span className="pm-name-text bold" style={{ marginBottom: '-100px' }}>Name</span>
                  </div>
                  <div className="col-xs-2">{/* LEAVE EMPTY */}</div>
                </div>
              </div>
              <div className="col-xs-12">
                <div className="row">
                  <div className="col-xs-2">{/* LEAVE EMPTY */}</div>
                  <div className="pm-earned col-xs-8 text-center">
                    <span className="pm-earned-text padding-0 block cursive">
                      has successfully contributed to
                    </span>
                    <span className="pm-credits-text block bold sans">
                      Quick Doc Finder Project
                    </span>
                  </div>
                  <div className="col-xs-2">{/* LEAVE EMPTY */}</div>
                  <div className="col-xs-12" />
                </div>
              </div>
              <div className="col-xs-12">
                <div className="row">
                  <div className="col-xs-2">{/* LEAVE EMPTY */}</div>
                  <div className="pm-course-title col-xs-8 text-center">
                    <span className="pm-earned-text block cursive">
                      while completing the training course entitled
                    </span>
                  </div>
                  <div className="col-xs-2">{/* LEAVE EMPTY */}</div>
                </div>
              </div>
              <div className="col-xs-12">
                <div className="row">
                  <div className="col-xs-2">{/* LEAVE EMPTY */}</div>
                  <div className="pm-course-title underline col-xs-8 text-center">
                    <span className="pm-credits-text block bold sans">
                      React full stack development
                    </span>
                  </div>
                  <div className="col-xs-2">{/* LEAVE EMPTY */}</div>
                </div>
              </div>
            </div>
            <div className="col-xs-12">
              <div className="row">
                <div className="pm-certificate-footer">

                  <div className="col-xs-4">{/* LEAVE EMPTY */}</div>
                  <div className="col-xs-4 pm-certified col-xs-4 text-center">
                    <span className="pm-credits-text block sans">Date Completed</span>
                    15th June, 2024
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Certificate