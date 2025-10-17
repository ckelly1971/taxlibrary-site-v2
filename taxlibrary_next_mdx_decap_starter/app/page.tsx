

export default async function ResourcePage({ params }: any) {

}
  return (<main dangerouslySetInnerHTML={{ __html: `<section class="hero">
            <div class="container">
                <div class="hero-content">
                    <div class="hero-text">
                        <h1>Expert UK Tax Information at Your Fingertips</h1>
                        <p>Comprehensive tax guidance, updates, and analysis for accountants, tax advisers, and business owners.</p>
                        <div class="hero-buttons">
                            <a onclick="scrollToSection('pricing')" class="btn-primary">View Plans</a>
                            <a onclick="scrollToSection('features')" class="btn-secondary">Learn More</a>
                        </div>
                    </div>
                    <div class="email-capture">
                        <h3>Get Free Tax Updates</h3>
                        <p>Register for access to free content and receive our weekly tax bulletin</p>
                        <form class="email-form" onsubmit="handleEmailSubmit(event)">
                            <input type="text" placeholder="Full Name" required>
                            <input type="email" placeholder="Email Address" required>
                            <input type="text" placeholder="Company (Optional)">
                            <button type="submit">Get Free Access</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>

        <!-- Features Section -->
        <section class="features" id="features">
            <div class="container">
                <div class="section-header">
                    <h2>Why Choose The Tax Library?</h2>
                    <p>Everything you need to stay ahead of UK tax legislation</p>
                </div>
                <div class="features-grid">
                    <div class="feature-card">
                        <div class="feature-icon">📚</div>
                        <h3>Comprehensive Coverage</h3>
                        <p>In-depth analysis of all UK taxes including Income Tax, Corporation Tax, VAT, CGT, IHT, and Stamp Duty. Updated daily with the latest changes and interpretations.</p>
                    </div>
                    <div class="feature-card">
                        <div class="feature-icon">⚡</div>
                        <h3>Real-Time Updates</h3>
                        <p>Instant notifications on Budget announcements, HMRC guidance, case law developments, and regulatory changes that affect your clients.</p>
                    </div>
                    <div class="feature-card">
                        <div class="feature-icon">🎯</div>
                        <h3>Practical Guidance</h3>
                        <p>Clear, actionable advice with worked examples, planning opportunities, and compliance checklists designed for busy professionals.</p>
                    </div>
                    <div class="feature-card">
                        <div class="feature-icon">🔍</div>
                        <h3>Advanced Search</h3>
                        <p>Powerful search functionality to quickly find specific tax topics, legislation references, and HMRC manuals across our entire database.</p>
                    </div>
                    <div class="feature-card">
                        <div class="feature-icon">📊</div>
                        <h3>Tax Calculators</h3>
                        <p>Suite of professional calculators for tax computations, including dividend tax, R&D relief, capital allowances, and more.</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Content Categories -->
        <section class="categories" id="resources">
            <div class="container">
                <div class="section-header">
                    <h2>Explore Our Tax Resources</h2>
                    <p>Comprehensive coverage across all areas of UK taxation</p>
                </div>
                <div class="category-grid">
                    <div class="category-item" onclick="showPage('corporation-tax')">
                        <div class="category-icon">💼</div>
                        <h4>Corporation Tax <span class="lock-icon">🔒</span></h4>
                        <p>Company taxation, reliefs, groups, and international aspects</p>
                    </div>
                    <div class="category-item" onclick="showPage('income-tax')">
                        <div class="category-icon">👤</div>
                        <h4>Income Tax & NIC</h4>
                        <p>Personal taxation, PAYE, benefits, and self-employment</p>
                    </div>
                    <div class="category-item" onclick="showPage('vat')">
                        <div class="category-icon">🏪</div>
                        <h4>VAT <span class="lock-icon">🔒</span></h4>
                        <p>VAT schemes, international trade, and Making Tax Digital</p>
                    </div>
                    <div class="category-item" onclick="showPage('cgt')">
                        <div class="category-icon">📈</div>
                        <h4>Capital Gains Tax <span class="lock-icon">🔒</span></h4>
                        <p>Asset disposals, reliefs, and planning opportunities</p>
                    </div>
                    <div class="category-item" onclick="showPage('property')">
                        <div class="category-icon">🏠</div>
                        <h4>Property Taxes</h4>
                        <p>SDLT, LBTT, LTT, and property income taxation</p>
                    </div>
                    <div class="category-item" onclick="showPage('iht')">
                        <div class="category-icon">💰</div>
                        <h4>Inheritance Tax <span class="lock-icon">🔒</span></h4>
                        <p>Estate planning, trusts, and lifetime transfers</p>
                    </div>
                    <div class="category-item" onclick="showPage('international')">
                        <div class="category-icon">🌍</div>
                        <h4>International Tax <span class="lock-icon">🔒</span></h4>
                        <p>Cross-border transactions, treaties, and transfer pricing</p>
                    </div>
                    <div class="category-item" onclick="showPage('compliance')">
                        <div class="category-icon">⚖️</div>
                        <h4>Tax Compliance</h4>
                        <p>Deadlines, penalties, investigations, and disputes</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Pricing Section -->
        <section class="pricing" id="pricing">
            <div class="container">
                <div class="section-header">
                    <h2>Choose Your Plan</h2>
                    <p>Flexible pricing for practices of all sizes</p>
                </div>
                <div class="pricing-cards">
                    <div class="pricing-card">
                        <h3>Essential</h3>
                        <div class="price">£49<span>/month</span></div>
                        <ul class="pricing-features">
                            <li>Core tax content library</li>
                            <li>Weekly tax bulletin</li>
                            <li>Basic calculators</li>
                            <li>Email support</li>
                            <li>1 user license</li>
                        </ul>
                        <button class="btn-primary" style="width: 100%;" onclick="selectPlan('essential')">Start Free Trial</button>
                    </div>
                    <div class="pricing-card featured">
                        <h3>Professional</h3>
                        <div class="price">£99<span>/month</span></div>
                        <ul class="pricing-features">
                            <li>Everything in Essential</li>
                            <li>Advanced calculators & tools</li>
                            <li>Priority support</li>
                            <li>3 user licenses</li>
                            <li>Downloadable guides</li>
                            <li>Monthly tax briefings</li>
                        </ul>
                        <button class="btn-primary" style="width: 100%; background: var(--success); color: white;" onclick="selectPlan('professional')">Start Free Trial</button>
                    </div>
                    <div class="pricing-card">
                        <h3>Enterprise</h3>
                        <div class="price">£249<span>/month</span></div>
                        <ul class="pricing-features">
                            <li>Everything in Professional</li>
                            <li>Unlimited user licenses</li>
                            <li>Custom branding options</li>
                            <li>API access</li>
                            <li>Dedicated account manager</li>
                            <li>Bespoke training sessions</li>
                        </ul>
                        <button class="btn-primary" style="width: 100%;" onclick="selectPlan('enterprise')">Contact Sales</button>
                    </div>
                </div>
            </div>
        </section>
    </div>

    <!-- Corporation Tax Page -->` }} />);
}
