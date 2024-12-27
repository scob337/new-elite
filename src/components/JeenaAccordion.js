import {  useCallback, useState } from "react";
import { Accordion } from "react-bootstrap";

const JeenaAccordion = ({ defaultActive = 1, accordionsTitle = [], accordionContent = [] }) => {
  const [active, setActive] = useState(defaultActive);

  const toggleAccordion = useCallback(
    (id) => {
      setActive(active === id ? null : id);
    },
    [active]
  );

  return (
    <Accordion defaultActiveKey={active}>
      {accordionsTitle.map((accordion) => (
        <div className="accordion-item" key={accordion.id}>
          <h5 className="accordion-header">
            <Accordion.Toggle
              as="button"
              className={`accordion-button ${active === accordion.id ? "" : "collapsed"}`}
              eventKey={accordion.id}
              onClick={() => toggleAccordion(accordion.id)}
            >
              {accordion.title}
            </Accordion.Toggle>
          </h5>

          <Accordion.Collapse eventKey={accordion.id}>
            <div className="accordion-body">
              <div className="row">
                {accordionContent
                  .filter((item) => item.id === accordion.id) // التأكد من توافق الـ content مع الـ accordion المناسب
                  .map((item) => (
                    <div className="col-12" key={item.id}>
                      <p>{item.content}</p>
                    </div>
                  ))}
                {accordionContent.length === 0 && <p>No content available</p>}
              </div>
            </div>
          </Accordion.Collapse>
        </div>
      ))}
    </Accordion>
  );
};

export default JeenaAccordion ;
