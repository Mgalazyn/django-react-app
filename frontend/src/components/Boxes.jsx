function Boxes({about, workout, diet}) {
    return (<div class='over-boxes'>
                  <div className="about-boxes">
                      <img src={about} alt='about' />
                      <h3><b>About</b></h3>
                      <p>We are here to help personal trainers in cooperation with their clients, 
                          we make it easier to contact, oversee plans, diet or even show exercise's correct form by video. </p>
                      <a href="/about" class="about-button"><b>READ MORE </b></a>
                  </div>
                  <div className="about-boxes">
                      <img src={workout} alt='about' />
                      <h3><b>Workout</b></h3>
                      <p>We can help create you and your clients much more readable workout plans, where you can add exercises from 
                          database with short bio and simple video with explanations </p>
                      <a href="/about" class="about-button"><b>READ MORE </b></a>
                  </div>
                  <div className="about-boxes">
                      <img src={diet} alt='about' />
                      <h3><b>Diet</b></h3>
                      <p>You can <a href='/login'> join</a> right now and track your diet, created by your trainer 
                      or from our recipes. Then it can be supervised/modified by your trainer, He can add comments etc. </p>
                      <a href="/about" class="about-button"><b>READ MORE </b></a>
                  </div>
              </div>);
  }

export default Boxes;