import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Card, Button } from '@blueprintjs/core';

const TodayNovel = ({ style, todayNovelData }) =>
  (
    <Fragment>
      <div style={style}>
        <Card interactive >
          <div style={{ display: 'flex', flexDirection: 'column', alignContent: 'center' }}>
            <div style={{ flex: '20rem', backgroundColor: '#3C3C3C' }}> picture is here </div>
            <div style={{ flex: 1, paddingTop: '2rem' }}>
              <h3>today&apos;s novel is <strong>{todayNovelData.name}</strong>.</h3>
              <br />
              <h2>&quot; {todayNovelData.quotation} &quot;</h2>
              <div style={{ display: 'flex', justifyContent: 'right', marginTop: '5rem' }}>
                <Button className="pt-minimal" icon="edit" text={<div>start writing</div>} />
              </div>
            </div>
          </div>
        </Card>
      </div>
    </Fragment>
  );

TodayNovel.propTypes = {
  style: PropTypes.objectOf(PropTypes.string).isRequired,
  todayNovelData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    quotation: PropTypes.string.isRequired,
  }).isRequired,
};


export default TodayNovel;
