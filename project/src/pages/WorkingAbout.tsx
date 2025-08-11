import React from 'react';
import { Heart, Award, Users, Star } from 'lucide-react';

const WorkingAbout: React.FC = () => {
  return (
    <div style={{ 
      minHeight: '100vh', 
      paddingTop: '80px',
      backgroundColor: 'white',
      fontFamily: 'Arial, sans-serif'
    }}>
      {/* Hero Section */}
      <section style={{ 
        padding: '80px 20px',
        backgroundColor: 'white'
      }}>
        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))',
          gap: '60px',
          alignItems: 'center'
        }}>
          {/* Left Content */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                borderRadius: '25px',
                border: '2px solid #F97316',
                fontSize: '12px',
                fontWeight: '600',
                padding: '8px 16px',
                backgroundColor: '#FED7AA',
                color: '#C2410C',
                width: 'fit-content'
              }}>
                ⭐ Celebrating Excellence Since 2009
              </div>

              <h1 style={{
                fontSize: 'clamp(2rem, 8vw, 4rem)',
                fontWeight: 'bold',
                lineHeight: '1.2',
                color: '#1F2937'
              }}>
                About <span style={{ color: '#DC2626' }}>House of</span>{' '}
                <span style={{
                  background: 'linear-gradient(to right, #FBBF24, #DC2626)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>
                  Festival
                </span>
              </h1>

              <p style={{
                fontSize: '1.25rem',
                color: '#6B7280',
                lineHeight: '1.6'
              }}>
                Celebrating traditions with elegance for over 15 years
              </p>
            </div>

            <p style={{
              fontSize: '1rem',
              color: '#9CA3AF',
              lineHeight: '1.6',
              maxWidth: '600px'
            }}>
              We craft unforgettable experiences that honor cultural heritage while embracing modern sophistication. From
              intimate gatherings to grand celebrations, we bring your vision to life with meticulous attention to detail.
            </p>

            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <button style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '14px',
                fontWeight: '500',
                height: '44px',
                borderRadius: '6px',
                backgroundColor: '#DC2626',
                color: 'white',
                padding: '0 32px',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}>
                📅 Plan Your Event
              </button>

              <button style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '14px',
                fontWeight: '500',
                height: '44px',
                borderRadius: '6px',
                border: '2px solid #DC2626',
                color: '#DC2626',
                backgroundColor: 'white',
                padding: '0 32px',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}>
                View Our Work
              </button>
            </div>
          </div>

          {/* Right Stats Grid */}
          <div style={{ position: 'relative' }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '16px'
            }}>
              {/* Card 1 */}
              <div style={{
                borderRadius: '8px',
                border: '2px solid #FBBF24',
                backgroundColor: 'white',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                padding: '24px',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '3rem', marginBottom: '8px' }}>👥</div>
                <h3 style={{
                  fontWeight: '600',
                  fontSize: '1.25rem',
                  marginBottom: '4px',
                  color: '#FBBF24'
                }}>
                  5000+
                </h3>
                <p style={{ fontSize: '0.875rem', color: '#6B7280' }}>Happy Families</p>
              </div>

              {/* Card 2 */}
              <div style={{
                borderRadius: '16px',
                border: '2px solid #DC2626',
                background: 'linear-gradient(to bottom right, white, #F9FAFB)',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                padding: '32px 24px',
                textAlign: 'center',
                marginTop: '40px'
              }}>
                <div style={{ fontSize: '3.5rem', marginBottom: '20px' }}>🏆</div>
                <h3 style={{
                  fontWeight: '600',
                  fontSize: '1.5rem',
                  color: '#DC2626',
                  marginBottom: '8px'
                }}>
                  50+
                </h3>
                <p style={{ fontSize: '0.875rem', color: '#6B7280' }}>
                  Awards Won
                </p>
              </div>

              {/* Card 3 */}
              <div style={{
                borderRadius: '16px',
                border: '2px solid #DC2626',
                backgroundColor: 'white',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                padding: '24px',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '3rem', marginBottom: '16px' }}>❤️</div>
                <h3 style={{
                  fontWeight: '600',
                  fontSize: '1.25rem',
                  color: '#DC2626',
                  marginBottom: '8px'
                }}>
                  15+
                </h3>
                <p style={{ fontSize: '0.875rem', color: '#6B7280' }}>
                  Years Experience
                </p>
              </div>

              {/* Card 4 */}
              <div style={{
                borderRadius: '8px',
                border: '2px solid #FBBF24',
                backgroundColor: 'white',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                padding: '24px',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '3rem', marginBottom: '16px' }}>🎨</div>
                <h3 style={{
                  fontWeight: '600',
                  fontSize: '1.25rem',
                  marginBottom: '8px',
                  color: '#FBBF24'
                }}>
                  10K+
                </h3>
                <p style={{ fontSize: '0.875rem', color: '#6B7280' }}>Products Made</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section style={{ 
        padding: '80px 20px',
        backgroundColor: '#F9FAFB'
      }}>
        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
          gap: '60px',
          alignItems: 'center'
        }}>
          <div>
            <img
              src="https://images.pexels.com/photos/1131555/pexels-photo-1131555.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Craftsman"
              style={{
                borderRadius: '16px',
                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
                width: '100%',
                height: '400px',
                objectFit: 'cover'
              }}
            />
          </div>
          <div>
            <h2 style={{
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              fontWeight: 'bold',
              color: '#DC2626',
              marginBottom: '24px'
            }}>
              Our Story
            </h2>
            <p style={{
              fontSize: '1.125rem',
              color: '#374151',
              lineHeight: '1.7',
              marginBottom: '16px'
            }}>
              At House of Festival, we blend tradition with craftsmanship. For over 15 years,
              we've collaborated with local artisans from Rajkot to preserve Indian culture.
            </p>
            <p style={{
              fontSize: '1.125rem',
              color: '#374151',
              lineHeight: '1.7'
            }}>
              Our handmade products are not just festival items; they are a reflection of legacy,
              love, and culture — built to make every celebration truly special.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section style={{ 
        padding: '80px 20px',
        backgroundColor: '#FDF2F8'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{
              fontSize: 'clamp(2rem, 5vw, 2.5rem)',
              fontWeight: 'bold',
              color: '#DC2626',
              marginBottom: '16px'
            }}>
              Our Values
            </h2>
            <p style={{ fontSize: '1.125rem', color: '#6B7280' }}>
              Principles we live by and stand for.
            </p>
          </div>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '32px'
          }}>
            {[
              {
                icon: '❤️',
                title: "Passion for Tradition",
                description: "We are deeply passionate about preserving and celebrating Indian cultural heritage through our products."
              },
              {
                icon: '🏆',
                title: "Excellence in Craft",
                description: "Every product meets our highest standards of quality, ensuring authentic and durable festival essentials."
              },
              {
                icon: '👥',
                title: "Community Support",
                description: "We support local artisans and communities, creating sustainable livelihoods through traditional crafts."
              },
              {
                icon: '⭐',
                title: "Customer Delight",
                description: "Your satisfaction and joy during festivals is our ultimate measure of success."
              }
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: 'white',
                  padding: '32px',
                  borderRadius: '16px',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                  textAlign: 'center',
                  transition: 'transform 0.3s ease'
                }}
              >
                <div style={{
                  marginBottom: '16px',
                  display: 'flex',
                  justifyContent: 'center'
                }}>
                  <div style={{
                    backgroundColor: '#FCE7F3',
                    padding: '16px',
                    borderRadius: '50%',
                    fontSize: '2rem'
                  }}>
                    {item.icon}
                  </div>
                </div>
                <h4 style={{
                  fontSize: '1.25rem',
                  fontWeight: 'bold',
                  color: '#DC2626',
                  marginBottom: '8px'
                }}>
                  {item.title}
                </h4>
                <p style={{
                  color: '#6B7280',
                  fontSize: '0.875rem',
                  lineHeight: '1.6'
                }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ 
        padding: '80px 20px',
        backgroundColor: 'white'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{
              fontSize: 'clamp(2rem, 5vw, 2.5rem)',
              fontWeight: 'bold',
              color: '#DC2626'
            }}>
              Our Journey in Numbers
            </h2>
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '32px'
          }}>
            {[
              { icon: '🏆', number: '15+', label: 'Years of Excellence' },
              { icon: '👥', number: '5000+', label: 'Happy Customers' },
              { icon: '❤️', number: '50+', label: 'Artisan Partners' },
              { icon: '⭐', number: '10000+', label: 'Products Crafted' }
            ].map((stat, i) => (
              <div
                key={i}
                style={{
                  textAlign: 'center',
                  backgroundColor: '#F3F4F6',
                  padding: '32px',
                  borderRadius: '16px',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }}
              >
                <div style={{
                  display: 'flex',
                  justifyContent: 'center',
                  marginBottom: '8px',
                  fontSize: '2rem'
                }}>
                  {stat.icon}
                </div>
                <h3 style={{
                  fontSize: '2rem',
                  fontWeight: 'bold',
                  color: '#DC2626',
                  marginBottom: '4px'
                }}>
                  {stat.number}
                </h3>
                <p style={{
                  color: '#6B7280',
                  fontSize: '1rem'
                }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default WorkingAbout;
