export default function Page() {
  return (<div className="page active" dangerouslySetInnerHTML={{ __html: `<!-- Pricing Section -->
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

    <!-- Corporation Tax Page -->
    <div id="corporation-tax-page" class="page">
        <div class="resource-hero">
            <div class="container">
                <h1>Corporation Tax</h1>
                <p>Comprehensive guidance on UK company taxation</p>
            </div>
        </div>
        
        <div class="breadcrumb">
            <div class="container">
                <div class="breadcrumb-nav">
                    <a onclick="showPage('home')">Home</a>
                    <span>›</span>
                    <a onclick="showPage('resources')">Resources</a>
                    <span>›</span>
                    <span>Corporation Tax</span>
                </div>
            </div>
        </div>

        <div class="resource-content">
            <div class="container">
                <div class="content-grid">
                    <div class="main-content">
                        <div class="content-section">
                            <h2>Overview</h2>
                            <p>Corporation Tax is the main tax that UK limited companies pay on their profits. Understanding the rules, rates, and reliefs available is essential for effective tax planning and compliance.</p>
                            
                            <h3>Current Rates</h3>
                            <p>For the financial year 2024/25:</p>
                            <ul>
                                <li>Main rate: 25% for profits over £250,000</li>
                                <li>Small profits rate: 19% for profits up to £50,000</li>
                                <li>Marginal relief applies for profits between £50,000 and £250,000</li>
                            </ul>
                        </div>

                        <div class="content-section">
                            <h2>Key Topics</h2>
                            
                            <h3>Computing Taxable Profits</h3>
                            <p>Learn how to calculate adjusted profits, including:</p>
                            <ul>
                                <li>Allowable and disallowable expenses</li>
                                <li>Capital allowances</li>
                                <li>Trading losses</li>
                                <li>Research and development relief</li>
                            </ul>

                            <h3>Group Relief</h3>
                            <p>Understanding the group relief provisions for companies in a group structure, including consortium relief and overseas aspects.</p>
                        </div>

                        <div class="locked-content">
                            <div class="lock-icon">🔒</div>
                            <h3>Premium Content Available</h3>
                            <p>Access detailed guidance, worked examples, planning strategies, and our comprehensive Corporation Tax toolkit with a Professional or Enterprise subscription.</p>
                            <button class="btn-primary" onclick="selectPlan('professional')">Unlock Full Content</button>
                        </div>
                    </div>

                    <div class="sidebar">
                        <div class="sidebar-section">
                            <h3>Quick Links</h3>
                            <ul class="sidebar-links">
                                <li><a href="#">Tax Rates & Allowances <span class="update-badge">NEW</span></a></li>
                                <li><a href="#">R&D Tax Relief Calculator</a></li>
                                <li><a href="#">Loss Relief Options</a></li>
                                <li><a href="#">Patent Box Regime</a></li>
                                <li><a href="#">Transfer Pricing</a></li>
                            </ul>
                        </div>

                        <div class="sidebar-section">
                            <h3>Latest Updates</h3>
                            <ul class="sidebar-links">
                                <li><a href="#">Spring Budget 2024 Changes</a></li>
                                <li><a href="#">HMRC Guidance Update</a></li>
                                <li><a href="#">Case Law: Smith v HMRC</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Income Tax Page -->
    <div id="income-tax-page" class="page">
        <div class="resource-hero">
            <div class="container">
                <h1>Income Tax & National Insurance</h1>
                <p>Personal taxation guidance for individuals and employers</p>
            </div>
        </div>
        
        <div class="breadcrumb">
            <div class="container">
                <div class="breadcrumb-nav">
                    <a onclick="showPage('home')">Home</a>
                    <span>›</span>
                    <a onclick="showPage('resources')">Resources</a>
                    <span>›</span>
                    <span>Income Tax & NIC</span>
                </div>
            </div>
        </div>

        <div class="resource-content">
            <div class="container">
                <div class="content-grid">
                    <div class="main-content">
                        <div class="content-section">
                            <h2>Income Tax Essentials</h2>
                            <p>Income Tax is charged on various sources of income received by individuals. Understanding rates, bands, and allowances is crucial for accurate tax calculations.</p>
                            
                            <h3>Tax Rates 2024/25</h3>
                            <ul>
                                <li>Personal Allowance: £12,570</li>
                                <li>Basic Rate (20%): £12,571 to £50,270</li>
                                <li>Higher Rate (40%): £50,271 to £125,140</li>
                                <li>Additional Rate (45%): Over £125,140</li>
                            </ul>

                            <h3>Scottish and Welsh Rates</h3>
                            <p>Different rates apply for Scottish and Welsh taxpayers. Our detailed guides cover all variations and planning considerations.</p>
                        </div>

                        <div class="content-section">
                            <h2>PAYE and Employment</h2>
                            <p>Comprehensive coverage of employment taxation including:</p>
                            <ul>
                                <li>Benefits in kind</li>
                                <li>Payrolling benefits</li>
                                <li>Off-payroll working (IR35)</li>
                                <li>Termination payments</li>
                                <li>Share schemes</li>
                            </ul>
                        </div>
                    </div>

                    <div class="sidebar">
                        <div class="sidebar-section">
                            <h3>Calculators</h3>
                            <ul class="sidebar-links">
                                <li><a href="#">Take-Home Pay Calculator</a></li>
                                <li><a href="#">Dividend Tax Calculator</a></li>
                                <li><a href="#">Company Car Calculator</a></li>
                                <li><a href="#">NIC Calculator</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- VAT Page -->
    <div id="vat-page" class="page">
        <div class="resource-hero">
            <div class="container">
                <h1>Value Added Tax (VAT)</h1>
                <p>Complete VAT guidance for UK businesses</p>
            </div>
        </div>
        
        <div class="breadcrumb">
            <div class="container">
                <div class="breadcrumb-nav">
                    <a onclick="showPage('home')">Home</a>
                    <span>›</span>
                    <a onclick="showPage('resources')">Resources</a>
                    <span>›</span>
                    <span>VAT</span>
                </div>
            </div>
        </div>

        <div class="resource-content">
            <div class="container">
                <div class="content-grid">
                    <div class="main-content">
                        <div class="content-section">
                            <h2>VAT Fundamentals</h2>
                            <p>VAT is a consumption tax levied on most goods and services supplied in the UK. Understanding VAT is essential for business compliance and cash flow management.</p>
                            
                            <h3>Current VAT Rates</h3>
                            <ul>
                                <li>Standard Rate: 20%</li>
                                <li>Reduced Rate: 5%</li>
                                <li>Zero Rate: 0%</li>
                                <li>Exempt supplies</li>
                            </ul>
                        </div>

                        <div class="locked-content">
                            <div class="lock-icon">🔒</div>
                            <h3>Premium Content Available</h3>
                            <p>Access detailed VAT schemes, international trade guidance, Making Tax Digital resources, and sector-specific VAT treatments.</p>
                            <button class="btn-primary" onclick="selectPlan('professional')">Unlock Full Content</button>
                        </div>
                    </div>

                    <div class="sidebar">
                        <div class="sidebar-section">
                            <h3>VAT Resources</h3>
                            <ul class="sidebar-links">
                                <li><a href="#">Registration Threshold</a></li>
                                <li><a href="#">Making Tax Digital</a></li>
                                <li><a href="#">VAT Schemes</a></li>
                                <li><a href="#">Import/Export VAT</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Additional Resource Pages -->
    <div id="resources-page" class="page">
        <div class="resource-hero">
            <div class="container">
                <h1>Tax Resources</h1>
                <p>Browse our comprehensive tax library</p>
            </div>
        </div>
        
        <div class="resource-content">
            <div class="container">
                <section class="categories">
                    <div class="category-grid">
                        <div class="category-item" onclick="showPage('corporation-tax')">
                            <div class="category-icon">💼</div>
                            <h4>Corporation Tax</h4>
                            <p>Company taxation and reliefs</p>
                        </div>
                        <div class="category-item" onclick="showPage('income-tax')">
                            <div class="category-icon">👤</div>
                            <h4>Income Tax & NIC</h4>
                            <p>Personal and employment tax</p>
                        </div>
                        <div class="category-item" onclick="showPage('vat')">
                            <div class="category-icon">🏪</div>
                            <h4>VAT</h4>
                            <p>Value Added Tax guidance</p>
                        </div>
                        <div class="category-item" onclick="showPage('cgt')">
                            <div class="category-icon">📈</div>
                            <h4>Capital Gains Tax</h4>
                            <p>Asset disposals and reliefs</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>` }} />);
}