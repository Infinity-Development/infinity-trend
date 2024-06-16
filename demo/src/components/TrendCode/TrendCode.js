import React from 'react';
import PropTypes from 'prop-types';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import js from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript';
import syntaxTheme from 'react-syntax-highlighter/dist/esm/styles/hljs/vs';

import './TrendCode.css';

// Register the language (if needed, depending on the version)
SyntaxHighlighter.registerLanguage('javascript', js);

const propTypes = {
  data: PropTypes.arrayOf(PropTypes.number),
  params: PropTypes.shape({
    gradient: PropTypes.arrayOf(PropTypes.string).isRequired,
    radius: PropTypes.number.isRequired,
    strokeWidth: PropTypes.number.isRequired,
    strokeLinecap: PropTypes.string.isRequired,
  }).isRequired,
};

const TrendCode = ({ data, params }) => {
  const codeString = `
import React from 'react';
import Trend from 'infinity-trend';

const YourComponent = () => (
  <Trend
    smooth
    autoDraw
    autoDrawDuration={3000}
    autoDrawEasing="ease-out"
    data={[${data}]}
    gradient={['${params.gradient.join("', '")}']}
    radius={${params.radius}}
    strokeWidth={${params.strokeWidth}}
    strokeLinecap={'${params.strokeLinecap}'}
  />
);
  `;

  return (
    <div className="trendCode">
      <SyntaxHighlighter language="javascript" style={syntaxTheme}>
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
};

TrendCode.propTypes = propTypes;

export default TrendCode;
