import React from 'react';

const Footer = () => {
  return (
    <div>
      <ul>
        <li>Privacy Policy</li>
        <li>Languages</li>
        <li>Careers</li>
      </ul>
      <Email />
      <Phone />
      <Address />
    </div>
  )
};

const Email = () => {
  return (
    <div>
      <h3>Email Logo</h3>
      <h4>Email Sales</h4>
      <span>sales@email.com</span>
      <h4>Email General Inquiries</h4>
      <span>email@email.com</span>
    </div>
  )
};

const Phone = () => {
  return (
    <div>
      <h3>Phone Logo</h3>
      <h4>Call Sales</h4>
      <span>800.555.2333 (Main Office)</span>
      <span>800.556.2444 (Some Office)</span>
      <span>800.546.8888 (Toll Free)</span>
      <h4>Call General Inquiries</h4>
      <span>Phone: 801.393.4000</span>
      <span>Fax: 801.393.5000</span>
    </div>
  )
};

const Address = () => {
  return (
    <div>
      <h3>Address Logo</h3>
      <h4>Vist Us</h4>
      <span> 550 W 300 S Salt Lake City, UT 84105</span>
      <h4>Office Hours</h4>
      <span>Monday-Friday 8:30 AM- 5:00 PM MST</span>
    </div>
  )
};

export default Footer;
