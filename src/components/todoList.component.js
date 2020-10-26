import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Todo.css";

export default class TodoList extends Component {
    render() {
        return (
            
    <div className="card-hover-shadow-2x mb-3 card">
      <div className="card-header-tab card-header">
        <div className="card-header-title font-size-lg text-capitalize font-weight-normal">
            <i className="fa fa-tasks"></i>&nbsp; Task Lists</div>
            
      </div>
      <div className="scroll-area-sm">
        <div className="ps-show-limits">
          <div className="ps ps--active-y">
            <div className="ps-content">
              <ul className=" list-group list-group-flush">
                  <li className="list-group-item">
                    <div className="todo-indicator bg-warning"></div>
                    <div className="widget-content p-0">
                      <div className="widget-content-wrapper">
                        <div className="widget-content-left mr-2">
                          <div className="custom-checkbox custom-control"> 
                            <input className="custom-control-input" id="exampleCustomCheckbox12" type="checkbox" />
                            <label className="custom-control-label" for="exampleCustomCheckbox12">&nbsp;</label> 
                          </div>
                        </div>
                        <div className="widget-content-left">
                          <div className="widget-heading">Call Sam For payments 
                            <div className="badge badge-danger ml-2">Rejected</div>
                          </div>
                          <div className="widget-subheading"><i>By Bob</i></div>
                        </div>
                        <div className="widget-content-right"> 
                          <button className="border-0 btn-transition btn btn-outline-success"> 
                            <i className="fa fa-check"></i>
                          </button> 
                          <button className="border-0 btn-transition btn btn-outline-danger"> 
                            <i className="fa fa-trash"></i> 
                          </button> 
                       </div>
                      </div>
                    </div>
                </li>
                
                <li className="list-group-item">
                  <div className="todo-indicator bg-focus"></div>
                  <div className="widget-content p-0">
                    <div className="widget-content-wrapper">
                      <div className="widget-content-left mr-2">
                        <div className="custom-checkbox custom-control">
                            <input className="custom-control-input" id="exampleCustomCheckbox1" type="checkbox" />
                            <label className="custom-control-label" for="exampleCustomCheckbox1">&nbsp;</label>
                        </div>
                      </div>
                      <div className="widget-content-left">
                        <div className="widget-heading">Make payment to Bluedart</div>
                          <div className="widget-subheading">
                            <div>By Johnny <div className="badge badge-pill badge-info ml-2">NEW</div>
                          </div>
                      </div>
                      </div>
                      <div className="widget-content-right">
                        <button className="border-0 btn-transition btn btn-outline-success">
                        <i className="fa fa-check"></i></button> 
                        <button className="border-0 btn-transition btn btn-outline-danger">
                        <i className="fa fa-trash"></i>
                        </button> 
                      </div>
                    </div>
                  </div>
                </li>

                <li className="list-group-item">
                  <div className="todo-indicator bg-primary"></div>
                  <div className="widget-content p-0">
                    <div className="widget-content-wrapper">
                      <div className="widget-content-left mr-2">
                        <div className="custom-checkbox custom-control">
                            <input className="custom-control-input" id="exampleCustomCheckbox4" type="checkbox"/><label className="custom-control-label" for="exampleCustomCheckbox4">&nbsp;</label></div>
                      </div>
                      <div className="widget-content-left flex2">
                        <div className="widget-heading">Office rent </div>
                        <div className="widget-subheading">By Samino!</div>
                      </div>
                      <div className="widget-content-right">
                        <button className="border-0 btn-transition btn btn-outline-success">
                          <i className="fa fa-check"></i></button>
                        <button className="border-0 btn-transition btn btn-outline-danger">
                          <i className="fa fa-trash"></i> </button> 
                          </div>
                    </div>
                  </div>
                </li>
                <li className="list-group-item">
                  <div className="todo-indicator bg-info"></div>
                  <div className="widget-content p-0">
                    <div className="widget-content-wrapper">
                      <div className="widget-content-left mr-2">
                        <div className="custom-checkbox custom-control">
                          <input className="custom-control-input" id="exampleCustomCheckbox2" type="checkbox" />
                          <label className="custom-control-label" for="exampleCustomCheckbox2">&nbsp;</label>
                        </div>
                      </div>
                      <div className="widget-content-left">
                        <div className="widget-heading">Office grocery shopping</div>
                        <div className="widget-subheading">By Tida</div>
                      </div>
                      <div className="widget-content-right">
                        <button className="border-0 btn-transition btn btn-outline-success">
                          <i className="fa fa-check"></i></button>
                        <button className="border-0 btn-transition btn btn-outline-danger">
                          <i className="fa fa-trash"></i> </button>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="list-group-item">
                  <div className="todo-indicator bg-success"></div>
                  <div className="widget-content p-0">
                    <div className="widget-content-wrapper">
                      <div className="widget-content-left mr-2">
                        <div className="custom-checkbox custom-control">
                          <input className="custom-control-input" id="exampleCustomCheckbox3" type="checkbox" />
                          <label className="custom-control-label" for="exampleCustomCheckbox3">&nbsp;</label>
                        </div>
                      </div>
                      <div className="widget-content-left flex2">
                        <div className="widget-heading">Ask for Lunch to Clients</div>
                        <div className="widget-subheading">By Office Admin</div>
                      </div>
                      <div className="widget-content-right">
                        <button className="border-0 btn-transition btn btn-outline-success">
                          <i className="fa fa-check"></i></button>
                        <button className="border-0 btn-transition btn btn-outline-danger">
                          <i className="fa fa-trash"></i> </button>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="list-group-item">
                  <div className="todo-indicator bg-success"></div>
                  <div className="widget-content p-0">
                    <div className="widget-content-wrapper">
                      <div className="widget-content-left mr-2">
                        <div className="custom-checkbox custom-control">
                          <input className="custom-control-input" id="exampleCustomCheckbox10" type="checkbox" />
                          <label className="custom-control-label" for="exampleCustomCheckbox10">&nbsp;</label>
                        </div>
                      </div>
                      <div className="widget-content-left flex2">
                        <div className="widget-heading">Client Meeting at 11 AM</div>
                        <div className="widget-subheading">By CEO</div>
                      </div>
                      <div className="widget-content-right">
                        <button className="border-0 btn-transition btn btn-outline-success">
                          <i className="fa fa-check"></i></button>
                        <button className="border-0 btn-transition btn btn-outline-danger">
                          <i className="fa fa-trash"></i> </button>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="d-block text-right card-footer"><button className="mr-2 btn btn-link btn-sm">Cancel</button>
        
        <Link className="btn btn-outline-light btn-primary" to={"/tasks/add"}>Add Task</Link>
        </div>
    </div>
  
        );
    }
}