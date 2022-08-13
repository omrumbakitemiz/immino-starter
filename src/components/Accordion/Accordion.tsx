import React from 'react';
import './Accordion.css';

type AccordionProps = {
  title: string;
  children: React.ReactNode;
};
function Accordion(props: AccordionProps) {
  const [show, setShow] = React.useState(false);
  const { title, children } = props;

  const onAccordionClick = () => {
    setShow(!show);
  };

  return (
    <div className="accordion">
      <div className="accordion-title">
        <h3>{title}</h3>
        <button type="button" onClick={() => onAccordionClick()}>
          {!show ? 'Show' : 'Hide'}
        </button>
      </div>
      {show && <div>{children}</div>}
    </div>
  );
}

export default Accordion;
