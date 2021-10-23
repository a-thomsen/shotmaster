import React from 'react';
import Icon1 from '../../images/feedback.svg';
import Icon2 from '../../images/portfolio.svg';
import Icon3 from '../../images/message.svg';
import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP } from './ServicesElement';

const Services = () => {
  return (
    <>
      <ServicesContainer id='services'>
        <ServicesH1>What we offer?</ServicesH1>
        <ServicesWrapper>
          <ServicesCard>
            <ServicesIcon src={Icon1} />
            <ServicesH2>Constructive feedback</ServicesH2>
            <ServicesP>We frequently comment on your work and help you rise to the top!</ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon2} />
            <ServicesH2>Showcase portfolio</ServicesH2>
            <ServicesP>Shot provides you a platform to showcase your best work.</ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon3} />
            <ServicesH2>Connect with other creators</ServicesH2>
            <ServicesP>Join the discussion with like-minded visual wizards from all around the world.</ServicesP>
          </ServicesCard>
        </ServicesWrapper>
      </ServicesContainer>
    </>
  )
}

export default Services;
