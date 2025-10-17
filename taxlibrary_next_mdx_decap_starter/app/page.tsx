    export default function HomePage() {
  return (
    <main>
      {/* Hero */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1>Expert UK Tax Information at Your Fingertips</h1>
              <p>
                Comprehensive tax guidance, updates, and analysis for accountants,
                tax advisers, and business owners.
              </p>
              <div className="hero-buttons">
                <a href="/pricing" className="btn-primary">View Plans</a>
                <a href="/resources" className="btn-secondary">Learn More</a>
              </div>
            </div>

            <div className="email-capture">
              <h3>Get Free Tax Updates</h3>
              <p>Register for access to free content and receive our weekly tax bulletin</p>
              <form className="email-form" onSubmit={(e) => e.preventDefault()}>
                <input type="text" placeholder="Full Name" required />
                <input type="email" placeholder="Email Address" required />
                <input type="text" placeholder="Company (Optional)" />
                <button type="submit">Get Free Access</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="categories" id="resources">
        <div className="container">
          <div className="section-header">
            <h2>Explore Our Tax Resources</h2>
            <p>Comprehensive coverage across all areas of UK taxation</p>
          </div>

          <div className="category-grid">
            <a className="category-item" href="/resources/corporation-tax">
              <div className="category-icon">💼</div>
              <h4>Corporation Tax</h4>
              <p>Company taxation, reliefs, groups, and international aspects</p>
            </a>

            <a className="category-item" href="/resources/income-tax">
              <div className="category-icon">👤</div>
              <h4>Income Tax &amp; NIC</h4>
              <p>Personal taxation, PAYE, benefits, and self-employment</p>
            </a>

            <a className="category-item" href="/resources/vat">
              <div className="category-icon">🏪</div>
              <h4>VAT</h4>
              <p>VAT schemes, international trade, and MTD</p>
            </a>

            <a className="category-item" href="/resources/cgt">
              <div className="category-icon">📈</div>
              <h4>Capital Gains Tax</h4>
              <p>Asset disposals, reliefs, and planning opportunities</p>
            </a>

            <a className="category-item" href="/resources/property">
              <div className="category-icon">🏠</div>
              <h4>Property Taxes</h4>
              <p>SDLT, LBTT, LTT, and property income taxation</p>
            </a>

            <a className="category-item" href="/resources/iht">
              <div className="category-icon">💰</div>
              <h4>Inheritance Tax</h4>
              <p>Estate planning, trusts, and lifetime transfers</p>
            </a>

            <a className="category-item" href="/resources/international">
              <div className="category-icon">🌍</div>
              <h4>International Tax</h4>
              <p>Cross-border transactions, treaties, and transfer pricing</p>
            </a>

            <a className="category-item" href="/resources/compliance">
              <div className="category-icon">⚖️</div>
              <h4>Tax Compliance</h4>
              <p>Deadlines, penalties, investigations, and disputes</p>
            </a>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="pricing" id="pricing">
        <div className="container">
          <div className="section-header">
            <h2>Choose Your Plan</h2>
            <p>Flexible pricing for practices of all sizes</p>
          </div>

          <div className="pricing-cards">
            <div className="pricing-card">
              <h3>Essential</h3>
              <div className="price">£49<span>/month</span></div>
              <ul className="pricing-features">
                <li>Core tax content library</li>
                <li>Weekly tax bulletin</li>
                <li>Basic calculators</li>
                <li>Email support</li>
                <li>1 user license</li>
              </ul>
              <a className="btn-primary" style={{ width: '100%' }} href="/pricing">Start Free Trial</a>
            </div>

            <div className="pricing-card featured">
              <h3>Professional</h3>
              <div className="price">£99<span>/month</span></div>
              <ul className="pricing-features">
                <li>Everything in Essential</li>
                <li>Advanced calculators &amp; tools</li>
                <li>Priority support</li>
                <li>3 user licenses</li>
                <li>Downloadable guides</li>
                <li>Monthly tax briefings</li>
              </ul>
              <a className="btn-primary" style={{ width: '100%' }} href="/pricing">Start Free Trial</a>
            </div>

            <div className="pricing-card">
              <h3>Enterprise</h3>
              <div className="price">£249<span>/month</span></div>
              <ul className="pricing-features">
                <li>Everything in Professional</li>
                <li>Unlimited user licenses</li>
                <li>Custom branding options</li>
                <li>API access</li>
                <li>Dedicated account manager</li>
                <li>Bespoke training sessions</li>
              </ul>
              <a className="btn-primary" style={{ width: '100%' }} href="/pricing">Contact Sales</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
