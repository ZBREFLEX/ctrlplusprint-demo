import { Link } from 'react-router-dom';

export default function Dashboard() {
  return (
    <div className="admin-dashboard">
      <div className="dashboard-header">
        <div className="dashboard-title">
          <h1>Good evening, Admin</h1>
          <p>Here's what's happening with CTRLPLUSPRINT today.</p>
        </div>
        <div className="date-selector">
          <select>
            <option>Today</option>
            <option>Yesterday</option>
            <option>Last 7 Days</option>
          </select>
        </div>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <h3>Total Products</h3>
          <div className="stat-value">102</div>
          <div className="stat-change">+8 this month</div>
        </div>
        <div className="stat-card">
          <h3>Active Products</h3>
          <div className="stat-value">94</div>
        </div>
        <div className="stat-card">
          <h3>WhatsApp Enquiries</h3>
          <div className="stat-value">37</div>
          <div className="stat-change">+12% this month</div>
        </div>
        <div className="stat-card">
          <h3>Custom Requests</h3>
          <div className="stat-value">14</div>
        </div>
      </div>

      <div className="dashboard-sections">
        {/* Recent Enquiries */}
        <div className="admin-card">
          <h3>RECENT WHATSAPP ENQUIRIES</h3>
          <table className="admin-table">
            <thead>
              <tr>
                <th>Customer</th>
                <th>Product</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Arun</td>
                <td>BMW Keychain</td>
                <td>Today</td>
                <td><span className="status-badge status-new">New</span></td>
              </tr>
              <tr>
                <td>Rahul</td>
                <td>Custom Logo</td>
                <td>Today</td>
                <td><span className="status-badge status-contacted">Contacted</span></td>
              </tr>
              <tr>
                <td>Adarsh</td>
                <td>Mirror Hanger</td>
                <td>Yesterday</td>
                <td><span className="status-badge status-completed">Completed</span></td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Product Catalog / Popular Products */}
        <div className="right-col-sections" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div className="admin-card">
            <h3>PRODUCT CATALOG</h3>
            <div className="overview-list">
              <div className="overview-item">
                <span className="item-name">Keychains</span>
                <span className="item-value">42</span>
              </div>
              <div className="overview-item">
                <span className="item-name">Mirror Hangers</span>
                <span className="item-value">21</span>
              </div>
              <div className="overview-item">
                <span className="item-name">Custom Logos</span>
                <span className="item-value">18</span>
              </div>
              <div className="overview-item">
                <span className="item-name">Custom Creations</span>
                <span className="item-value">21</span>
              </div>
            </div>
          </div>

          <div className="admin-card">
            <h3>QUICK ACTIONS</h3>
            <div className="overview-list" style={{ gap: '0.5rem' }}>
              <Link to="/admin/products/add" style={{ textDecoration: 'none', color: '#004085', fontWeight: '600' }}>+ ADD PRODUCT</Link>
              <Link to="/admin/categories/add" style={{ textDecoration: 'none', color: '#004085', fontWeight: '600' }}>+ ADD CATEGORY</Link>
              <Link to="/admin/enquiries" style={{ textDecoration: 'none', color: '#004085', fontWeight: '600' }}>VIEW ENQUIRIES</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
