import {  useCallback, useState } from "react";
import { Accordion } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const JeenaAccordion = ({ defaultActive = 1, accordionsTitle = [], accordionContent = [] }) => {
  const [active, setActive] = useState(defaultActive);
const { t } = useTranslation();
  const toggleAccordion = useCallback(
    (id) => {
      setActive(active === id ? null : id);
    },
    [active]
  );

  return (
    <Accordion defaultActiveKey={active}>
      {accordionsTitle.map((accordion) => (
        <article className="accordion-item" key={accordion.id}>
          <h5 className="accordion-header">
            <Accordion.Toggle
              as="button"
              className={`accordion-button ${active === accordion.id ? "" : "collapsed"}`}
              eventKey={accordion.id}
              onClick={() => toggleAccordion(accordion.id)}
            >
              {t(accordion.title)}
            </Accordion.Toggle>
          </h5>

          <Accordion.Collapse eventKey={accordion.id}>
            <article className="accordion-body">
              <article className="row">
                {accordionContent
                  .filter((item) => item.id === accordion.id) // التأكد من توافق الـ content مع الـ accordion المناسب
                  .map((item) => (
                    <article className="col-12" key={item.id}>
                      <p>{t(item.content)}</p>
                    </article>
                  ))}
                {accordionContent.length === 0 && <p>No content available</p>}
              </article>
            </article>
          </Accordion.Collapse>
        </article>
      ))}
    </Accordion>
  );
};

export default JeenaAccordion ;
