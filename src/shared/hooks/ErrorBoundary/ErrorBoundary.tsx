import React, { useEffect, useState } from 'react';

export const ErrorBoundary = ({
  children,
}: {
  children: React.ReactElement;
}) => {
  const [hasError] = useState(false);

  useEffect(() => {
    if (hasError) {
      console.error('Error occurred within the ErrorBoundary');
    }
  }, [hasError]);

  if (hasError) {
    return <div>Sorry, something went wrong</div>;
  }

  return children;
};
