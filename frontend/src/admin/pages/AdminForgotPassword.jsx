import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, KeyRound, ArrowRight, ArrowLeft } from 'lucide-react';
import '../components/AdminAuth.css';

export default function AdminForgotPassword() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder forgot password logic
    console.log('Requesting password reset for', email);
    setIsSubmitted(true);
  };

  return (
    <div className="admin-auth-container">
      <div className="admin-auth-card">
        <div className="admin-auth-header">
          <h1>
            <KeyRound size={28} style={{ color: 'var(--color-accent-gold)' }} />
            Reset Password
          </h1>
          <p>We'll send you a link to reset it.</p>
        </div>

        {!isSubmitted ? (
          <form className="admin-auth-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <div className="input-wrapper">
                <Mail className="input-icon" size={20} />
                <input
                  type="email"
                  id="email"
                  className="admin-auth-input"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <button type="submit" className="admin-auth-btn">
              Send Reset Link <ArrowRight size={18} />
            </button>
          </form>
        ) : (
          <div className="admin-auth-form" style={{ textAlign: 'center' }}>
            <div style={{ background: 'rgba(16, 185, 129, 0.1)', padding: '1rem', borderRadius: '12px', border: '1px solid rgba(16, 185, 129, 0.2)', marginBottom: '1.5rem' }}>
              <p style={{ color: '#34d399', margin: 0, fontWeight: 500 }}>
                Reset link sent! Please check your email.
              </p>
            </div>
            <button 
              className="admin-auth-btn" 
              style={{ background: 'rgba(255,255,255,0.1)', boxShadow: 'none' }}
              onClick={() => setIsSubmitted(false)}
            >
              Try another email
            </button>
          </div>
        )}

        <div className="admin-auth-footer">
          <Link to="/admin/login" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}>
            <ArrowLeft size={16} /> Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
}
