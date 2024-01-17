import React from "react";
import "./app.css";
import fetchData from "./data";

const dataR = fetchData();
console.log(dataR);

const App = () => {
  return (
    <React.Fragment>
      <LogoSection></LogoSection>
      <Navsection></Navsection>
      <NavDetails></NavDetails>
      <Tabling></Tabling>
      <Table></Table>
      <AboutUs></AboutUs>
      <Footer></Footer>
    </React.Fragment>
  );
};

const LogoSection = () => {
  return (
    <div className="logo-section">
      <img src={process.env.PUBLIC_URL + "./UoN_Logo.png"} alt="Logo"></img>
    </div>
  );
};
const Navsection = () => {
  return (
    <div className="navbar-section">
      <a href="#" className="navbar-tab">
        Portal Home
      </a>
      <a href="#" className="navbar-tab active ">
        Student Fees
      </a>
      <a href="#" className="navbar-tab">
        Timetables
      </a>
      <a href="#" className="navbar-tab">
        Course Registration
      </a>
      <a href="#" className="navbar-tab">
        results
      </a>
      <a href="#" className="navbar-tab">
        Enquiries
      </a>
      <a href="#" className="navbar-tab">
        Book Room
      </a>
      <a href="#" className="navbar-tab">
        Logout
      </a>
    </div>
  );
};

const NavDetails = () => {
  return (
    <div className="details">
      <a href="#">Fee Statement</a>
      <a href="#">Detailed Fee</a>
      <a href="#">Pay Fee Online</a>
    </div>
  );
};

const Tabling = () => {
  return (
    <div className="tabling">
      {<p>L50/77695/2012 KAGAU NANCY RUGURU (Regular/Intergrated)</p>}
      {<TablingLogo></TablingLogo>}
    </div>
  );
};

// start of child in tabling component

const TablingLogo = () => {
  return (
    <div className="tablinglogo">
      <p>Postgraduate students&gt;&gt;</p>
      <a href="#">Download Your Admissions Letter</a>
      <a href="#">Download Joining Instructions</a>
    </div>
  );
};

// end of child in tabling component

const Table = () => {
  return (
    <table>
      <thead>
        <tr>
          <th>Transaction/Reciept Number</th>
          <th>Date</th>
          <th>Description</th>
          <th>Debits DR</th>
          <th>Credits CR</th>
          <th>Balance</th>
          <th>Current Rate</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>2200222048</td>
          <td>17/1/24</td>
          <td>Fees Payment</td>
          <td>0.00</td>
          <td>0.00</td>
          <td>-375,000.00</td>
          <td>KES=1</td>
        </tr>
        <tr>
          <td>153/97655</td>
          <td>17/1/24</td>
          <td>Fees Payable for Semester 2</td>
          <td>7,870,000.00</td>
          <td>0.00</td>
          <td>-375,000.00</td>
          <td>KES=1</td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>7,495,000.00</td>
          <td>-375,000.00</td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>Academic Year Totals</td>
          <td>7,870,000.00</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr></tr>
        <tr>
          <td></td>
          <td>Closing Balance</td>
          <td>-375,000.00</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>
  );
};

const AboutUs = () => {
  return (
    <React.Fragment>
      <a href="https://www.google.com/url?sa=t&amp;rct=j&amp;q=&amp;esrc=s&amp;source=web&amp;cd=&amp;cad=rja&amp;uact=8&amp;ved=2ahUKEwjV5JT5reD-AhUUi_0HHUSLCo0QFnoECA0QAQ&amp;url=https%3A%2F%2Fwww.uonbi.ac.ke%2Fabout-us&amp;usg=AOvVaw3i4NikaRrZzs5fjTkbIeKM">
        About Us
      </a>
      {
        <div className="bodycontent">
          <div className="content-section1">
            <h4>GOVERNMENT-SPONSORED (MODULE I) STUDENTS </h4>
            <h4>PAYMENT INSTRUCTIONS</h4>
            <p>1. Bank Account</p>
            <p>=&gt; Cash Deposits, EFT or RTGS transfer to UON </p>
            <p>
              Module I Collection Account No. 2032770830 at ABSA Bank Plaza
              Branch
            </p>
            <p>2. Mpesa Paybill </p>
            <p>=&gt; The Business Number is 503003</p>
            <p>=&gt; The Account Number is your Student Registration Number</p>
          </div>
          <div class="content-section2">
            <h4>SELF-SPONSORED PROGRAMMES (MODULE II)</h4>
            <h4>PAYMENT INSTRUCTIONS/ OPTIONS</h4>
            <p>1. Bank Account</p>
            <p>=&gt; Cash Deposits, EFT or RTGS transfer to UON </p>
            <p>
              Module II Collection Account No. 2032771362 at ABSA Bank Plaza
              Branch
            </p>
            <p>=&gt; Cash Deposits, EFT or RTGS transfer to UON</p>
            <p>
              Module II US$ Account No. 2032770625 at ABSA Bank Plaza Branch
            </p>
            <p>2. Mpesa Paybill</p>
            <p>=&gt; The Business Number is 300059 </p>
            <p>=&gt; The Account Number is your Student Registration Number</p>
          </div>
        </div>
      }
    </React.Fragment>
  );
};

const Footer = () => {
  return (
    <div className="footer">
      <img src={process.env.PUBLIC_URL + "./UoN_Logo.png"} alt="logo"></img>
      <p>© 2023 University of Nairobi</p>
    </div>
  );
};

export default App;
