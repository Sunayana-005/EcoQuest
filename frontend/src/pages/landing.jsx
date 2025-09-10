import '../styles/landing.css'
export default function Landing() {
    console.log("LANDING PAGE")
    return (

  <div class="container">

    {/* <!-- Sidebar --> */}
    <aside class="sidebar">
      <h2 class="logo">🌱 Environmental<br />Education</h2>
      <nav>
        <ul>
          <li class="active"><a href="#">Home</a></li>
          <li><a href="#">Activities</a></li>
          <li><a href="#">Rewards</a></li>
        </ul>
      </nav>
    </aside>

    {/* <!-- Main Content --> */}

    <main class="content">
      <header class="topbar">
        <a href="#" class="login">Log In</a>
      </header>

      <section class="hero">
        <div class="hero-text">
          <h1>Interactive Learning<br />for a Greener Tomorrow</h1>
          <p>A gamified desktop platform that educates students about environmental issues.</p>
          <a href="#" class="btn">Get Started</a>
        </div>
        <div class="hero-img">
          <img src="https://via.placeholder.com/250x250?text=Illustration" alt="Eco Learning" />
        </div>
      </section>

      <section class="impact">
        <div class="impact-text">
          <h2>Impact</h2>
          <p>
            An interactive, practical approach to environmental learning will foster
            long-term behavioral change, local involvement; and a ripple effect
            across families and communities.
          </p>
        </div>
        <div class="impact-img">
          <img src="https://via.placeholder.com/200x200?text=Tablet" alt="Impact Learning" />
        </div>
      </section>
    </main>
  
  </div>
    )
}