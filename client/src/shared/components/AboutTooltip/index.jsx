/* eslint-disable prefer-template */
import React from 'react';
import { useTranslation } from 'react-i18next';

import Button from 'shared/components/Button';
import Tooltip from 'shared/components/Tooltip';

import feedbackImage from './assets/feedback.png';
import { FeedbackDropdown, FeedbackImageCont, FeedbackImage, FeedbackParagraph } from './Styles';

const AboutTooltip = tooltipProps => {
  const { t } = useTranslation();

  return (
    <Tooltip
      width={300}
      {...tooltipProps}
      renderContent={() => (
        <FeedbackDropdown>
          <FeedbackImageCont>
            <FeedbackImage src={feedbackImage} alt={t('basic.feedback')} />
          </FeedbackImageCont>

          <FeedbackParagraph>{t('basic.analog')}</FeedbackParagraph>

          <FeedbackParagraph>
            {t('basic.author') + ': '}
            <a href="mailto:stepansukac@gmail.com">
              <strong>stepansukac@gmail.com</strong>
            </a>
          </FeedbackParagraph>

          <a href="https://getivor.com/" target="_blank" rel="noreferrer noopener">
            <Button variant="primary">{t('basic.visit')}</Button>
          </a>

          <a
            href="https://github.com/StsiapanSukach/Strategy"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Button style={{ marginLeft: 10 }} icon="github">
              {t('basic.github')}
            </Button>
          </a>
        </FeedbackDropdown>
      )}
    />
  );
};

export default AboutTooltip;
