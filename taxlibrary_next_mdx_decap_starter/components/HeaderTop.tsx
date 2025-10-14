export default function HeaderTop() {
  return (<div dangerouslySetInnerHTML={{ __html: `<!-- Top Bar -->
    <div class="header-top">
        <div class="container">
            <div class="top-bar">
                <div class="contact-info">
                    <span>📧 info@taxlibrary.uk</span>
                    <span>📞 020 7946 0958</span>
                </div>
                <div class="auth-links">
                    <a href="#" onclick="showLogin()">Member Login</a>
                    <a href="#" class="sign-in" onclick="showSignup()">Start Free Trial</a>
                </div>
            </div>` }} />);
}