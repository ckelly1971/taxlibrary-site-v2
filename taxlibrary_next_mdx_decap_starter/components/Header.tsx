export default function Header() {
  return (<div dangerouslySetInnerHTML={{ __html: `<!-- Header -->
    <header>
        <div class="container">
            <nav>
                <a onclick="showPage('home')" class="logo">The Tax Library</a>
                <ul class="nav-menu">
                    <li><a onclick="showPage('home')">Home</a></li>
                    <li><a onclick="showPage('resources')">Resources</a></li>
                    <li><a onclick="scrollToSection('pricing')">Pricing</a></li>
                    <li><a onclick="scrollToSection('about')">About</a></li>
                    <li><a onclick="scrollToSection('contact')">Contact</a></li>
                </ul>
                <button class="subscribe-btn" onclick="scrollToPricing()">Subscribe Now</button>
            </nav>
        </div>
    </header>` }} />);
}