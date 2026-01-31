import React, { useState, useEffect } from 'react';

const AIStylistChat: React.FC = () => {
  const [showResponse, setShowResponse] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(() => {
    const responseTimer = setTimeout(() => setShowResponse(true), 800);
    const suggestionsTimer = setTimeout(() => setShowSuggestions(true), 1500);

    return () => {
      clearTimeout(responseTimer);
      clearTimeout(suggestionsTimer);
    };
  }, []);

  const sizeSuggestions = [
    { size: 'S', fit: 'Fitted', color: '#f3e8ff' },
    { size: 'M', fit: 'Perfect', color: '#e9d5ff', recommended: true },
    { size: 'L', fit: 'Relaxed', color: '#faf5ff' }
  ];

  return (
    <div style={{
      width: '100%',
      height: '100%',
      background: '#fff',
      borderRadius: '20px',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      boxShadow: '0 4px 24px rgba(0,0,0,0.08)'
    }}>
      {/* Header */}
      <div style={{
        padding: '12px 16px',
        borderBottom: '1px solid #f0f0f0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: '#fff'
      }}>
        <span style={{
          fontSize: '15px',
          fontWeight: 600,
          color: '#1a1a1a'
        }}>AI Stylist</span>
        <span style={{
          fontSize: '18px',
          color: '#999',
          cursor: 'pointer',
          lineHeight: 1
        }}>×</span>
      </div>

      {/* Chat Content */}
      <div style={{
        flex: 1,
        padding: '16px',
        overflowY: 'auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        background: '#fafafa'
      }}>
        {/* User Message */}
        <div style={{
          display: 'flex',
          justifyContent: 'flex-end'
        }}>
          <div style={{
            background: '#f0f0f0',
            padding: '10px 14px',
            borderRadius: '18px 18px 4px 18px',
            maxWidth: '85%',
            fontSize: '13px',
            color: '#1a1a1a',
            lineHeight: 1.4
          }}>
            What size should I get?
          </div>
        </div>

        {/* AI Response */}
        {showResponse && (
          <div style={{
            display: 'flex',
            gap: '8px',
            alignItems: 'flex-start',
            animation: 'fadeSlideUp 0.4s ease-out'
          }}>
            <div style={{
              width: '28px',
              height: '28px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #9333EA 0%, #A855F7 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              fontSize: '9px',
              color: '#fff',
              fontWeight: 700
            }}>
              P
            </div>
            <div style={{
              background: '#fff',
              padding: '10px 14px',
              borderRadius: '4px 18px 18px 18px',
              boxShadow: '0 1px 4px rgba(0,0,0,0.05)',
              fontSize: '13px',
              color: '#1a1a1a',
              lineHeight: 1.5
            }}>
              Based on your measurements, here's how each size will fit ✨
            </div>
          </div>
        )}

        {/* Size Suggestions */}
        {showSuggestions && (
          <div style={{
            display: 'flex',
            gap: '8px',
            justifyContent: 'center',
            animation: 'fadeSlideUp 0.4s ease-out'
          }}>
            {sizeSuggestions.map((item, index) => (
              <div key={index} style={{
                flex: 1,
                maxWidth: '90px',
                background: item.color,
                borderRadius: '12px',
                padding: '12px 8px',
                textAlign: 'center',
                border: item.recommended ? '2px solid #9333EA' : '2px solid transparent',
                position: 'relative'
              }}>
                {item.recommended && (
                  <div style={{
                    position: 'absolute',
                    top: '-8px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: '#9333EA',
                    color: '#fff',
                    fontSize: '8px',
                    fontWeight: 600,
                    padding: '2px 6px',
                    borderRadius: '4px',
                    whiteSpace: 'nowrap'
                  }}>
                    BEST FIT
                  </div>
                )}
                <div style={{
                  fontSize: '20px',
                  fontWeight: 700,
                  color: '#1a1a1a',
                  marginBottom: '2px'
                }}>{item.size}</div>
                <div style={{
                  fontSize: '10px',
                  color: '#666',
                  fontWeight: 500
                }}>{item.fit}</div>
              </div>
            ))}
          </div>
        )}

        {/* Size Details */}
        {showSuggestions && (
          <div style={{
            background: '#fff',
            borderRadius: '12px',
            padding: '12px',
            boxShadow: '0 1px 4px rgba(0,0,0,0.05)',
            animation: 'fadeSlideUp 0.4s ease-out 0.2s both'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              marginBottom: '8px'
            }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#9333EA" strokeWidth="2.5">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span style={{
                fontSize: '12px',
                fontWeight: 600,
                color: '#7c3aed'
              }}>Size M Recommended</span>
            </div>
            <p style={{
              fontSize: '11px',
              color: '#555',
              margin: 0,
              lineHeight: 1.5
            }}>
              Your hip measurement (38") fits perfectly in M. The waist will be comfortable with 1" of ease.
            </p>
          </div>
        )}
      </div>

      {/* Input Area */}
      <div style={{
        padding: '10px 12px',
        borderTop: '1px solid #f0f0f0',
        background: '#fff'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          background: '#f5f5f5',
          borderRadius: '20px',
          padding: '8px 12px'
        }}>
          <input
            type="text"
            placeholder="Ask about fit..."
            style={{
              flex: 1,
              border: 'none',
              background: 'none',
              outline: 'none',
              fontSize: '12px',
              color: '#1a1a1a'
            }}
            readOnly
          />
          <div style={{
            width: '26px',
            height: '26px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #9333EA 0%, #A855F7 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5">
              <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
            </svg>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeSlideUp {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default AIStylistChat;
