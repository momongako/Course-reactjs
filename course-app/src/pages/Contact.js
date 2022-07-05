import React from 'react';

const Contact = () => {
  return (
    <div className="contact-sect">
      <div className="container-fluid">
        <div className="row m-0">
          <div className="col-sm-6 col-lg-4">
            <div className="contact_location">
              <div className="icon">
                <img
                  src="https://bn8p3.csb.app/images/cicon4.png"
                  alt="Location Icon"
                />
              </div>
              <h4>Địa chỉ</h4>
              <p>
                Peakview Tower, Phố Hoàng Cầu, Ô Chợ Dừa, Đống Đa, Hà Nội, Việt
                Nam
              </p>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4">
            <div className="contact_location">
              <div className="icon">
                <img
                  src="https://raw.githubusercontent.com/Ak-SK/courseapp/d0c5023fbce950ba5f6d4e6c2a7fac2d22de1d9a/public/images/cicon2.png"
                  alt="Call Icon"
                />
              </div>
              <h4>Phone</h4>
              <a href="tel:034.960.1818" className="contact">
                034.960.1818
              </a>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4">
            <div className="contact_location">
              <div className="icon">
                <img
                  src="https://bn8p3.csb.app/images/cicon3.png"
                  alt="Mail Icon"
                />
              </div>
              <h4>Email</h4>
              <a href="mailto:thev98@gmail.com" className="contact">
                thev98@gmail.com
              </a>
            </div>
          </div>
        </div>
        <div className="row p-20 m-0">
          <div className="map-grid col-md-6 col-lg-6 col-xl-6">
            <div className="mapouter">
              <div className="gmap_canvas">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.3360329235875!2d105.82147621537564!3d21.019236386003673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135abb4623fb1d3%3A0x10291e8bc5361d64!2sPeakview%20Tower!5e0!3m2!1sen!2sus!4v1656921164507!5m2!1sen!2sus"
                  width={600}
                  height={450}
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <a href="https://www.online-timer.net" />
                <br />
                <a href="https://www.embedgooglemap.net">embedgooglemap.net</a>
              </div>
            </div>
          </div>
          <div className="form-grid col-md-6 col-lg-6 col-xl-6">
            <h4>Gửi phản hồi</h4>
            <form className="form-group" action="#" method="get">
              <label htmlFor="name">Họ và tên</label>
              <input type="text" className="ipbox" id="name" name="name" />
              <label htmlFor="mail">Email</label>
              <input type="mail" className="ipbox" id="mail" name="mail" />
              <label htmlFor="phone">Số điện thoại</label>
              <input type="phone" className="ipbox" id="number" name="number" />
              <label htmlFor="sub">Tiêu đề</label>
              <input type="text" className="ipbox" id="sub" name="subject" />
              <label htmlFor="yourm">Nội dung</label>
              <textarea rows={5} id="yourm" name="message" defaultValue={''} />
              <div className="button">
                <input
                  type="submit"
                  className="submit_btn"
                  name
                  defaultValue="Gửi"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
