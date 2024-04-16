import React, { useEffect, useState, ReactNode } from 'react';

interface FadeInProps {
  children: ReactNode;
}

const FadeIn: React.FC<FadeInProps> = ({ children }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <div style={{ opacity: visible ? 1 : 0, transition: 'opacity 0.5s' }}>
      {children}
    </div>
  );
};

export default FadeIn;
