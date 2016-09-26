/**
 * Compute Service API
 * No descripton provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/CwlBinding'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CwlBinding'));
  } else {
    // Browser globals (root is window)
    if (!root.ComputeServiceApi) {
      root.ComputeServiceApi = {};
    }
    root.ComputeServiceApi.Job = factory(root.ComputeServiceApi.ApiClient, root.ComputeServiceApi.CwlBinding);
  }
}(this, function(ApiClient, CwlBinding) {
  'use strict';




  /**
   * The Job model module.
   * @module model/Job
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>Job</code>.
   * @alias module:model/Job
   * @class
   * @param id {String} 
   * @param workflow {String} 
   * @param input {module:model/CwlBinding} 
   * @param state {module:model/Job.StateEnum} 
   * @param output {module:model/CwlBinding} 
   * @param log {String} 
   */
  var exports = function(id, workflow, input, state, output, log) {
    var _this = this;

    _this['id'] = id;
    _this['workflow'] = workflow;
    _this['input'] = input;
    _this['state'] = state;
    _this['output'] = output;
    _this['log'] = log;
  };

  /**
   * Constructs a <code>Job</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Job} obj Optional instance to populate.
   * @return {module:model/Job} The populated <code>Job</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('workflow')) {
        obj['workflow'] = ApiClient.convertToType(data['workflow'], 'String');
      }
      if (data.hasOwnProperty('input')) {
        obj['input'] = CwlBinding.constructFromObject(data['input']);
      }
      if (data.hasOwnProperty('state')) {
        obj['state'] = ApiClient.convertToType(data['state'], 'String');
      }
      if (data.hasOwnProperty('output')) {
        obj['output'] = CwlBinding.constructFromObject(data['output']);
      }
      if (data.hasOwnProperty('log')) {
        obj['log'] = ApiClient.convertToType(data['log'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {String} workflow
   */
  exports.prototype['workflow'] = undefined;
  /**
   * @member {module:model/CwlBinding} input
   */
  exports.prototype['input'] = undefined;
  /**
   * @member {module:model/Job.StateEnum} state
   */
  exports.prototype['state'] = undefined;
  /**
   * @member {module:model/CwlBinding} output
   */
  exports.prototype['output'] = undefined;
  /**
   * @member {String} log
   */
  exports.prototype['log'] = undefined;


  /**
   * Allowed values for the <code>state</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StateEnum = {
    /**
     * value: "Waiting"
     * @const
     */
    "Waiting": "Waiting",
    /**
     * value: "Running"
     * @const
     */
    "Running": "Running",
    /**
     * value: "Success"
     * @const
     */
    "Success": "Success",
    /**
     * value: "Canceled"
     * @const
     */
    "Canceled": "Canceled",
    /**
     * value: "TemporaryFailure"
     * @const
     */
    "TemporaryFailure": "TemporaryFailure",
    /**
     * value: "Failed"
     * @const
     */
    "Failed": "Failed",
    /**
     * value: "SystemError"
     * @const
     */
    "SystemError": "SystemError"  };


  return exports;
}));


