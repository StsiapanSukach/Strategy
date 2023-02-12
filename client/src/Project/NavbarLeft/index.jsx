import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import { Icon, AboutTooltip } from 'shared/components';

import { NavLeft, LogoLink, StyledLogo, Bottom, Item, ItemText } from './Styles';

const propTypes = {
  issueSearchModalOpen: PropTypes.func.isRequired,
  issueCreateModalOpen: PropTypes.func.isRequired,
};

const ProjectNavbarLeft = ({ issueSearchModalOpen, issueCreateModalOpen }) => {
  const { t, i18n } = useTranslation();

  const lang = i18n.language === 'ru' ? 'en' : 'ru';
  const secondLang = i18n.language === 'ru' ? 'ru' : 'en';

  const changeLanguageHandler = () => {
    i18n.changeLanguage(lang);
  };

  return (
    <NavLeft>
      <LogoLink to="/">
        <StyledLogo color="#fff" />
      </LogoLink>

      <Item onClick={issueSearchModalOpen}>
        <Icon type="search" size={22} top={1} left={3} />
        <ItemText>{t('nav_menu.search_issues')}</ItemText>
      </Item>

      <Item onClick={issueCreateModalOpen}>
        <Icon type="plus" size={27} />
        <ItemText>{t('nav_menu.create_issue')}</ItemText>
      </Item>

      <Bottom>
        <Item onClick={changeLanguageHandler}>
          <Icon type="link" size={25} />
          <ItemText>
            {lang} 🠖 {secondLang}
          </ItemText>
        </Item>
        <AboutTooltip
          placement="right"
          offset={{ top: -218 }}
          renderLink={linkProps => (
            <Item {...linkProps}>
              <Icon type="help" size={25} />
              <ItemText>{t('nav_menu.about')}</ItemText>
            </Item>
          )}
        />
      </Bottom>
    </NavLeft>
  );
};
ProjectNavbarLeft.propTypes = propTypes;

export default ProjectNavbarLeft;
