import React, { Component } from "react";
import {
} from "reactstrap";

export default class StudentIn extends Component {
  render() {
    return (
      <div class="jumbotron bg-white rounded-0 my-0 py-0 mb-n4">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-12">
              <div class="row">
                <div class="col-md-6">
                  <div class="card rounded-pill my-1">
                    <div class="card-body d-flex align-items-center p-2">
                      <span class="fa-stack fa-1x mr-1" aria-hidden="true">
                        <svg
                          class="svg-inline--fa fa-circle fa-w-16 fa-stack-2x text-secondary"
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="circle"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          data-fa-i2svg=""
                        >
                          <path
                            fill="currentColor"
                            d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"
                          ></path>
                        </svg>
                        <i class="fas fa-circle fa-stack-2x text-secondary"></i>
                        <svg
                          class="svg-inline--fa fa-user-graduate fa-w-14 fa-stack-1x text-light"
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="user-graduate"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                          data-fa-i2svg=""
                        >
                          <path
                            fill="currentColor"
                            d="M319.4 320.6L224 416l-95.4-95.4C57.1 323.7 0 382.2 0 454.4v9.6c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-9.6c0-72.2-57.1-130.7-128.6-133.8zM13.6 79.8l6.4 1.5v58.4c-7 4.2-12 11.5-12 20.3 0 8.4 4.6 15.4 11.1 19.7L3.5 242c-1.7 6.9 2.1 14 7.6 14h41.8c5.5 0 9.3-7.1 7.6-14l-15.6-62.3C51.4 175.4 56 168.4 56 160c0-8.8-5-16.1-12-20.3V87.1l66 15.9c-8.6 17.2-14 36.4-14 57 0 70.7 57.3 128 128 128s128-57.3 128-128c0-20.6-5.3-39.8-14-57l96.3-23.2c18.2-4.4 18.2-27.1 0-31.5l-190.4-46c-13-3.1-26.7-3.1-39.7 0L13.6 48.2c-18.1 4.4-18.1 27.2 0 31.6z"
                          ></path>
                        </svg>
                        <i class="fas fa-user-graduate fa-stack-1x text-light"></i>
                      </span>
                      <span>
                        <p class="h6 d-inline-block my-0 ml-n1">
                          <span class="btn btn-group-sm btn-xs my-0 align-text-bottom btn-white justify-content-center font-weight-bold text-uppercase disabled">
                            Students
                          </span>
                        </p>
                        <a
                          href="#"
                          class="btn btn-xs my-0 align-text-bottom btn-outline-primary justify-content-center"
                        >
                          Enroll course
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="card rounded-pill my-1">
                    <div class="card-body d-flex align-items-center p-2">
                      <span class="fa-stack fa-1x mr-1" aria-hidden="true">
                        <svg
                          class="svg-inline--fa fa-circle fa-w-16 fa-stack-2x text-secondary"
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="circle"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          data-fa-i2svg=""
                        >
                          <path
                            fill="currentColor"
                            d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"
                          ></path>
                        </svg>
                        <i class="fas fa-circle fa-stack-2x text-secondary"></i>
                        <svg
                          class="svg-inline--fa fa-user-tie fa-w-
                        14 fa-stack-1x text-light"
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="user-tie"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                          data-fa-i2svg=""
                        >
                          <path
                            fill="currentColor"
                            d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm95.8 32.6L272 480l-32-136 32-56h-96l32 56-32 136-47.8-191.4C56.9 292 0 350.3 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-72.1-56.9-130.4-128.2-133.8z"
                          ></path>
                        </svg>
                        <i class="fas fa-user-tie fa-stack-1x text-light"></i>
                      </span>
                      <span>
                        <p class="h6 d-inline-block my-0 ml-n1">
                          <span class="btn btn-group-sm btn-xs my-0 align-text-bottom btn-white justify-content-center font-weight-bold text-uppercase disabled">
                            Instructors
                          </span>
                        </p>
                        <a
                          href="#"
                          class="btn btn-xs my-0 align-text-bottom btn-outline-primary justify-content-center"
                        >
                          Add course
                        </a>
                        <a
                          href="#"
                          class="btn btn-xs my-0 align-text-bottom btn-outline-primary justify-content-center"
                        >
                          Remove Course
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
