import './Footer.css'
export default function Footer() {
    return (
        <footer class="footer">

    <div class="container">

        <div class="footer-logo">
            <h2>TOMYSKIN</h2>
            <p>
                Clean skincare products made to help your skin glow naturally.
            </p>
        </div>

        <div class="footer-links">
            <h3>Quick Links</h3>

            <a href="#">Home</a>
            <a href="#">Products</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
        </div>

        <div class="footer-links">
            <h3>Support</h3>

            <a href="#">FAQs</a>
            <a href="#">Shipping</a>
            <a href="#">Returns</a>
            <a href="#">Privacy Policy</a>
        </div>

        <div class="newsletter">
            <h3>Subscribe</h3>

            <p>
                Get updates about new arrivals and exclusive offers.
            </p>

            <div class="input-box">
                <input type="email" placeholder="Enter your email" />
                <button>→</button>
            </div>
        </div>

    </div>

    <div class="bottom-footer">
        <p>© 2026 TOMYSKIN. All rights reserved.</p>
    </div>

</footer>
    )
}

