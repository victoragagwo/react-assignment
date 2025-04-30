import FAQs from "./FAQs";
import "../styling/autfaqs.css";
import { faEnvelope, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Foot from "../assets/foot.png";
function Autfaqs () {
    return(
        <div>
            <div className="autfaqs" id="faqs">
                <h1><span className="faq1">FAQS</span></h1>
            </div>
            <div className="autfaqs2">
                <div className="faqsmin">
                    <div className="faqsmin1">
                    <h3 style={{fontWeight:"normal"}} >How does URL shortening work</h3>
                    <FontAwesomeIcon icon={faMinus} style={{color: "#212121"}} className="minus"/>
                    </div>
                    <div>
                    <p>URL shortening works by taking a long URL and creating a shorter, condensed version that redirects to the original URL. When a user clicks on the shortened link, they are redirected to the intended destination.</p>
                    </div>
                </div>
            </div>
            <div className="autfaqs3">
                <div className="faqsadd">
                    <div className="faqsadd1">
                    <FAQs paragraph="Is it necessary to create an account to use the URL shortening service?"/>
                <FontAwesomeIcon icon={faPlus} style={{color: "#212121"}} className="plus" />
                    </div>
                </div>
            </div>
            <div className="autfaqs3">
                <div className="faqsadd">
                    <div className="faqsadd1">
                    <FAQs paragraph="Are the shortened links permanent? Will they expire?"/>
                <FontAwesomeIcon icon={faPlus} style={{color: "#212121"}} className="plus" />
                    </div>
                </div>
            </div>
            <div className="autfaqs3">
                <div className="faqsadd">
                    <div className="faqsadd1">
                    <FAQs paragraph="Are there any limitations on the number of URLs I can shorten?"/>
                <FontAwesomeIcon icon={faPlus} style={{color: "#212121"}} className="plus" />
                    </div>
                </div>
            </div>
            <div className="autfaqs3">
                <div className="faqsadd">
                    <div className="faqsadd1">
                    <FAQs paragraph="Can I customize the shortened URLs to reflect my brand or content?"/>
                <FontAwesomeIcon icon={faPlus} style={{color: "#212121"}} className="plus" />
                    </div>
                </div>
            </div>
            <div className="autfaqs3">
                <div className="faqsadd">
                    <div className="faqsadd1">
                    <FAQs paragraph="Can I track the performance of my shortened URLs?"/>
                <FontAwesomeIcon icon={faPlus} style={{color: "#212121"}} className="plus" />
                    </div>
                </div>
            </div>
            <div className="autfaqs3">
                <div className="faqsadd">
                    <div className="faqsadd1">
                    <FAQs paragraph="How secure is the URL shortening service? Are the shortened links protected against spam or malicious activity?"/>
                <FontAwesomeIcon icon={faPlus} style={{color: "#212121"}} className="plus" />
                    </div>
                </div>
            </div>
            <div className="autfaqs3">
                <div className="faqsadd">
                    <div className="faqsadd1">
                    <FAQs paragraph="What is a QR code and what can it do?"/>
                <FontAwesomeIcon icon={faPlus} style={{color: "#212121"}} className="plus" />
                    </div>
                </div>
            </div>
            <div className="autfaqs3">
                <div className="faqsadd" style={{marginBottom:"50px"}}>
                    <div className="faqsadd1">
                    <FAQs paragraph="Is there an API available for integrating the URL shortening service into my own applications or websites?"/>
                <FontAwesomeIcon icon={faPlus} style={{color: "#212121"}} className="plus" />
                    </div>
                </div>
            </div>
            <div className="rev">
                <h1 style={{color:"white"}}>Revolutionizing Link Optimization</h1>
                <button className="btn">Get Started</button>
            </div>
            <div className="footer">
                <div className="leftside">
                    <img src={Foot} alt="socials" className="socials" />
                </div>
                <div className="rightside">
                    <div className="r1">
                        <h4>Why Scissor ?</h4>
                        <p>Scissor 101</p>
                        <p>Integrations & API</p>
                        <p>Pricing</p>
                    </div>
                    <div className="r1">
                    <h4>Solutions</h4>
                        <p>Social Media</p>
                        <p>Digital Marketing</p>
                        <p>Customer Service</p>
                        <p>For Developers</p>
                    </div>
                    <div className="r1">
                    <h4>Products</h4>
                        <p>Link Management</p>
                        <p>QR Codes</p>
                        <p>Link-in-bio</p>
                    </div>
                    <div className="r1">
                    <h4>Company</h4>
                        <p>About Scissor</p>
                        <p>Careers</p>
                        <p>Partners</p>
                        <p>Press</p>
                        <p>Contact</p>
                        <p>Reviews</p>
                    </div>
                    <div className="r1">
                    <h4>Resources</h4>
                        <p>Blog</p>
                        <p>Resource Library</p>
                        <p>Developers</p>
                        <p>App Connectors</p>
                        <p>Support</p>
                        <p>Trust Center</p>
                        <p>Browser Extension</p>
                        <p>Mobile App</p>
                    </div>
                    <div className="r1">
                    <h4>Features</h4>
                        <p>Branded Links</p>
                        <p>Mobile Links</p>
                        <p>Campaign</p>
                        <p>Management &</p>
                        <p>Analytics</p>
                        <p>QR Code generation</p>
                    </div>
                    <div className="r1">
                    <h4>Legal</h4>
                        <p>Privacy Policy</p>
                        <p>Cookie Policy</p>
                        <p>Terms of Service</p>
                        <p>Acceptable Use Policy</p>
                        <p>Code of Conduct</p>
                    </div>
                    
                </div>

            </div>
            <div className="last">
                <p>Term of Service | Security | Scissor 2023</p>
            </div>
        </div>
    )
}


export default Autfaqs;