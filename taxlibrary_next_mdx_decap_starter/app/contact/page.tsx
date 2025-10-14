export default function Page() {
  return (<div className="page active" dangerouslySetInnerHTML={{ __html: `
<div class="resource-hero">
  <div class="container"><h1>Contact</h1><p>We'd love to hear from you.</p></div>
</div>
<div class="resource-content"><div class="container">
  <div class="content-section"><h2>Get in touch</h2><p>Email: info@taxlibrary.uk<br>Phone: 020 7946 0958</p></div>
  <div class="content-section"><h2>Enquiry Form</h2>
    <form class="email-form" onsubmit="event.preventDefault(); alert('Thanks—we will be in touch!');">
      <input type="text" placeholder="Full Name" required />
      <input type="email" placeholder="Email Address" required />
      <textarea style="padding:12px;border:1px solid var(--border);border-radius:6px;height:120px;" placeholder="Your message"></textarea>
      <button type="submit">Send</button>
    </form>
  </div>
</div></div>
` }} />);
}