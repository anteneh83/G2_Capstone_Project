import React from 'react';
import { Users, Eye, Target, MapPin, User, Mountain, Camera } from 'lucide-react';
import Footer from './components/Footer';
import i3 from "./assets/image/i3.jpg";
import i2 from "./assets/image/i2.jpg";
import i1 from "./assets/image/i1.jpg";
import i4 from "./assets/image/i4.jpg";
import i5 from "./assets/image/i5.jpg";
import i6 from "./assets/image/i6.jpg";
const About = () => {
  return (
    <div className="about-us" style={{
        background:'white'
    }}>
      <div className="hero-section" style={{
        backgroundImage: `url(${i4})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '500px',
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
      }}>
        <h2>About Us</h2>
        <p>Home &gt; About Us</p>
      </div>
      <div className="info-section" style={{
        padding: '60px 20px',
        display: 'flex',
        justifyContent: 'space-around',
        textAlign: 'center'
      }}>
        <div>
          <Users size={50} color="#f97316" style={{ marginBottom: '20px' }} />
          <h3>Great team work</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti voluptate mollitia rem consectetur.</p>
        </div>
        <div>
          <Eye size={50} color="#10b981" style={{ marginBottom: '20px' }} />
          <h3>Our vision</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime voluptate dolores molestiae.</p>
        </div>
        <div>
          <Target size={50} color="#3b82f6" style={{ marginBottom: '20px' }} />
          <h3>Our mission</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime voluptate dolores molestiae.</p>
        </div>
      </div>
      <div className="testimonial-section" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '60px 20px'
      }}>
        <img src={i2} alt="testimonial" style={{
          width: '200px',
          borderRadius: '20px',
          marginRight: '40px'
        }} />
        <div style={{ maxWidth: '600px' }}>
          <p style={{ fontSize: '24px', fontStyle: 'italic' }}>
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla pariatur nobis deserunt facilis porro. Suscipit perspiciatis cumque minima recusandae."
          </p>
          <h4>Siti Sarah</h4>
          <p>Founder TravelerX</p>
        </div>
      </div>
      <div className="stats-section" style={{
        backgroundImage: `url(${i3})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '60px 20px',
        color: '#fff',
        display: 'flex',
        justifyContent: 'space-around',
        textAlign: 'center'
      }}>
        <div>
          <MapPin size={40} />
          <h3>126+</h3>
          <p>Specific cities</p>
        </div>
        <div>
          <User size={40} />
          <h3>230+</h3>
          <p>Travelers</p>
        </div>
        <div>
          <Mountain size={40} />
          <h3>230+</h3>
          <p>Adventures</p>
        </div>
        <div>
          <Camera size={40} />
          <h3>230+</h3>
          <p>Moments</p>
        </div>
      </div>
      <div style={{
        padding: '60px 20px',
        textAlign: 'center'
      }}>
        <h2>Gallery</h2>
        <h3>Unforgettable moment</h3>
        <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: '20px',
      padding: '40px',
      backgroundColor: '#fff',
      justifyContent: 'center'
    }}>
      <div style={{
        flex: '1 1 50%',
        minWidth: '300px',
        height: '500px',
        backgroundImage: `url(${i2})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderRadius: '16px',
        position: 'relative'
      }}>
        <div style={{
          position: 'absolute',
          bottom: '10px',
          left: '15px',
          color: 'white',
          fontWeight: 'bold',
          fontSize: '18px',
          textShadow: '0 2px 4px rgba(0,0,0,1)'
        }}>
          Bali
        </div>
      </div>
      <div style={{
        flex: '1 1 40%',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        minWidth: '300px'
      }}>
        <div style={{
          height: '240px',
          backgroundImage: `url(${i5})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderRadius: '16px',
          position: 'relative'
        }}>
          <div style={{
            position: 'absolute',
            bottom: '10px',
            left: '15px',
            color: 'white',
            fontWeight: 'bold',
            fontSize: '18px',
            textShadow: '0 2px 4px rgba(0,0,0,0.7)'
          }}>
            Dubai
          </div>
        </div>
        <div style={{ display: 'flex', gap: '20px' }}>
          <div style={{
            flex: 1,
            height: '200px',
            backgroundImage: `url(${i6})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderRadius: '16px',
            position: 'relative'
          }}>
            <div style={{
              position: 'absolute',
              bottom: '10px',
              left: '15px',
              color: 'white',
              fontWeight: 'bold',
              fontSize: '18px',
              textShadow: '0 2px 4px rgba(0,0,0,0.7)'
            }}>
              Paris
            </div>
          </div>
          <div style={{
            flex: 1,
            height: '200px',
            backgroundImage: `url(${i3})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderRadius: '16px',
            position: 'relative'
          }}>
            <div style={{
              position: 'absolute',
              bottom: '10px',
              left: '15px',
              color: 'white',
              fontWeight: 'bold',
              fontSize: '18px',
              textShadow: '0 2px 4px rgba(0,0,0,0.7)'
            }}>
              Italy
            </div>
          </div>
        </div>
      </div>
    </div>
      </div>
      <Footer/>
    </div>
  );
};

export default About;
