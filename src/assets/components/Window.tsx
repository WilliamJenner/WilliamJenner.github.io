import React from "react";
import Tabs from "./Tabs";
import { TreeView } from "./TreeView";

interface IWindowProps {}

const Window: React.FC<IWindowProps> = (props) => {
  return (
    <div className="outer">
      <div className="middle">
        <div className="inner">
          <div className="window">
            <div className="title-bar">
              <div className="title-bar-text">Will Jenner</div>
              <div className="title-bar-controls">
                <button aria-label="Minimize"></button>
                <button aria-label="Maximize"></button>
                <button aria-label="Close"></button>
              </div>
            </div>
            <div className="window-body">
              <Tabs
                tabs={[
                  {
                    tabContent: (
                      <article role="tabpanel" id="yes">
                        <p>Set your listening preferences</p>
                        <fieldset>
                          <legend>Today's mood</legend>
                          <div className="field-row">
                            <input
                              id="radio29"
                              type="radio"
                              name="fieldset-example2"
                            />
                            <label htmlFor="radio29">Nicki Minaj</label>
                          </div>
                          <div className="field-row">
                            <input
                              id="radio30"
                              type="radio"
                              name="fieldset-example2"
                            />
                            <label htmlFor="radio30">Bell Towers</label>
                          </div>
                          <div className="field-row">
                            <input
                              id="radio31"
                              type="radio"
                              name="fieldset-example2"
                            />
                            <label htmlFor="radio31">
                              The Glamorous Monique
                            </label>
                          </div>
                          <div className="field-row">
                            <input
                              id="radio32"
                              type="radio"
                              name="fieldset-example2"
                            />
                            <label htmlFor="radio32">EN. V</label>
                          </div>
                        </fieldset>
                        <section className="field-row">
                          <button>Reset Alarm...</button>
                          <label>Try this to get some attention</label>
                        </section>
                      </article>
                    ),
                    title: "yes",
                  },
                  {
                    tabContent: (
                      <article role="tabpanel" id="no">
                        <p>Set your listening preferences</p>
                        <fieldset>
                          <legend>Today's mood</legend>
                          <div className="field-row">
                            <input
                              id="radio29"
                              type="radio"
                              name="fieldset-example2"
                            />
                            <label htmlFor="radio29">Nicki Minaj</label>
                          </div>
                          <div className="field-row">
                            <input
                              id="radio30"
                              type="radio"
                              name="fieldset-example2"
                            />
                            <label htmlFor="radio30">Bell Towers</label>
                          </div>
                          <div className="field-row">
                            <input
                              id="radio31"
                              type="radio"
                              name="fieldset-example2"
                            />
                            <label htmlFor="radio31">
                              The Glamorous Monique
                            </label>
                          </div>
                          <div className="field-row">
                            <input
                              id="radio32"
                              type="radio"
                              name="fieldset-example2"
                            />
                            <label htmlFor="radio32">EN. V</label>
                          </div>
                        </fieldset>
                        <section className="field-row">
                          <button>Reeeeeeeeeeeeeeeeeeeeeeeeeeeset...</button>
                          <label>Try this to get some attention</label>
                        </section>
                        <TreeView
                          treeItems={[
                            {
                              li: {
                                summary: "Hi",
                                child: [
                                  {
                                    li: {
                                      summary: "hi",
                                      child: [{ li: "hey" }],
                                    },
                                  },
                                  {
                                    li: {
                                      summary: "boo",
                                      child: [{ li: "ahhh" }, { li: "bruh" }],
                                    },
                                  },
                                  {
                                    li: "hey",
                                  },
                                  {
                                    li: "hey",
                                  },
                                  {
                                    li: "hey",
                                  },
                                  {
                                    li: "hey",
                                  },
                                ],
                              },
                            },
                            {
                              li: "hello world",
                            },
                          ]}
                        />
                      </article>
                    ),
                    title: "no",
                  },
                ]}
              />
              <section
                className="field-row"
                style={{ justifyContent: "flex-end" }}
              >
                <button>OK</button>
                <button>Cancel</button>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Window;
