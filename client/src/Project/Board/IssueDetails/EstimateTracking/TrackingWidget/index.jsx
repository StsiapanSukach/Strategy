import React from 'react';
import PropTypes from 'prop-types';
import { isNil } from 'lodash';
import { useTranslation } from 'react-i18next';
import i18n from '../../../../../i18n';

import { TrackingWidget, WatchIcon, Right, BarCont, Bar, Values } from './Styles';

const propTypes = {
  issue: PropTypes.object.isRequired,
};

const ProjectBoardIssueDetailsTrackingWidget = ({ issue }) => {
  const { t } = useTranslation();

  return (
    <TrackingWidget>
      <WatchIcon type="stopwatch" size={26} top={-1} />
      <Right>
        <BarCont>
          <Bar width={calculateTrackingBarWidth(issue)} />
        </BarCont>
        <Values>
          <div>
            {issue.timeSpent
              ? `${issue.timeSpent}${t('description.logged')}`
              : `${t('description.no_logged')}`}
          </div>
          {renderRemainingOrEstimate(issue)}
        </Values>
      </Right>
    </TrackingWidget>
  );
};

const calculateTrackingBarWidth = ({ timeSpent, timeRemaining, estimate }) => {
  if (!timeSpent) {
    return 0;
  }
  if (isNil(timeRemaining) && isNil(estimate)) {
    return 100;
  }
  if (!isNil(timeRemaining)) {
    return (timeSpent / (timeSpent + timeRemaining)) * 100;
  }
  if (!isNil(estimate)) {
    return Math.min((timeSpent / estimate) * 100, 100);
  }
};

const renderRemainingOrEstimate = ({ timeRemaining, estimate }) => {
  if (isNil(timeRemaining) && isNil(estimate)) {
    return null;
  }
  if (!isNil(timeRemaining)) {
    return <div>{`${timeRemaining}${i18n.t('description.remains')}`}</div>;
  }
  if (!isNil(estimate)) {
    return <div>{`${estimate}${i18n.t('description.estimated')}`}</div>;
  }
};

ProjectBoardIssueDetailsTrackingWidget.propTypes = propTypes;

export default ProjectBoardIssueDetailsTrackingWidget;
