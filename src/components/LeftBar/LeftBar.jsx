import React from 'react';
import PropTypes from 'prop-types';
import ClassNames from 'classnames/bind';
import { Card } from '@blueprintjs/core';
import _ from 'lodash';
import styles from './LeftBar.scss';

const cx = ClassNames.bind(styles);

const LeftBar = ({ sections, indexFunction }) => (
  <Card className={cx('left-bar')}>
    <strong>Table Of Content</strong>
    <divocusable className={cx('sections')}>
      {
        _.map(sections, (section, index) => (
          <div>
            <button
              style={{
                border: '0px',
                backgroundColor: 'transparent',
              }}
              className={cx('section-item')}
              onClick={indexFunction(index)}
            >
              {section.substring(2)}
            </button>
          </div>
        ))
      }
    </divocusable>
  </Card>
);

LeftBar.propTypes = {
  sections: PropTypes.objectOf(PropTypes.string).isRequired,
  indexFunction: PropTypes.func.isRequired,
};

export default LeftBar;
