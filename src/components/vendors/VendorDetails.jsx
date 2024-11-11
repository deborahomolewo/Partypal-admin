import React from 'react';
import './vendorDetails.scss';

const VendorDetails = () => {
  const vendors = [
    { id: 1, name: 'Vendor 1', contact: 'vendor1@example.com' },
    { id: 2, name: 'Vendor 2', contact: 'vendor2@example.com' },
  ];

  return (
    <div className="vendors">
      {vendors.map(vendor => (
        <div key={vendor.id} className="vendorItem">
          <p><strong>{vendor.name}</strong></p>
          <p>{vendor.contact}</p>
        </div>
      ))}
    </div>
  );
};

export default VendorDetails;
