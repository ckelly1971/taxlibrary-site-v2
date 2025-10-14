export default function ResourcesPage() {
  return (<div className="page active" dangerouslySetInnerHTML={{ __html: `
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
        <a class="category-item" href="/resources/corporation-tax"><div class="category-icon">💼</div><h4>Corporation Tax</h4><p>Company taxation and reliefs</p></a>
        <a class="category-item" href="/resources/income-tax"><div class="category-icon">👤</div><h4>Income Tax &amp; NIC</h4><p>Personal and employment tax</p></a>
        <a class="category-item" href="/resources/vat"><div class="category-icon">🏪</div><h4>VAT</h4><p>Value Added Tax guidance</p></a>
        <a class="category-item" href="/resources/cgt"><div class="category-icon">📈</div><h4>Capital Gains Tax</h4><p>Asset disposals and reliefs</p></a>
        <a class="category-item" href="/resources/property"><div class="category-icon">🏠</div><h4>Property Taxes</h4><p>SDLT, LBTT, LTT</p></a>
        <a class="category-item" href="/resources/iht"><div class="category-icon">💰</div><h4>Inheritance Tax</h4><p>Estates, trusts, and transfers</p></a>
        <a class="category-item" href="/resources/international"><div class="category-icon">🌍</div><h4>International Tax</h4><p>Cross-border &amp; treaties</p></a>
        <a class="category-item" href="/resources/compliance"><div class="category-icon">⚖️</div><h4>Tax Compliance</h4><p>Deadlines and disputes</p></a>
      </div>
    </section>
  </div>
</div>
` }} />);
}