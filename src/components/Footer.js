import React, { Component } from "react";
import "../scss/footer.scss";

class Footer extends Component {
  render() {
    if (this.props.sharedBasicInfo) {
      var networks = this.props.sharedBasicInfo.social.map(function (network) {
        return (
          <span key={network.name} className="m-4">
            <a href={network.url} target="_blank" rel="noopener noreferrer">
              <i className={network.class}></i>
            </a>
          </span>
        );
      });
    }

    return (
      <footer>
        <section class="contact-sec sec-pad">
          <div class="container">
            <div class="row">
              <div class="col-md-6">
                <div class="contact-detail">
                  <h1 class="section-title">Contact us</h1>

                  <ul class="contact-ul">
                    <li>
                      <i class="fa fa-location-dot"></i> 169, FCI colony, Vanasthalipuram, Hyderabad
                    </li>

                    <li>
                      <i class="fa fa-phone"></i>
                      <a href="tel:08510004495">
                        <b>+91 8186901391</b>
                      </a>
                    </li>

                    <li>
                      <i class="fa-solid fa-envelope"></i>
                      <a href="mailto:pardeepkumar4bjp@gmail.com">
                        <b> IamHarikaMandula@gmail.com</b>
                      </a>
                    </li>
                  </ul>

                  <span>
                    <a href="#" class="fb">
                      <i class="fa-brands fa-facebook"></i>
                    </a>
                    <a href="#" class="insta">
                      <i class="fa-brands fa-instagram"></i>
                    </a>
                    <a href="#" class="twitter">
                      <i class="fa-brands fa-twitter"></i>
                    </a>
                  </span>
                </div>
              </div>

              <div class="col-md-6">
                <form action="#" class="contFrm" method="POST">
                  <div class="row">
                    <div class="col-sm-6">
                      <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        class="inptFld"
                        required
                      />
                    </div>

                    <div class="col-sm-6">
                      <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        class="inptFld"
                        required
                      />
                    </div>

                    <div class="col-sm-6">
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number"
                        class="inptFld"
                        required
                      />
                    </div>

                    <div class="col-sm-6">
                      <input
                        type="text"
                        name="sub"
                        placeholder="Subject"
                        class="inptFld"
                        required
                      />
                    </div>

                    <div class="col-12">
                      <textarea
                        class="inptFld"
                        rows=""
                        cols=""
                        placeholder="Your Message..."
                        required
                      ></textarea>
                    </div>

                    <div class="col-12">
                      <input
                        type="submit"
                        name="submit"
                        value="SUBMIT"
                        class="inptBtn"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div style={{textAlign: 'center', marginTop: '20px'}}>
              <p>
                {" "}
                Copyright &copy;
                <script>document.write(new Date().getFullYear());</script>
                All rights reserved | Harika
              </p>
            </div>
          </div>
        </section>
      </footer>
    );
  }
}

export default Footer;
