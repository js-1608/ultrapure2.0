import React from 'react';

const certificates = [
  {
    id: 1,
    imageUrl: './certificate/certificate (1).jpg',
    altText: 'Certificate 1',
  },
  {
    id: 2,
    imageUrl: './certificate/certificate (2).jpg',
    altText: 'Certificate 2',
  },
  {
    id: 3,
    imageUrl: './certificate/certificate (3).jpg',
    altText: 'Certificate 3',
  },
  {
    id: 4,
    imageUrl: './certificate/certificate (4).jpg',
    altText: 'Certificate 4',
  },
];

const CertificateGallery = () => {
  const openInNewTab = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
      {certificates.map((certificate) => (
        <div
          key={certificate.id}
          className="cursor-pointer shadow-lg hover:shadow-xl transition-shadow duration-300"
          onClick={() => openInNewTab(certificate.imageUrl)}
        >
          <img
            src={certificate.imageUrl}
            alt={certificate.altText}
            className="w-full h-auto rounded"
          />
        </div>
      ))}
    </div>
  );
};

export default CertificateGallery;
