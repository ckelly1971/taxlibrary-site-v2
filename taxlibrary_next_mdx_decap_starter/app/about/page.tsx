export default function Page() {
  return (<div className="page active" dangerouslySetInnerHTML={{ __html: `
<div class="resource-hero">
  <div class="container"><h1>About</h1><p>Our mission is to provide clear, practical, up-to-date UK tax guidance.</p></div>
</div>
<div class="resource-content"><div class="container">
  <div class="content-section"><h2>Who We Are</h2><p>The Tax Library is built by tax professionals for tax professionals and business owners.</p></div>
  <div class="content-section"><h2>What We Do</h2><p>We publish guidance, calculators, and briefings—updated frequently with legislative change.</p></div>
</div></div>
` }} />);
}