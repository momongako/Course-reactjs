import React from 'react';

const CourseDetail = () => {
  return (
    <div className="MuiGrid-root MuiGrid-container">
      <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-8">
        <div className="MuiBox-root MuiBox-root-399">
          <div
            className="MuiGrid-root MuiGrid-container MuiGrid-align-items-xs-center"
            style={{ minHeight: '350px' }}
          >
            <div className="MuiBox-root MuiBox-root-400">
              <h4 className="MuiTypography-root MuiTypography-h4 MuiTypography-gutterBottom">
                Advandge-programming
              </h4>
              <p className="MuiTypography-root MuiTypography-body1 MuiTypography-gutterBottom">
                React can also render on the server using Node and power mobile
                apps using React Native.
              </p>
              <div className="MuiBox-root MuiBox-root-401">
                <div className="MuiBox-root MuiBox-root-402">
                  <span className="MuiRating-root">
                    <span className="MuiRating-decimal">
                      <label
                        className="MuiRating-label"
                        htmlFor="hover-feedback-0-5"
                        style={{
                          width: '0%',
                          overflow: 'hidden',
                          zIndex: 1,
                          position: 'absolute',
                        }}
                      >
                        <span className="MuiRating-icon MuiRating-iconFilled">
                          <svg
                            className="MuiSvgIcon-root MuiSvgIcon-fontSizeInherit"
                            focusable="false"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                          </svg>
                        </span>
                        <span className="MuiRating-visuallyhidden">
                          0.5 Stars
                        </span>
                      </label>
                      <input
                        id="hover-feedback-0-5"
                        type="radio"
                        name="hover-feedback"
                        className="MuiRating-visuallyhidden"
                        defaultValue="0.5"
                      />
                      <label
                        className="MuiRating-label"
                        htmlFor="hover-feedback-1"
                      >
                        <span className="MuiRating-icon MuiRating-iconFilled">
                          <svg
                            className="MuiSvgIcon-root MuiSvgIcon-fontSizeInherit"
                            focusable="false"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                          </svg>
                        </span>
                        <span className="MuiRating-visuallyhidden">1 Star</span>
                      </label>
                      <input
                        id="hover-feedback-1"
                        type="radio"
                        name="hover-feedback"
                        className="MuiRating-visuallyhidden"
                        defaultValue={1}
                      />
                    </span>
                    <span className="MuiRating-decimal">
                      <label
                        className="MuiRating-label"
                        htmlFor="hover-feedback-1-5"
                        style={{
                          width: '0%',
                          overflow: 'hidden',
                          zIndex: 1,
                          position: 'absolute',
                        }}
                      >
                        <span className="MuiRating-icon MuiRating-iconFilled">
                          <svg
                            className="MuiSvgIcon-root MuiSvgIcon-fontSizeInherit"
                            focusable="false"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                          </svg>
                        </span>
                        <span className="MuiRating-visuallyhidden">
                          1.5 Stars
                        </span>
                      </label>
                      <input
                        id="hover-feedback-1-5"
                        type="radio"
                        name="hover-feedback"
                        className="MuiRating-visuallyhidden"
                        defaultValue="1.5"
                      />
                      <label
                        className="MuiRating-label"
                        htmlFor="hover-feedback-2"
                      >
                        <span className="MuiRating-icon MuiRating-iconFilled">
                          <svg
                            className="MuiSvgIcon-root MuiSvgIcon-fontSizeInherit"
                            focusable="false"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                          </svg>
                        </span>
                        <span className="MuiRating-visuallyhidden">
                          2 Stars
                        </span>
                      </label>
                      <input
                        id="hover-feedback-2"
                        type="radio"
                        name="hover-feedback"
                        className="MuiRating-visuallyhidden"
                        defaultValue={2}
                      />
                    </span>
                    <span className="MuiRating-decimal">
                      <label
                        className="MuiRating-label"
                        htmlFor="hover-feedback-2-5"
                        style={{
                          width: '0%',
                          overflow: 'hidden',
                          zIndex: 1,
                          position: 'absolute',
                        }}
                      >
                        <span className="MuiRating-icon MuiRating-iconFilled">
                          <svg
                            className="MuiSvgIcon-root MuiSvgIcon-fontSizeInherit"
                            focusable="false"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                          </svg>
                        </span>
                        <span className="MuiRating-visuallyhidden">
                          2.5 Stars
                        </span>
                      </label>
                      <input
                        id="hover-feedback-2-5"
                        type="radio"
                        name="hover-feedback"
                        className="MuiRating-visuallyhidden"
                        defaultValue="2.5"
                      />
                      <label
                        className="MuiRating-label"
                        htmlFor="hover-feedback-3"
                      >
                        <span className="MuiRating-icon MuiRating-iconFilled">
                          <svg
                            className="MuiSvgIcon-root MuiSvgIcon-fontSizeInherit"
                            focusable="false"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                          </svg>
                        </span>
                        <span className="MuiRating-visuallyhidden">
                          3 Stars
                        </span>
                      </label>
                      <input
                        id="hover-feedback-3"
                        type="radio"
                        name="hover-feedback"
                        className="MuiRating-visuallyhidden"
                        defaultValue={3}
                      />
                    </span>
                    <span className="MuiRating-decimal">
                      <label
                        className="MuiRating-label"
                        htmlFor="hover-feedback-3-5"
                        style={{
                          width: '0%',
                          overflow: 'hidden',
                          zIndex: 1,
                          position: 'absolute',
                        }}
                      >
                        <span className="MuiRating-icon MuiRating-iconFilled">
                          <svg
                            className="MuiSvgIcon-root MuiSvgIcon-fontSizeInherit"
                            focusable="false"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                          </svg>
                        </span>
                        <span className="MuiRating-visuallyhidden">
                          3.5 Stars
                        </span>
                      </label>
                      <input
                        id="hover-feedback-3-5"
                        type="radio"
                        name="hover-feedback"
                        className="MuiRating-visuallyhidden"
                        defaultValue="3.5"
                      />
                      <label
                        className="MuiRating-label"
                        htmlFor="hover-feedback-4"
                      >
                        <span className="MuiRating-icon MuiRating-iconFilled">
                          <svg
                            className="MuiSvgIcon-root MuiSvgIcon-fontSizeInherit"
                            focusable="false"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                          </svg>
                        </span>
                        <span className="MuiRating-visuallyhidden">
                          4 Stars
                        </span>
                      </label>
                      <input
                        id="hover-feedback-4"
                        type="radio"
                        name="hover-feedback"
                        className="MuiRating-visuallyhidden"
                        defaultValue={4}
                        defaultChecked
                      />
                    </span>
                    <span className="MuiRating-decimal">
                      <label
                        className="MuiRating-label"
                        htmlFor="hover-feedback-4-5"
                        style={{
                          width: '0%',
                          overflow: 'hidden',
                          zIndex: 1,
                          position: 'absolute',
                        }}
                      >
                        <span className="MuiRating-icon MuiRating-iconEmpty">
                          <svg
                            className="MuiSvgIcon-root MuiSvgIcon-fontSizeInherit"
                            focusable="false"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                          </svg>
                        </span>
                        <span className="MuiRating-visuallyhidden">
                          4.5 Stars
                        </span>
                      </label>
                      <input
                        id="hover-feedback-4-5"
                        type="radio"
                        name="hover-feedback"
                        className="MuiRating-visuallyhidden"
                        defaultValue="4.5"
                      />
                      <label
                        className="MuiRating-label"
                        htmlFor="hover-feedback-5"
                      >
                        <span className="MuiRating-icon MuiRating-iconEmpty">
                          <svg
                            className="MuiSvgIcon-root MuiSvgIcon-fontSizeInherit"
                            focusable="false"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                          </svg>
                        </span>
                        <span className="MuiRating-visuallyhidden">
                          5 Stars
                        </span>
                      </label>
                      <input
                        id="hover-feedback-5"
                        type="radio"
                        name="hover-feedback"
                        className="MuiRating-visuallyhidden"
                        defaultValue={5}
                      />
                    </span>
                  </span>
                </div>
              </div>
              <div className="MuiBox-root MuiBox-root-403">
                <div className="MuiGrid-root MuiGrid-container MuiGrid-align-items-xs-center">
                  <div className="MuiBox-root MuiBox-root-449">
                    Created by NAAAA
                  </div>
                  <div className="MuiBox-root MuiBox-root-450">
                    Last updated 24/07/2021
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="MuiTabs-root makeStyles-root-408 makeStyles-gmailTabs-406">
          <div
            className="MuiButtonBase-root MuiTabScrollButton-root MuiTabs-scrollButtons Mui-disabled"
            aria-disabled="false"
          >
            <svg
              className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall"
              focusable="false"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z" />
            </svg>
            <span className="MuiTouchRipple-root" />
          </div>
          <div
            className="MuiTabs-scrollable"
            style={{
              width: '99px',
              height: '99px',
              position: 'absolute',
              top: '-9999px',
              overflow: 'scroll',
            }}
          />
          <div
            className="MuiTabs-scroller MuiTabs-scrollable"
            style={{ marginBottom: '0px' }}
          >
            <div
              aria-label="scrollable force tabs"
              className="MuiTabs-flexContainer"
              role="tablist"
            >
              <button
                className="MuiButtonBase-root MuiTab-root makeStyles-root-411 MuiTab-textColorInherit Mui-selected makeStyles-selected-414 makeStyles-selected-416 MuiTab-labelIcon makeStyles-labelIcon-412"
                tabIndex={0}
                type="button"
                role="tab"
                aria-selected="true"
                id="scrollable-force-tab-0"
                aria-controls="scrollable-force-tabpanel-0"
              >
                <span className="MuiTab-wrapper makeStyles-wrapper-413 makeStyles-wrapper-415 makeStyles-wrapper-407">
                  <svg
                    className="MuiSvgIcon-root"
                    focusable="false"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M19 3H4.99c-1.11 0-1.98.89-1.98 2L3 19c0 1.1.88 2 1.99 2H19c1.1 0 2-.9 2-2V5c0-1.11-.9-2-2-2zm0 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H4.99V5H19v10z" />
                  </svg>
                  <div className="MuiTabItem-labelGroup">
                    <div className="MuiTabItem-label">Overview </div>
                  </div>
                </span>
                <span className="MuiTouchRipple-root" />
              </button>
              <button
                className="MuiButtonBase-root MuiTab-root makeStyles-root-411 MuiTab-textColorInherit MuiTab-labelIcon makeStyles-labelIcon-412"
                tabIndex={-1}
                type="button"
                role="tab"
                aria-selected="false"
                id="scrollable-force-tab-1"
                aria-controls="scrollable-force-tabpanel-1"
              >
                <span className="MuiTab-wrapper makeStyles-wrapper-413 makeStyles-wrapper-421 makeStyles-wrapper-407">
                  <svg
                    className="MuiSvgIcon-root"
                    focusable="false"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                  </svg>
                  <div className="MuiTabItem-labelGroup">
                    <div className="MuiTabItem-label">Curriculum </div>
                  </div>
                </span>
                <span className="MuiTouchRipple-root" />
              </button>
              <button
                className="MuiButtonBase-root MuiTab-root makeStyles-root-411 MuiTab-textColorInherit MuiTab-labelIcon makeStyles-labelIcon-412"
                tabIndex={-1}
                type="button"
                role="tab"
                aria-selected="false"
                id="scrollable-force-tab-2"
                aria-controls="scrollable-force-tabpanel-2"
              >
                <span className="MuiTab-wrapper makeStyles-wrapper-413 makeStyles-wrapper-423 makeStyles-wrapper-407">
                  <svg
                    className="MuiSvgIcon-root"
                    focusable="false"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7z" />
                  </svg>
                  <div className="MuiTabItem-labelGroup">
                    <div className="MuiTabItem-label">FAQ </div>
                  </div>
                </span>
                <span className="MuiTouchRipple-root" />
              </button>
              <button
                className="MuiButtonBase-root MuiTab-root makeStyles-root-411 MuiTab-textColorInherit MuiTab-labelIcon makeStyles-labelIcon-412"
                tabIndex={-1}
                type="button"
                role="tab"
                aria-selected="false"
                id="scrollable-force-tab-3"
                aria-controls="scrollable-force-tabpanel-3"
              >
                <span className="MuiTab-wrapper makeStyles-wrapper-413 makeStyles-wrapper-425 makeStyles-wrapper-407">
                  <svg
                    className="MuiSvgIcon-root"
                    focusable="false"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
                  </svg>
                  <div className="MuiTabItem-labelGroup">
                    <div className="MuiTabItem-label">Announcement </div>
                  </div>
                </span>
                <span className="MuiTouchRipple-root" />
              </button>
              <button
                className="MuiButtonBase-root MuiTab-root makeStyles-root-411 MuiTab-textColorInherit MuiTab-labelIcon makeStyles-labelIcon-412"
                tabIndex={-1}
                type="button"
                role="tab"
                aria-selected="false"
                id="scrollable-force-tab-4"
                aria-controls="scrollable-force-tabpanel-4"
              >
                <span className="MuiTab-wrapper makeStyles-wrapper-413 makeStyles-wrapper-427 makeStyles-wrapper-407">
                  <svg
                    className="MuiSvgIcon-root"
                    focusable="false"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
                  </svg>
                  <div className="MuiTabItem-labelGroup">
                    <div className="MuiTabItem-label">Reviews </div>
                  </div>
                </span>
                <span className="MuiTouchRipple-root" />
              </button>
            </div>
            <span
              className="PrivateTabIndicator-root-417 PrivateTabIndicator-colorSecondary-419 MuiTabs-indicator makeStyles-indicator-409 makeStyles-indicator-410"
              style={{ left: '0px', width: '231.328px' }}
            >
              <div className="MuiIndicator-0" />
            </span>
          </div>
          <div
            className="MuiButtonBase-root MuiTabScrollButton-root MuiTabs-scrollButtons Mui-disabled"
            aria-disabled="false"
          >
            <svg
              className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall"
              focusable="false"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z" />
            </svg>
            <span className="MuiTouchRipple-root" />
          </div>
        </div>
        <div className="MuiBox-root MuiBox-root-429">
          <div className="MuiPaper-root MuiPaper-elevation0 MuiPaper-rounded">
            <div
              role="tabpanel"
              id="scrollable-force-tabpanel-0"
              aria-labelledby="scrollable-force-tab-0"
            >
              <div className="MuiBox-root MuiBox-root-430">
                <div className="MuiBox-root MuiBox-root-431">
                  <h5 className="MuiTypography-root MuiTypography-h5 MuiTypography-gutterBottom">
                    Description
                  </h5>
                  <h6 className="MuiTypography-root MuiTypography-subtitle1 MuiTypography-gutterBottom">
                    A
                  </h6>
                </div>
                <div className="MuiBox-root MuiBox-root-432">
                  <h5 className="MuiTypography-root MuiTypography-h5 MuiTypography-gutterBottom">
                    What You’ll Learn
                  </h5>
                  <div className="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-2">
                    <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-6">
                      <ul className="MuiList-root MuiList-padding">
                        <li className="MuiListItem-root MuiListItem-gutters">
                          <div className="MuiListItemIcon-root">
                            <svg
                              className="MuiSvgIcon-root"
                              focusable="false"
                              viewBox="0 0 24 24"
                              aria-hidden="true"
                            >
                              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                            </svg>
                          </div>
                          <div className="MuiListItemText-root">
                            <span className="MuiTypography-root MuiListItemText-primary MuiTypography-body1 MuiTypography-displayBlock">
                              Setting up the environment
                            </span>
                          </div>
                        </li>
                        <li className="MuiListItem-root MuiListItem-gutters">
                          <div className="MuiListItemIcon-root">
                            <svg
                              className="MuiSvgIcon-root"
                              focusable="false"
                              viewBox="0 0 24 24"
                              aria-hidden="true"
                            >
                              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                            </svg>
                          </div>
                          <div className="MuiListItemText-root">
                            <span className="MuiTypography-root MuiListItemText-primary MuiTypography-body1 MuiTypography-displayBlock">
                              Advanced HTML Practices
                            </span>
                          </div>
                        </li>
                        <li className="MuiListItem-root MuiListItem-gutters">
                          <div className="MuiListItemIcon-root">
                            <svg
                              className="MuiSvgIcon-root"
                              focusable="false"
                              viewBox="0 0 24 24"
                              aria-hidden="true"
                            >
                              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                            </svg>
                          </div>
                          <div className="MuiListItemText-root">
                            <span className="MuiTypography-root MuiListItemText-primary MuiTypography-body1 MuiTypography-displayBlock">
                              Build a portfolio website
                            </span>
                          </div>
                        </li>
                        <li className="MuiListItem-root MuiListItem-gutters">
                          <div className="MuiListItemIcon-root">
                            <svg
                              className="MuiSvgIcon-root"
                              focusable="false"
                              viewBox="0 0 24 24"
                              aria-hidden="true"
                            >
                              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                            </svg>
                          </div>
                          <div className="MuiListItemText-root">
                            <span className="MuiTypography-root MuiListItemText-primary MuiTypography-body1 MuiTypography-displayBlock">
                              Responsive Designs
                            </span>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-6">
                      <ul className="MuiList-root MuiList-padding">
                        <li className="MuiListItem-root MuiListItem-gutters">
                          <div className="MuiListItemIcon-root">
                            <svg
                              className="MuiSvgIcon-root"
                              focusable="false"
                              viewBox="0 0 24 24"
                              aria-hidden="true"
                            >
                              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                            </svg>
                          </div>
                          <div className="MuiListItemText-root">
                            <span className="MuiTypography-root MuiListItemText-primary MuiTypography-body1 MuiTypography-displayBlock">
                              Understand HTML Programming
                            </span>
                          </div>
                        </li>
                        <li className="MuiListItem-root MuiListItem-gutters">
                          <div className="MuiListItemIcon-root">
                            <svg
                              className="MuiSvgIcon-root"
                              focusable="false"
                              viewBox="0 0 24 24"
                              aria-hidden="true"
                            >
                              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                            </svg>
                          </div>
                          <div className="MuiListItemText-root">
                            <span className="MuiTypography-root MuiListItemText-primary MuiTypography-body1 MuiTypography-displayBlock">
                              Code HTML
                            </span>
                          </div>
                        </li>
                        <li className="MuiListItem-root MuiListItem-gutters">
                          <div className="MuiListItemIcon-root">
                            <svg
                              className="MuiSvgIcon-root"
                              focusable="false"
                              viewBox="0 0 24 24"
                              aria-hidden="true"
                            >
                              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                            </svg>
                          </div>
                          <div className="MuiListItemText-root">
                            <span className="MuiTypography-root MuiListItemText-primary MuiTypography-body1 MuiTypography-displayBlock">
                              Start building beautiful websites
                            </span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="MuiBox-root MuiBox-root-433">
                  <h5 className="MuiTypography-root MuiTypography-h5 MuiTypography-gutterBottom">
                    Requirements
                  </h5>
                  <div className="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-2">
                    <div className="MuiGrid-root MuiGrid-item">
                      <ul className="MuiList-root MuiList-padding">
                        <li className="MuiListItem-root MuiListItem-gutters">
                          <div className="MuiListItemIcon-root">
                            <svg
                              className="MuiSvgIcon-root"
                              focusable="false"
                              viewBox="0 0 24 24"
                              aria-hidden="true"
                            >
                              <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
                            </svg>
                          </div>
                          <div className="MuiListItemText-root">
                            <span className="MuiTypography-root MuiListItemText-primary MuiTypography-body1 MuiTypography-displayBlock">
                              Any computer will work: Windows, macOS or Linux
                            </span>
                          </div>
                        </li>
                        <li className="MuiListItem-root MuiListItem-gutters">
                          <div className="MuiListItemIcon-root">
                            <svg
                              className="MuiSvgIcon-root"
                              focusable="false"
                              viewBox="0 0 24 24"
                              aria-hidden="true"
                            >
                              <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
                            </svg>
                          </div>
                          <div className="MuiListItemText-root">
                            <span className="MuiTypography-root MuiListItemText-primary MuiTypography-body1 MuiTypography-displayBlock">
                              Basic programming HTML and CSS.
                            </span>
                          </div>
                        </li>
                        <li className="MuiListItem-root MuiListItem-gutters">
                          <div className="MuiListItemIcon-root">
                            <svg
                              className="MuiSvgIcon-root"
                              focusable="false"
                              viewBox="0 0 24 24"
                              aria-hidden="true"
                            >
                              <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
                            </svg>
                          </div>
                          <div className="MuiListItemText-root">
                            <span className="MuiTypography-root MuiListItemText-primary MuiTypography-body1 MuiTypography-displayBlock">
                              Basic/Minimal understanding of JavaScript
                            </span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="MuiBox-root MuiBox-root-434">
                  <h5 className="MuiTypography-root MuiTypography-h5 MuiTypography-gutterBottom">
                    Here Is Exactly What We Cover In This Course:
                  </h5>
                  <h6 className="MuiTypography-root MuiTypography-subtitle1 MuiTypography-gutterBottom">
                    B
                  </h6>
                </div>
              </div>
            </div>
            <div
              role="tabpanel"
              hidden
              id="scrollable-force-tabpanel-1"
              aria-labelledby="scrollable-force-tab-1"
            />
            <div
              role="tabpanel"
              hidden
              id="scrollable-force-tabpanel-2"
              aria-labelledby="scrollable-force-tab-2"
            />
            <div
              role="tabpanel"
              hidden
              id="scrollable-force-tabpanel-3"
              aria-labelledby="scrollable-force-tab-3"
            />
            <div
              role="tabpanel"
              hidden
              id="scrollable-force-tabpanel-4"
              aria-labelledby="scrollable-force-tab-4"
            />
          </div>
        </div>
      </div>
      <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-4">
        <div className="MuiBox-root MuiBox-root-435 makeStyles-position-397">
          <div className="MuiPaper-root MuiCard-root makeStyles-root-436 makeStyles-root-442 makeStyles-root-443 MuiPaper-elevation1 MuiPaper-rounded">
            <div
              className="MuiCardMedia-root makeStyles-root-440 makeStyles-root-441"
              style={{
                backgroundImage:
                  'url("https://elearning0706.cybersoft.edu.vn/hinhanh/advandge-programming.jpg")',
              }}
            />
            <div className="MuiAvatar-root MuiAvatar-circular makeStyles-avatar-438">
              <img src="https://i.pravatar.cc/300" className="MuiAvatar-img" />
            </div>
            <div className="MuiBox-root MuiBox-root-444">
              <h5 className="MuiTypography-root MuiTypography-h5 MuiTypography-gutterBottom MuiTypography-alignCenter">
                Free 100%
              </h5>
            </div>
            <div className="MuiBox-root MuiBox-root-445">
              <a
                className="MuiBox-root MuiBox-root-446"
                href="/sign-in"
                style={{ textDecoration: 'none' }}
              >
                <button
                  className="MuiButtonBase-root MuiButton-root MuiButton-text makeStyles-button-439 MuiButton-textSizeSmall MuiButton-sizeSmall"
                  tabIndex={0}
                  type="button"
                >
                  <span className="MuiButton-label">Login to Enroll</span>
                  <span className="MuiTouchRipple-root" />
                </button>
              </a>
            </div>
            <div className="MuiBox-root MuiBox-root-447">
              <div className="MuiBox-root MuiBox-root-448">
                <h6 className="MuiTypography-root MuiTypography-subtitle1">
                  This course includes
                </h6>
              </div>
              <ul className="MuiList-root MuiList-dense">
                <li className="MuiListItem-root MuiListItem-dense MuiListItem-gutters">
                  <div
                    className="MuiListItemIcon-root"
                    style={{ minWidth: '32px' }}
                  >
                    <svg
                      className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall"
                      focusable="false"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M20 19.59V8l-6-6H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c.45 0 .85-.15 1.19-.4l-4.43-4.43c-.8.52-1.74.83-2.76.83-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5c0 1.02-.31 1.96-.83 2.75L20 19.59zM9 13c0 1.66 1.34 3 3 3s3-1.34 3-3-1.34-3-3-3-3 1.34-3 3z" />
                    </svg>
                  </div>
                  <div className="MuiListItemText-root MuiListItemText-dense">
                    <p className="MuiTypography-root MuiListItemText-secondary MuiTypography-body2 MuiTypography-colorTextSecondary MuiTypography-displayBlock">
                      1 article
                    </p>
                  </div>
                </li>
                <li className="MuiListItem-root MuiListItem-dense MuiListItem-gutters">
                  <div
                    className="MuiListItemIcon-root"
                    style={{ minWidth: '32px' }}
                  >
                    <svg
                      className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall"
                      focusable="false"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M18.6 6.62c-1.44 0-2.8.56-3.77 1.53L12 10.66 10.48 12h.01L7.8 14.39c-.64.64-1.49.99-2.4.99-1.87 0-3.39-1.51-3.39-3.38S3.53 8.62 5.4 8.62c.91 0 1.76.35 2.44 1.03l1.13 1 1.51-1.34L9.22 8.2C8.2 7.18 6.84 6.62 5.4 6.62 2.42 6.62 0 9.04 0 12s2.42 5.38 5.4 5.38c1.44 0 2.8-.56 3.77-1.53l2.83-2.5.01.01L13.52 12h-.01l2.69-2.39c.64-.64 1.49-.99 2.4-.99 1.87 0 3.39 1.51 3.39 3.38s-1.52 3.38-3.39 3.38c-.9 0-1.76-.35-2.44-1.03l-1.14-1.01-1.51 1.34 1.27 1.12c1.02 1.01 2.37 1.57 3.82 1.57 2.98 0 5.4-2.41 5.4-5.38s-2.42-5.37-5.4-5.37z" />
                    </svg>
                  </div>
                  <div className="MuiListItemText-root MuiListItemText-dense">
                    <p className="MuiTypography-root MuiListItemText-secondary MuiTypography-body2 MuiTypography-colorTextSecondary MuiTypography-displayBlock">
                      Full lifetime accesso
                    </p>
                  </div>
                </li>
                <li className="MuiListItem-root MuiListItem-dense MuiListItem-gutters">
                  <div
                    className="MuiListItemIcon-root"
                    style={{ minWidth: '32px' }}
                  >
                    <svg
                      className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall"
                      focusable="false"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M15.5 1h-8C6.12 1 5 2.12 5 3.5v17C5 21.88 6.12 23 7.5 23h8c1.38 0 2.5-1.12 2.5-2.5v-17C18 2.12 16.88 1 15.5 1zm-4 21c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm4.5-4H7V4h9v14z" />
                    </svg>
                  </div>
                  <div className="MuiListItemText-root MuiListItemText-dense">
                    <p className="MuiTypography-root MuiListItemText-secondary MuiTypography-body2 MuiTypography-colorTextSecondary MuiTypography-displayBlock">
                      Access on mobile and TV
                    </p>
                  </div>
                </li>
                <li className="MuiListItem-root MuiListItem-dense MuiListItem-gutters">
                  <div
                    className="MuiListItemIcon-root"
                    style={{ minWidth: '32px' }}
                  >
                    <svg
                      className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall"
                      focusable="false"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z" />
                    </svg>
                  </div>
                  <div className="MuiListItemText-root MuiListItemText-dense">
                    <p className="MuiTypography-root MuiListItemText-secondary MuiTypography-body2 MuiTypography-colorTextSecondary MuiTypography-displayBlock">
                      SkillsFuture Credit eligible
                    </p>
                  </div>
                </li>
                <li className="MuiListItem-root MuiListItem-dense MuiListItem-gutters">
                  <div
                    className="MuiListItemIcon-root"
                    style={{ minWidth: '32px' }}
                  >
                    <svg
                      className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall"
                      focusable="false"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
                    </svg>
                  </div>
                  <div className="MuiListItemText-root MuiListItemText-dense">
                    <p className="MuiTypography-root MuiListItemText-secondary MuiTypography-body2 MuiTypography-colorTextSecondary MuiTypography-displayBlock">
                      Certificate of Completion
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CourseDetail;
