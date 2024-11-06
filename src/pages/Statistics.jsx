import React from 'react';
import { Helmet } from 'react-helmet-async';

const Statistics = () => {
    return (
      <div>
        <Helmet>
          <title>Gadgets | Statistics</title>
        </Helmet>
        <div className="bg-c1 h-96 flex items-center justify-center">
          <h2 className="text-4xl text-white font-bold">No Data Available!</h2>
        </div>
      </div>
    );
};

export default Statistics;