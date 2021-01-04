import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'semantic-ui-react';

import AudioPlayer from 'src/components/AudioPlayer';

const TrackResults = ({ results }) => (
  <Card.Group centered itemsPerRow={4}>
    {results.map((track) => (
      <Card
        key={track.id}
        image={track.imageUrl}
        header={track.name}
        meta={track.artists}
        extra={<AudioPlayer url={track.preview_url} />}
      />
    ))}
  </Card.Group>
);

TrackResults.propTypes = {
  results: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      imageUrl: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      artists: PropTypes.string.isRequired,
      preview_url: PropTypes.string.isRequired,
      playing: PropTypes.bool.isRequired,
    }),
  ).isRequired,
};

export default TrackResults;
